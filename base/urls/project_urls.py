from django.urls import path
from base.views import project_views as views

urlpatterns = [
    path('create/', views.createProject, name='create-project'),
    path('', views.getProjects, name='get-projects'),
    path('<str:pk>/', views.getProject, name='get-project'),
    path('edit/<str:pk>/', views.editProject, name='edit-project'),
]