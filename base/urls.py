from django.urls import path
from . import views

urlpatterns = [
    path('routes/', views.getRoutes, name='routes'),
    path('projects/create/', views.createProject, name='create-project'),
    path('projects/', views.getProjects, name='get-projects'),
    path('projects/<str:pk>/', views.getProject, name='get-project'),
    path('projects/edit/<str:pk>/', views.editProject, name='edit-project'),
]