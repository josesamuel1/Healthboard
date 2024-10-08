from django.contrib import admin
from django.urls import path, include
# Importa as configurações das views do DRF Simple JWT de obter, atualizar e verificar o Token
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView


urlpatterns = [
    # Link para a Página do Admin
    path('admin/', admin.site.urls),

    # Links de Autenticação da API (Simple JWT)
    # Link para receber a API
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),

    # Link para atualizar a API
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Link para verificar se o token ainda é válido
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    # Link da API dos Profissionais de Saúde
    path('api/', include('profissional.urls')),

    # Link da API dos Setores do Hospital
    path('api/', include('hospital.urls'))
]
