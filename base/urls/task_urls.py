from django.urls import path
from base.views import task_views as views

urlpatterns = [
    path('for-project/<str:pk>/', views.getProjectTasks, name='project-tasks'),
    path('<str:pk>/', views.getSingleTask, name='single-task'),
    path('edit/<str:pk>/', views.editTask, name='edit-task'),
    path('update/to-in-progress/<str:pk>/', views.editTask, name='edit-task'),
    path('update/to-done/<str:pk>/', views.editTask, name='edit-task'),
    path('delete/<str:pk>/', views.deleteTask, name='delete-task'),
    path('create/', views.createTask, name='create-task'),
]