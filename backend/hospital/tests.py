from django.test import TestCase
from django.utils import timezone
from profissional.models import Usuario
from django.core.exceptions import ValidationError
from .models import *


# Casos de Teste para o model 'Classificação de Risco'
class ClassificacaoDeRiscoTest(TestCase):
    # Função para criar variáveis de teste com base no código existente no projeto
    def setUp(self):
        # Criando o enfermeiro e uma tabela de classificação de risco com informações básicas
        self.enfermeiro = Usuario.objects.create_user(username='testnurse1', password='testnurse1')
        self.classificacao = ClassificacaoDeRisco.objects.create(
            enfermeiro=self.enfermeiro,
            data=timezone.now(),
            pacientes_vermelho=1,
            pacientes_laranja=2,
            pacientes_amarelo=3,
            pacientes_verde=4,
            pacientes_azul=5,
        )

    # Função que irá testar se a função '__str__' da classificação de risco retorna o que foi informado
    def test_str_representation(self):
        self.assertEqual(
            str(self.classificacao), 
            f"Form da Classificação de Risco do dia {self.classificacao.data.date()}"
        )

    # Função que irá testar se a quantidade de pacientes pode ser um valor negativo
    # Essa função dará erro e tratará o erro, indicando que o ocorrido não pode acontecer
    def test_pacientes_vermelho_nao_negativo(self):
        self.classificacao.pacientes_vermelho = -1
        with self.assertRaises(ValidationError):
            self.classificacao.full_clean()


# Casos de Teste para o model 'Bloco Cirúrgico'
class BlocoCirurgicoTest(TestCase):
    # Função para criar variáveis de teste com base no código existente no projeto
    def setUp(self):
        # Criando o enfermeiro e uma tabela de bloco cirúrgico com informações básicas
        self.enfermeiro = Usuario.objects.create_user(username='testnurse2', password='testnurse2')
        self.bloco = BlocoCirurgico.objects.create(
            enfermeiro=self.enfermeiro,
            data=timezone.now(),
            cirurgias_normais=2,
            cirurgias_suspensas=0,
            cirurgias_emergencias=3,
            observacoes='TestCase observações',
        )

    # Função que irá testar se a função '__str__' da classificação de risco retorna o que foi informado
    def test_str_representation(self):
        self.assertEqual(
            str(self.bloco), 
            f"Form do Bloco Cirúrgico do dia {self.bloco.data.date()}"
        )

    # Função que irá testar se a quantidade de cirurgias pode ser um valor negativo
    # Essa função dará erro e tratará o erro, indicando que o ocorrido não pode acontecer
    def test_cirurgias_normais_nao_negativo(self):
        self.bloco.cirurgias_normais = -1
        with self.assertRaises(ValidationError):
            self.bloco.full_clean()


# Casos de Teste para o model 'Unidade de Internação'
class UnidadeDeInternacaoTest(TestCase):
    # Função para criar variáveis de teste com base no código existente no projeto
    def setUp(self):
        # Criando o enfermeiro e uma tabela de uma unidade de internação com informações básicas
        self.enfermeiro = Usuario.objects.create_user(username='testnurse3', password='testnurse3')
        self.unidade = UnidadeDeInternacao.objects.create(
            enfermeiro=self.enfermeiro,
            bloco='blocoCM',
            data=timezone.now(),
            leitos_fixos=0,
            leitos_bloqueados=1,
            leitos_extras=2,
            pacientes_internos=3,
            entradas_novas=4,
            entradas_transf_interna=5,
            saidas_alta=6,
            saidas_transf_interna=7,
            saidas_transf_externa=8,
            saidas_obitos_mais24h=9,
            saidas_obitos_menos24h=10,
            saidas_desistencias=11,
        )

    # Função que irá testar se a função '__str__' da classificação de risco retorna o que foi informado
    def test_str_representation(self):
        self.assertEqual(
            str(self.unidade), 
            f"Form da Unidade {self.unidade.bloco} do dia {self.unidade.data.date()}"
        )

    # Função que irá testar se a quantidade de leitos pode ser um valor negativo
    # Essa função dará erro e tratará o erro, indicando que o ocorrido não pode acontecer
    def test_leitos_fixos_nao_negativo(self):
        self.unidade.leitos_fixos = -1
        with self.assertRaises(ValidationError):
            self.unidade.full_clean()
