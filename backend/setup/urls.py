from django.contrib import admin
from django.urls import path, include
# Importa as configurações das views do DRF Simple JWT de obter, atualizar e verificar o Token
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from django.urls import re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
       title="Healthboard",
       default_version='v1',
       description="API do projeto Healthboard",
       terms_of_service="https://www.google.com/policies/terms/",
       contact=openapi.Contact(email="josesamuel004@gmail.com"),
       license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    # Link para a Página do Admin Fake e Verdadeira (HoneyPot)
    path('admin/', include('admin_honeypot.urls', namespace='admin_honeypot')),
    path('secret/', admin.site.urls),
    
    # Link do Swagger
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

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
    path('api/', include('hospital.urls')),
]
