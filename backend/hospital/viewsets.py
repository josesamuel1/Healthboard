from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db import models
from django.db.models import Sum
from django.db.models.functions import TruncMonth
from .models import ClassificacaoDeRisco, BlocoCirurgico, UnidadeDeInternacao
from .serializers import ClassificacaoDeRiscoSerializer, BlocoCirurgicoSerializer, UnidadeDeInternacaoSerializer
from django.http import HttpResponse
import pandas as pd
from io import BytesIO
import matplotlib.pyplot as plt
import numpy as np
import matplotlib
matplotlib.use('Agg')  

# Função para exportar dados para um arquivo Excel
def export_to_excel(queryset, model_name):
    data = []
    for obj in queryset:
        record = {
            'enfermeiro': str(obj.enfermeiro),
            'data': obj.data.replace(tzinfo=None) if obj.data else None,
        }
        # Percorre sobre os campos e formata os dados
        for field in obj._meta.fields:
            value = getattr(obj, field.name)
            if isinstance(field, models.DateTimeField) and value:
                record[field.name] = value.replace(tzinfo=None)
            else:
                record[field.name] = value
        data.append(record)

    # Cria o DataFrame em pandas a partir dos dados extraídos
    df = pd.DataFrame(data)
    if 'id' in df.columns:
        df.drop(columns=['id'], inplace=True)  # Remove a coluna id se estiver presente

    # Converte o DataFrame para o arquivo excel no buffer
    buffer = BytesIO()
    with pd.ExcelWriter(buffer, engine='xlsxwriter') as writer:
        df.to_excel(writer, sheet_name=model_name, index=False)
    buffer.seek(0)

    # Retorna o arquivo excel como resposta HTTP
    response = HttpResponse(buffer, content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    response['Content-Disposition'] = f'attachment; filename={model_name}.xlsx'
    return response

# Função para gerar e exportar um gráfico como imagem PNG
def export_graph_as_image(queryset, model_name):
    fig, ax = plt.subplots(figsize=(12, 8))  # Define o tamanho da figura

    # Gera o gráfico para classificação por cor
    if model_name == 'ClassificacaoDeRisco':
        # Agrupa e agrega os dados por mês e tipo de paciente
        classificacao_por_mes = (
            queryset
            .annotate(mes=TruncMonth('data'))
            .values('mes')
            .annotate(
                total_vermelho=Sum('pacientes_vermelho'),
                total_laranja=Sum('pacientes_laranja'),
                total_amarelo=Sum('pacientes_amarelo'),
                total_verde=Sum('pacientes_verde'),
                total_azul=Sum('pacientes_azul'),
            )
            .order_by('mes')
        )

        # Realiza a extração das informações para as barras do gráfico
        meses = [atd['mes'].strftime('%B %Y') for atd in classificacao_por_mes]
        vermelhos = [atd['total_vermelho'] for atd in classificacao_por_mes]
        laranjas = [atd['total_laranja'] for atd in classificacao_por_mes]
        amarelos = [atd['total_amarelo'] for atd in classificacao_por_mes]
        verdes = [atd['total_verde'] for atd in classificacao_por_mes]
        azuis = [atd['total_azul'] for atd in classificacao_por_mes]

        width = 0.15  # Largura de cada barra
        x = np.arange(len(meses))

        # Cria barras para cada campo de classificação de risco
        bars_vermelho = ax.bar(x - 2 * width, vermelhos, width, label='Vermelho', color='red')
        bars_laranja = ax.bar(x - width, laranjas, width, label='Laranja', color='orange')
        bars_amarelo = ax.bar(x, amarelos, width, label='Amarelo', color='yellow')
        bars_verde = ax.bar(x + width, verdes, width, label='Verde', color='green')
        bars_azul = ax.bar(x + 2 * width, azuis, width, label='Azul', color='blue')

        # Adiciona os rótulos com valores acima das barras
        for bars, values in zip([bars_vermelho, bars_laranja, bars_amarelo, bars_verde, bars_azul],
                                [vermelhos, laranjas, amarelos, verdes, azuis]):
            for bar, value in zip(bars, values):
                height = bar.get_height()
                ax.text(bar.get_x() + bar.get_width() / 2, height + 0.5, str(value), ha='center', va='bottom')

        ax.set_title(f'Total de Pacientes por Classificação de Risco e Mês - {model_name}')
        ax.legend(title="Classificação de Risco")
    
    # Gráfico de Bloco Cirúrgico
    elif model_name == 'BlocoCirurgico':
        cirurgias_por_mes = (
            queryset
            .annotate(mes=TruncMonth('data'))
            .values('mes')
            .annotate(
                total_normais=Sum('cirurgias_normais'),
                total_suspensas=Sum('cirurgias_suspensas'),
                total_emergencias=Sum('cirurgias_emergencias'),
            )
            .order_by('mes')
        )

        # Realiza a extraççao dos dados para o gráfico
        meses = [atd['mes'].strftime('%B %Y') for atd in cirurgias_por_mes]
        normais = [atd['total_normais'] for atd in cirurgias_por_mes]
        suspensas = [atd['total_suspensas'] for atd in cirurgias_por_mes]
        emergencias = [atd['total_emergencias'] for atd in cirurgias_por_mes]

        width = 0.2  # Largura de cada barra
        x = np.arange(len(meses))

        # Cria as barras para cada tipo de cirurgia
        bars_normais = ax.bar(x - width, normais, width, label='Cirurgias Normais', color='blue')
        bars_suspensas = ax.bar(x, suspensas, width, label='Cirurgias Suspensas', color='gray')
        bars_emergencias = ax.bar(x + width, emergencias, width, label='Cirurgias Emergenciais', color='red')

        # Adiciona rótulos com valores acima das barras
        for bars, values in zip([bars_normais, bars_suspensas, bars_emergencias],
                                [normais, suspensas, emergencias]):
            for bar, value in zip(bars, values):
                height = bar.get_height()
                ax.text(bar.get_x() + bar.get_width() / 2, height + 0.5, str(value), ha='center', va='bottom')

        ax.set_title(f'Total de Cirurgias por Tipo e Mês - {model_name}')
        ax.legend(title="Tipo de Cirurgia")

    # Gráfico de Unidade de Internação com tipos de leitos e categorias de internação
    elif model_name == 'UnidadeDeInternacao':
        leitos_por_mes_categoria = (
            queryset
            .annotate(mes=TruncMonth('data'))
            .values('mes', 'bloco')
            .annotate(
                total_fixos=Sum('leitos_fixos'),
                total_bloqueados=Sum('leitos_bloqueados'),
                total_extras=Sum('leitos_extras'),
                total_internos=Sum('pacientes_internos')
            )
            .order_by('mes', 'bloco')
        )

        # Define as categorias e meses para o gráfico
        categorias = list({atd['bloco'] for atd in leitos_por_mes_categoria})
        meses = [atd['mes'].strftime('%B %Y') for atd in leitos_por_mes_categoria if atd['bloco'] == categorias[0]]

        width = 0.2  # Largura de cada barra
        x = np.arange(len(meses))

        # Cria as barras para cada tipo de leito em cada categoria
        for i, categoria in enumerate(categorias):
            fixos = [atd['total_fixos'] for atd in leitos_por_mes_categoria if atd['bloco'] == categoria]
            bloqueados = [atd['total_bloqueados'] for atd in leitos_por_mes_categoria if atd['bloco'] == categoria]
            extras = [atd['total_extras'] for atd in leitos_por_mes_categoria if atd['bloco'] == categoria]
            internos = [atd['total_internos'] for atd in leitos_por_mes_categoria if atd['bloco'] == categoria]

            # Empilha os tipos de leitos
            ax.bar(x + i * width, fixos, width, label=f'Leitos Fixos - {categoria}')
            ax.bar(x + i * width, bloqueados, width, bottom=fixos, label=f'Leitos Bloqueados - {categoria}')
            ax.bar(x + i * width, extras, width, bottom=np.array(fixos) + np.array(bloqueados), label=f'Leitos Extras - {categoria}')
            ax.bar(x + i * width, internos, width, bottom=np.array(fixos) + np.array(bloqueados) + np.array(extras), label=f'Pacientes Internos - {categoria}')

        ax.set_title(f'Total de Leitos e Pacientes por Unidade de Internação e Mês - {model_name}')
        ax.legend(title="Tipo de Leito e Categoria")

    ax.set_xticks(x)
    ax.set_xticklabels(meses, rotation=45)
    ax.set_ylabel("Quantidade")
    plt.tight_layout()

    # Salva o gráfico no buffer e retorna como imagem HTTP
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    response = HttpResponse(buffer, content_type='image/png')
    response['Content-Disposition'] = f'attachment; filename={model_name}.png'
    return response

# ViewSet de Classificação de Risco com as ações de exportação e reconhecimento automático do enfermeiro sem precisar informar
class ClassificacaoDeRiscoModelViewSet(viewsets.ModelViewSet):
    queryset = ClassificacaoDeRisco.objects.all()
    serializer_class = ClassificacaoDeRiscoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(enfermeiro=self.request.user)

    @action(detail=False, methods=['get'], url_path='export')
    def exportar_dados(self, request):
        return export_to_excel(self.get_queryset(), 'ClassificacaoDeRisco')

    @action(detail=False, methods=['get',], url_path='grafico/export')
    def exportar_grafico(self, request):
        return export_graph_as_image(self.get_queryset(), 'ClassificacaoDeRisco')

# ViewSet de Bloco Cirurgico com as ações de exportação e reconhecimento automaticamento do enfermeiro sem precisar informar
class BlocoCirurgicoModelViewSet(viewsets.ModelViewSet):
    queryset = BlocoCirurgico.objects.all()
    serializer_class = BlocoCirurgicoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(enfermeiro=self.request.user)

    @action(detail=False, methods=['get'], url_path='export')
    def exportar_dados(self, request):
        return export_to_excel(self.get_queryset(), 'BlocoCirurgico')

    @action(detail=False, methods=['get'], url_path='grafico/export')
    def exportar_grafico(self, request):
        return export_graph_as_image(self.get_queryset(), 'BlocoCirurgico')

# ViewSet de UnidadeDeInternacao com as ações de exportação e reconhecimento automaticamento do enfermeiro sem precisar informar
class UnidadeDeInternacaoModelViewSet(viewsets.ModelViewSet):
    queryset = UnidadeDeInternacao.objects.all()
    serializer_class = UnidadeDeInternacaoSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def perform_create(self, serializer):
        serializer.save(enfermeiro=self.request.user)
  
    @action(detail=False, methods=['get'], url_path='export')
    def exportar_dados(self, request):
        return export_to_excel(self.get_queryset(), 'UnidadeDeInternacao')

    @action(detail=False, methods=['get'], url_path='grafico/export')
    def exportar_grafico(self, request):
        return export_graph_as_image(self.get_queryset(), 'UnidadeDeInternacao')
