from rest_framework import viewsets, permissions
from .models import *
from .serializers import *


# Classe Usuário que herda outra classe ModelViewSet (CRUD Completo)
class UsuarioModelViewSet(viewsets.ModelViewSet):
    # Busca os dados no BD do model Usuário
    queryset = Usuario.objects.all()

    # Serializa os dados em JSON da classe
    serializer_class = UsuarioSerializer

    # Verifica se o usuário tem as permissões concedidas no Painel do Admin
    permission_classes = [permissions.DjangoModelPermissions]
