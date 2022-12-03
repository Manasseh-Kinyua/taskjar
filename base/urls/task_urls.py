from django.urls import path
from base.views import task_views as views

urlpatterns = [
    path('for-project/<str:pk>/', views.getProjectTasks, name='project-tasks'),
    path('create/', views.createTask, name='create-task'),
    path('message/create/', views.createTaskMessage, name='create-task-message'),
    path('<str:pk>/', views.getSingleTask, name='single-task'),
    path('assign-user/<str:pk>/', views.assignTaskToUser, name='assign-task'),
    path('edit/<str:pk>/', views.editTask, name='edit-task'),
    path('update/to-in-progress/<str:pk>/', views.updateTaskToInProgress, name='in-progress-task'),
    path('update/to-done/<str:pk>/', views.updateTaskToDone, name='to-done-task'),
    path('delete/<str:pk>/', views.deleteTask, name='delete-task'),
]