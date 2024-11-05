from django.test import TestCase
from .models import Usuario


# Casos de Teste para o model 'Usuário'
class UsuarioTestCase(TestCase):
    # Função para criar variáveis de teste com base no código existente no projeto
    def setUp(self):
        # Criando o primeiro e segundo usuário com informações básicas
        self.usuario1 = Usuario.objects.create_user(
            username='testuser1', 
            password='12345', 
            first_name='John', 
            last_name='Doe', 
            coren='1234567',
        )

        self.usuario2 = Usuario.objects.create_user(
            username='testuser2', 
            password='23456', 
            first_name='Joseph', 
            last_name='Joestar', 
            coren='2345678',
        )

    # Função que irá testar se o nome completo do usuário coincide com o informado
    def test_str_representation(self):
        self.assertEqual(str(self.usuario1), 'John Doe')
        self.assertEqual(str(self.usuario2), 'Joseph Joestar')

    # Função que irá testar se o tamanho do COREN informado coincide com o informado
    def test_coren_length(self):
        self.assertEqual(len(self.usuario1.coren), 7)
        self.assertNotEqual(len(self.usuario2.coren), 7)
