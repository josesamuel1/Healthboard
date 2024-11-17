from rest_framework import serializers
from .models import *


# Classe usada para serializar os dados de algum Model
class ClassificacaoDeRiscoSerializer(serializers.ModelSerializer):
    class Meta:
        # Define o modelo que vai ser serializado
        model = ClassificacaoDeRisco
        
        # Excluindo apenas campos desnecessários para a serialização
        exclude = ['enfermeiro']


# Classe usada para serializar os dados de algum Model
class BlocoCirurgicoSerializer(serializers.ModelSerializer):
    class Meta:
        # Define o modelo que vai ser serializado
        model = BlocoCirurgico
        
        # Excluindo apenas campos desnecessários para a serialização
        exclude = ['enfermeiro']


# Classe usada para serializar os dados de algum Model
class UnidadeDeInternacaoSerializer(serializers.ModelSerializer):
    class Meta:
        # Define o modelo que vai ser serializado
        model = UnidadeDeInternacao
        
        # Excluindo apenas campos desnecessários para a serialização
        exclude = ['enfermeiro']
