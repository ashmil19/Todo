from django.db import models
from .choices import WhenChoice


# Create your models here.

class TodoListItem(models.Model):
    content = models.CharField(max_length=100, null=False, help_text='This field is required')
    isDone = models.BooleanField(default=False)
    when = models.CharField(max_length=100, choices=WhenChoice.choices, default=WhenChoice.TODAY)

    def __str__(self):
        return self.content
