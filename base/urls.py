from django.urls import path
from . import views

urlpatterns = [
    path('routes/', views.getRoutes, name='routes'),
    path('projects/', views.getProjects, name='get-projects'),
]