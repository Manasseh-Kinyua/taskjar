from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status
from base.models import Project
from django.contrib.auth.models import User
from base.serializers import ProjectSerializer

# Create your views here.

@api_view(['GET'])
def getProjects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProject(request, pk):
    project = Project.objects.get(id=pk)
    serializer = ProjectSerializer(project, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProject(request):
    scrum = request.user
    data = request.data

    project = Project.objects.create(
        scrum=scrum,
        name='Sample Name',
        description='Sample Description'
    )
    serializer = ProjectSerializer(project, many=False)

    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def addContributors(request, pk):
    data = request.data
    user_id = data['user']
    print('USER ID....', user_id)

    project = Project.objects.get(id=pk)
    user = User.objects.get(id=user_id)

    project.contributors.add(user)
    serializer = ProjectSerializer(project, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def editProject(request, pk):
    data = request.data
    project = Project.objects.get(id=pk)

    project.name=data['name']
    project.description=data['description']

    project.save()
    serializer = ProjectSerializer(project, many=False)

    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteProject(request, pk):
    project = Project.objects.get(id=pk)
    project.delete()
    return Response('Project was deleted successfully')
