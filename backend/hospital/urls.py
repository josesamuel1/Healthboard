from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import *


# Classe do Rest Framework que está sendo criada para registrar as rotas
router = DefaultRouter()

# Registrando as rotas de Classificação de Risco, Bloco Cirúrgico e Unidade de Internação
# que redireciona as requisições para o seu respectivo ModelViewSet
router.register('classificacao_de_risco', ClassificacaoDeRiscoModelViewSet)
router.register('bloco_cirurgico', BlocoCirurgicoModelViewSet)
router.register('unidade_de_internacao', UnidadeDeInternacaoModelViewSet)

urlpatterns = [
    # Criando as rotas dos models e incluindo as URL's registradas no router
    path('', include(router.urls)),
]
