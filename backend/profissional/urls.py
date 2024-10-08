from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import *


# Classe do Rest Framework que está sendo criada para registrar as rotas
router = DefaultRouter()

# Registrando as rotas que redireciona as
# requisições para o seu respectivo ModelViewSet
router.register('usuario', UsuarioModelViewSet)

urlpatterns = [
    # Criando rotas da API dos models usando o router
    # e incluindo as URL's registradas no router
    path('', include(router.urls)),
]
