from django.urls import path
from base.views import project_views as views

urlpatterns = [
    path('create/', views.createProject, name='create-project'),
    path('', views.getProjects, name='get-projects'),
    path('<str:pk>/', views.getProject, name='get-project'),
    path('contributors/add/<str:pk>/', views.addContributors, name='add-contributors'),
    path('edit/<str:pk>/', views.editProject, name='edit-project'),
    path('delete/<str:pk>/', views.deleteProject, name='delete-project'),
]