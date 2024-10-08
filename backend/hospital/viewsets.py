from rest_framework import viewsets, permissions
from .models import *
from .serializers import *


# Classe 'ClassificacaoDeRisco' que herda outra classe ModelViewSet (CRUD Completo)
class ClassificacaoDeRiscoModelViewSet(viewsets.ModelViewSet):
    # Busca os dados no BD do model 'ClassificacaoDeRisco'
    queryset = ClassificacaoDeRisco.objects.all()

    # Serializa os dados em JSON da classe
    serializer_class = ClassificacaoDeRiscoSerializer

    # Verifica se o usuário tem as permissões concedidas no Painel do Admin
    permission_classes = [permissions.DjangoModelPermissions]


# Classe 'BlocoCirurgico' que herda outra classe ModelViewSet (CRUD Completo)
class BlocoCirurgicoModelViewSet(viewsets.ModelViewSet):
    # Busca os dados no BD do model 'BlocoCirurgico'
    queryset = BlocoCirurgico.objects.all()

    # Serializa os dados em JSON da classe
    serializer_class = BlocoCirurgicoSerializer

    # Verifica se o usuário tem as permissões concedidas no Painel do Admin
    permission_classes = [permissions.DjangoModelPermissions]


# Classe 'UnidadeDeInternacao' que herda outra classe ModelViewSet (CRUD Completo)
class UnidadeDeInternacaoModelViewSet(viewsets.ModelViewSet):
    # Busca os dados no BD do model 'UnidadeDeInternacao'
    queryset = UnidadeDeInternacao.objects.all()

    # Serializa os dados em JSON da classe
    serializer_class = UnidadeDeInternacaoSerializer

    # Verifica se o usuário tem as permissões concedidas no Painel do Admin
    permission_classes = [permissions.DjangoModelPermissions]
