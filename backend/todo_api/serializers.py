from rest_framework import serializers
from .models import *


class TodoListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoListItem
        fields = ['id', 'content', 'when', 'isDone']
