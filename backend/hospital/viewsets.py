import pandas as pd
from io import BytesIO
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from .models import *
from .serializers import *
from django.db import models


# Função criada para exportar dados para Excel
def export_to_excel(queryset, model_name):
    # Converte o queryset em uma lista de dicionários
    data = []
    for obj in queryset:
        record = {
            'enfermeiro': str(obj.enfermeiro),  # Insere o nome completo do enfermeiro que criou
            'data': obj.data.replace(tzinfo=None) if obj.data else None,  # Remove  timezone, assim não da erro quando for gerar o arquivo
        }

        # Foi adicionado outros campos do objeto, consertanto o datetime
        for field in obj._meta.fields:
            if isinstance(field, models.DateTimeField):
                value = getattr(obj, field.name)
                record[field.name] = value.replace(tzinfo=None) if value else None  # Realiza a conversão do timezone
            else:
                record[field.name] = getattr(obj, field.name)

        data.append(record)

    # Realiza a criação do DataFrame
    df = pd.DataFrame(data)

    # Realiza a remoção de campos que não são necessários, caso tenha
    if 'id' in df.columns:
        df.drop(columns=['id'], inplace=True)

    # Salva o DataFrame em um buffer de memória
    buffer = BytesIO()
    with pd.ExcelWriter(buffer, engine='xlsxwriter') as writer:
        df.to_excel(writer, sheet_name=model_name, index=False)
    buffer.seek(0)

    # Envia o arquivo como uma resposta HTTP
    response = HttpResponse(buffer, content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    response['Content-Disposition'] = f'attachment; filename={model_name}.xlsx'
    return response


# Classe atualizada e com função para exportar o arquivo
class ClassificacaoDeRiscoModelViewSet(viewsets.ModelViewSet):
    # Busca os dados no BD do model 'ClassificacaoDeRisco'
    queryset = ClassificacaoDeRisco.objects.all()

    # Serializa os dados em JSON da classe
    serializer_class = ClassificacaoDeRiscoSerializer

    # Verifica se o usuário tem as permissões concedidas no Painel do Admin
    permission_classes = [permissions.DjangoModelPermissions]

    # Função que exporta as tabelas em um arquivo Excel.
    @action(detail=False, methods=['get'], url_path='export')
    def export_excel(self, request):
        queryset = self.get_queryset()
        return export_to_excel(queryset, 'ClassificacaoDeRisco')


# Classe atualizada e com função para exportar o arquivo
class BlocoCirurgicoModelViewSet(viewsets.ModelViewSet):
    # Busca os dados no BD do model 'BlocoCirurgico'
    queryset = BlocoCirurgico.objects.all()

    # Serializa os dados em JSON da classe
    serializer_class = BlocoCirurgicoSerializer

    # Verifica se o usuário tem as permissões concedidas no Painel do Admin
    permission_classes = [permissions.DjangoModelPermissions]

    # Função que exporta as tabelas em um arquivo Excel.
    @action(detail=False, methods=['get'], url_path='export')
    def export_excel(self, request):
        queryset = self.get_queryset()
        return export_to_excel(queryset, 'BlocoCirurgico')


# Classe atualizada e com função para exportar o arquivo
class UnidadeDeInternacaoModelViewSet(viewsets.ModelViewSet):
    # Busca os dados no BD do model 'UnidadeDeInternacao'
    queryset = UnidadeDeInternacao.objects.all()

    # Serializa os dados em JSON da classe
    serializer_class = UnidadeDeInternacaoSerializer

    # Verifica se o usuário tem as permissões concedidas no Painel do Admin
    permission_classes = [permissions.DjangoModelPermissions]

    # Função que exporta as tabelas em um arquivo Excel.
    @action(detail=False, methods=['get'], url_path='export')
    def export_excel(self, request):
        queryset = self.get_queryset()
        return export_to_excel(queryset, 'UnidadeDeInternacao')
