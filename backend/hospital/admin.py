from django.contrib import admin
from hospital.models import *
from profissional.models import Usuario


# Exibe as Classificações de Risco na tela do Admin
@admin.register(ClassificacaoDeRisco)
class ClassificacoesDeRisco(admin.ModelAdmin):
    # Lista e habilita as buscas pelos enfermeiros
    list_display = ('id', 'enfermeiro', 'enfermeiro__coren', 'data',)
    list_filter = ('data',)
    search_fields = ('enfermeiro', 'enfermeiro__coren', 'data',)

    # Organiza a página de criação de Classificação de Risco,
    # separando por categorias e ordenando em ordem decrescente
    fieldsets = (
        ('Enfermeiro e data deste formulário', {
            'fields': (
                'enfermeiro', 'data',
                ),
            },
        ),
        ('Informações do formulário', {
            'fields': (
                ('pacientes_vermelho', 'pacientes_laranja', 'pacientes_amarelo', 'pacientes_verde', 'pacientes_azul',), 
                ),
            },
        ),
    )


    # Filtra a seleção de Usuários que pode aparecer
    # na escolha de quem vai preencher o formulário
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == 'enfermeiro':
            kwargs['queryset'] = Usuario.objects.filter(groups__name='Enfermeiros')
        return super().formfield_for_foreignkey(db_field, request, **kwargs)


# Exibe os Blocos Cirúrgicos na tela do Admin
@admin.register(BlocoCirurgico)
class BlocosCirurgicos(admin.ModelAdmin):
    # Lista e habilita as buscas pelos enfermeiros
    list_display = ('id', 'enfermeiro', 'enfermeiro__coren', 'data',)
    list_filter = ('data',)
    search_fields = ('enfermeiro', 'enfermeiro__coren', 'data',)

    # Organiza a página de criação de Bloco Cirúrgico,
    # separando por categorias e ordenando em ordem decrescente
    fieldsets = (
        ('Enfermeiro e data deste formulário', {
            'fields': (
                'enfermeiro', 'data',
                ),
            },
        ),
        ('Informações do formulário', {
            'fields': (
                ('cirurgias_normais', 'cirurgias_suspensas', 'cirurgias_emergencias',),
                'observacoes', 
                ),
            },
        ),
    )

    # Filtra a seleção de Usuários que pode aparecer
    # na escolha de quem vai preencher o formulário
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == 'enfermeiro':
            kwargs['queryset'] = Usuario.objects.filter(groups__name='Enfermeiros')
        return super().formfield_for_foreignkey(db_field, request, **kwargs)


# Exibe as Unidades de Internação na tela do Admin
@admin.register(UnidadeDeInternacao)
class UnidadesDeInternacao(admin.ModelAdmin):
    # Lista e habilita as buscas pelos enfermeiros
    list_display = ('id', 'enfermeiro', 'enfermeiro__coren', 'bloco', 'data',)
    list_filter = ('bloco', 'data',)
    search_fields = ('enfermeiro', 'enfermeiro__coren', 'bloco', 'data',)

    # Organiza a página de criação de Unidade de Internação,
    # separando por categorias e ordenando em ordem decrescente
    fieldsets = (
        ('Enfermeiro, bloco e data deste formulário', {
            'fields': (
                ('enfermeiro', 'bloco'), 'data',
                ),
            },
        ),
        ('Informações do formulário', {
            'fields': (
                ('leitos_fixos', 'leitos_bloqueados', 'leitos_extras',),
                ('pacientes_internos', 'entradas_novas', 'entradas_transf_interna',),
                ('saidas_alta', 'saidas_transf_interna', 'saidas_transf_externa', 'saidas_obitos_mais24h', 'saidas_obitos_menos24h', 'saidas_desistencias',),
                ),
            },
        ),
    )

    # Filtra a seleção de Usuários que pode aparecer
    # na escolha de quem vai preencher o formulário
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == 'enfermeiro':
            kwargs['queryset'] = Usuario.objects.filter(groups__name='Enfermeiros')
        return super().formfield_for_foreignkey(db_field, request, **kwargs)
