from django.db import models

# Create your models here.

class TodoListItem(models.Model):
    content = models.CharField(max_length=100, null=False, help_text='This field is required')
    isDone = models.BooleanField(default=False)
    when = models.CharField(max_length=100)