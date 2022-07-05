from django.shortcuts import render

from rest_framework import viewsets

from .models import *
from .serializers import *

# Create your views here.

class TodoViewSet(viewsets.ModelViewSet):
    queryset = TodoListItem.objects.all()
    serializer_class = TodoListItemSerializer