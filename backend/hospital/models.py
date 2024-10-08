from django.db import models
from django.core.validators import MinValueValidator
from profissional.models import Usuario


# Classe do Bloco de Classificação de Risco, armazenando a data de criação, o Enfermeiro que preencher
# o formulário e a Quantidade de Pacientes do Risco Vermelho, Laranja, Amarelo, Verde e Azul
class ClassificacaoDeRisco(models.Model):
    enfermeiro = models.ForeignKey(Usuario, null=False, blank=False, verbose_name='Enfermeiro', on_delete=models.PROTECT)
    data = models.DateTimeField(auto_now=False, null=False, verbose_name='Data deste formulário')
    pacientes_vermelho = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Pacientes não pode ser inferior a zero.')], null=False, verbose_name='Pacientes com risco Vermelho')
    pacientes_laranja = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Pacientes não pode ser inferior a zero.')], null=False, verbose_name='Pacientes com risco Laranja')
    pacientes_amarelo = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Pacientes não pode ser inferior a zero.')], null=False, verbose_name='Pacientes com risco Amarelo')
    pacientes_verde = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Pacientes não pode ser inferior a zero.')], null=False, verbose_name='Pacientes com risco Verde')
    pacientes_azul = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Pacientes não pode ser inferior a zero.')], null=False, verbose_name='Pacientes com risco Azul')

    # Classe que define algumas configurações do Model
    class Meta:
        # Ordenação padrão de A-Z
        ordering = ['data', 'enfermeiro',]
        # Nome singular e plural do Model
        verbose_name = 'classificação de risco'
        verbose_name_plural = 'classificações de risco'

    # Função que retorna a data do formulário criado
    def __str__(self):
        return f"Form da Classificação de Risco do dia {self.data.date()}"


# Classe do Bloco Cirúrgico, armazenando a data de criação, o Enfermeiro que preencher o formulário
# e a Quantidade de Cirurgias Eletivas Normais, Suspensas, Energenciais e alguma observação, caso tenha
class BlocoCirurgico(models.Model):
    enfermeiro = models.ForeignKey(Usuario, null=False, blank=False, verbose_name='Enfermeiro', on_delete=models.PROTECT)
    data = models.DateTimeField(auto_now=False, null=False, verbose_name='Data deste formulário')
    cirurgias_normais = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Cirurgias não pode ser inferior a zero.')], null=False, verbose_name='Cirurgias Eletivas Normais')
    cirurgias_suspensas = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Cirurgias não pode ser inferior a zero.')], null=False, verbose_name='Cirurgias Eletivas Suspensas')
    cirurgias_emergencias = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Cirurgias não pode ser inferior a zero.')], null=False, verbose_name='Cirurgias Eletivas de Emergência')
    observacoes = models.TextField(default='', max_length=127, editable=True, null=False, blank=False, verbose_name='Observações', help_text='Caso uma ou mais cirurgias tenham sido suspensas, favor justificar a suspensão das mesmas.')

    # Classe que define algumas configurações do Model
    class Meta:
        # Ordenação padrão de A-Z
        ordering = ['data', 'enfermeiro',]
        # Nome singular e plural do Model
        verbose_name = 'bloco cirúrgico'
        verbose_name_plural = 'blocos cirúrgicos'

    # Função que retorna a data do formulário criado
    def __str__(self):
        return f"Form do Bloco Cirúrgico do dia {self.data.date()}"


# Classe da Unidade de Internação, armazenando a data de criação, o Enfermeiro que preencher o
# formulário e a Quantidade de Pacientes nos leitos fixos, bloqueados, extras, Pacientes internos,
# Entradas novas, por transferência interna, saídas por altas, por transferência interna e externa,
# por óbitos com mais e menos de 24h e por desistências
class UnidadeDeInternacao(models.Model):
    BLOCOS_CHOICES = [
        ('blocoCM', 'Clínica Médica'),
        ('blocoCC', 'Clínica Cirúrgica'),
        ('blocoUTI', 'UTI'),
    ]

    enfermeiro = models.ForeignKey(Usuario, null=False, blank=False, verbose_name='Enfermeiro', on_delete=models.PROTECT)
    bloco = models.CharField(choices=BLOCOS_CHOICES, max_length=127, verbose_name='Bloco Referente')
    data = models.DateTimeField(auto_now=False, null=False, verbose_name='Data deste formulário')
    leitos_fixos = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Leitos não pode ser inferior a zero.')], verbose_name='Leitos Fixos')
    leitos_bloqueados = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Leitos não pode ser inferior a zero.')], verbose_name='Leitos Bloqueados')
    leitos_extras = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Leitos não pode ser inferior a zero.')], verbose_name='Leitos Extras')
    pacientes_internos = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Pacientes não pode ser inferior a zero.')], verbose_name='Pacientes Internos')
    entradas_novas = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Entradas não pode ser inferior a zero.')], verbose_name='Entradas Novas')
    entradas_transf_interna = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Entradas não pode ser inferior a zero.')], verbose_name='Entradas por Transferência Interna')
    saidas_alta = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Entradas não pode ser inferior a zero.')], verbose_name='Saídas por Alta')
    saidas_transf_interna = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Saídas não pode ser inferior a zero.')], verbose_name='Saídas por Transferência Interna')
    saidas_transf_externa = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Saídas não pode ser inferior a zero.')], verbose_name='Saídas por Transferência Externa')
    saidas_obitos_mais24h = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Saídas não pode ser inferior a zero.')], verbose_name='Saídas por Óbitos acima de 24h')
    saidas_obitos_menos24h = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Saídas não pode ser inferior a zero.')], verbose_name='Saídas por Óbitos abaixo de 24h')
    saidas_desistencias = models.IntegerField(default=0, validators=[MinValueValidator(0, 'Número de Saídas não pode ser inferior a zero.')], verbose_name='Saídas por Desistência')

    # Classe que define algumas configurações do Model
    class Meta:
        # Ordenação padrão de A-Z
        ordering = ['data', 'bloco', 'enfermeiro',]
        # Nome singular e plural do Model
        verbose_name = 'unidade de internação'
        verbose_name_plural = 'unidades de internação'

    # Função que retorna a data do formulário criado.
    def __str__(self):
        return f"Form da Unidade {self.bloco} do dia {self.data.date()}"
