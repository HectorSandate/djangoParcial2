from django.urls import path
from . import views

urlpatterns = [
    path('ingresar/', views.ingresar_receta, name='ingresar_receta'),
]
