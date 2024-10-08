from rest_framework import serializers
from .models import *


# Classe usada para serializar os dados de algum Model
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        # Define o modelo que vai ser serializado
        model = Usuario

        # Quais os campos selecionados para a serialização
        fields = '__all__'
