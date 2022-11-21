from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'