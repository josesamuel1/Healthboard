from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser


# Extensão do QuerySet padrão, customizado
# para fornecer métodos específicos do modelo base
class BaseModelQuerySet(models.QuerySet):
    def delete(self):
        self.update(deleted_at=timezone.now(), is_active=False)


# Filtra automaticamente os registros excluídos, garantindo
# que as queries padrões excluam apenas registros ativos
class BaseManager(models.Manager):
    def get_queryset(self):
        return BaseModelQuerySet(self.model, using=self._db).filter(deleted_at__isnull=True, is_active=True)


class BaseModel(models.Model):
    class Meta:
        # Classe que não pode ser abstrata, apenas herdada
        abstract = True

    # Armazena a data e hora de criação do registro
    created_at = models.DateTimeField(auto_now_add=True)
    # Atualiza automaticamente sempre que o registro é modificado
    updated_at = models.DateTimeField(auto_now=True)
    # Utilizado para soft-delete, marcando a data e hora de exclusão
    deleted_at = models.DateTimeField(editable=False, null=True, blank=True)
    # Indica se o registro está ativo ou foi excluído
    is_active = models.BooleanField(editable=False, default=True)

    objects = BaseManager()

    # Método sobrescrito que desativa o model no bd e salva o momento da deleção
    def delete(self):
        self.is_active = False
        self.deleted_at = timezone.now()
        self.save()

    def hard_delete (self, **kwargs):
        super(BaseModel, self).delete(**kwargs)        


# Nova classe dos Usuários (agora setada como padrão)
# contem primeiro nome, último nome, usuário, email, senha e COREN
class Usuario(AbstractUser):
    coren = models.CharField(max_length=7, verbose_name='COREN', help_text='7 caracteres.')

    # Classe que define algumas configurações do Model
    class Meta:
        # Ordenação padrão de A-Z
        ordering = ['first_name', 'last_name',]
        # Nome singular e plural do Model
        verbose_name = 'usuário'
        verbose_name_plural = 'usuários'

    # Formata a forma que o nome do usuário completo aparece no Painel do Admin
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
