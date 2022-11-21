from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Project
from .serializers import ProjectSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/projects/',
        'api/projects/:id/',
        'api/projects/tasks/',
        'api/projects/tasks/:id/',
    ]
    return Response(routes)

# @api_view(['GET'])
# def getProjects(request):
#     reut