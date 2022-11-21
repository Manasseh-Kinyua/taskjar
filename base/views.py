from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def getRoutes(request):
    routes = [
        'api/projects/',
        'api/projects/:id/',
        'api/projects/tasks/',
        'api/projects/tasks/:id/',
    ]
    return JsonResponse(routes, safe=False)