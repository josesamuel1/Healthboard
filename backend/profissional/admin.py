from django.contrib import admin
from .models import Usuario
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

# Exibe os Usuários na tela do Admin
@admin.register(Usuario)
class UsuarioAdmin(BaseUserAdmin):
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff',)
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups',)
    search_fields = ('username', 'first_name', 'last_name', 'email',)
    ordering = ('username',)
    filter_horizontal = ('groups', 'user_permissions',)

    # Organiza a página de criação de Usuário, separando
    # por categorias e ordenando em ordem decrescente
    fieldsets = (
        ('Informações pessoais', {
            'fields': (
                'first_name', 'last_name',
                'username', 'email', 'password',
            ),
        },),
        ('Informações profissionais', {
            'fields': (
                'coren',
            ),
        },),
        ('Permissões e autenticações', {
            'fields': (
                'is_active', 'is_staff', 'is_superuser',
                'groups', 'user_permissions',
            ),
        },),
    )
