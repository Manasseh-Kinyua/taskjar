from django.urls import path
from base.views import user_views as views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),
    path('profile/', views.getUserProfile, name='user-profile'),
    path('profile/edit/', views.editUserProfile, name='user-profile-edit'),
    path('', views.getAllUsers, name='users'),
    path('contributors/', views.getContributors, name='contributors'),
    path('<str:pk>/', views.getSingleUser, name='user'),
    path('edit/<str:pk>/', views.editUserUser, name='edit-user'),
    path('delete/<str:pk>/', views.deleteUser, name='delete-user'),
]