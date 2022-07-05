from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('api', TodoViewSet, basename='todo')

urlpatterns = [
    path('', include(router.urls)),
]
