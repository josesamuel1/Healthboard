from rest_framework import serializers
from .models import *


# Classe usada para serializar os dados de algum Model
class ClassificacaoDeRiscoSerializer(serializers.ModelSerializer):
    class Meta:
        # Define o modelo que vai ser serializado
        model = ClassificacaoDeRisco

        # Quais os campos selecionados para a serialização
        fields = '__all__'


# Classe usada para serializar os dados de algum Model
class BlocoCirurgicoSerializer(serializers.ModelSerializer):
    class Meta:
        # Define o modelo que vai ser serializado
        model = BlocoCirurgico

        # Quais os campos selecionados para a serialização
        fields = '__all__'


# Classe usada para serializar os dados de algum Model
class UnidadeDeInternacaoSerializer(serializers.ModelSerializer):
    class Meta:
        # Define o modelo que vai ser serializado
        model = UnidadeDeInternacao

        # Quais os campos selecionados para a serialização
        fields = '__all__'
