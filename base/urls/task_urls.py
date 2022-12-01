from django.urls import path
from base.views import task_views as views

urlpatterns = [
    path('for-project/<str:pk>/', views.getProjectTasks, name='project-tasks'),
    path('<str:pk>/', views.getSingleTask, name='single-task'),
    path('create/', views.createTask, name='create-task'),
]