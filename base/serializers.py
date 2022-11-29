from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Project, Task
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin']

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

    def get_isAdmin(self, obj):
        return obj.is_staff

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class ProjectSerializerForTask(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['name']

class TaskSerializer(serializers.ModelSerializer):
    creator = serializers.SerializerMethodField(read_only=True)
    handler = serializers.SerializerMethodField(read_only=True)
    project = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Task
        fields = '__all__'

    def get_creator(self, obj):
        creator = obj.creator
        serializer = UserSerializer(creator, many=False)
        return serializer.data

    def get_handler(self, obj):
        handler = obj.handler
        serializer = UserSerializer(handler, many=False)
        return serializer.data

    def get_project(self, obj):
        project = obj.project
        serializer = ProjectSerializerForTask(project, many=False)
        return serializer.data

class ProjectSerializer(serializers.ModelSerializer):
    tasks = serializers.SerializerMethodField(read_only=True)
    scrum = serializers.SerializerMethodField(read_only=True)
    contributors = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Project
        fields = '__all__'

    def get_tasks(self, obj):
        tasks = obj.task_set.all()
        serializer = TaskSerializer(tasks, many=True)
        return serializer.data

    def get_scrum(self, obj):
        scrum = obj.scrum
        serializer = UserSerializer(scrum, many=False)
        return serializer.data

    def get_contributors(self, obj):
        contributors = obj.contributors
        serializer = UserSerializer(contributors, many=True)
        return serializer.data