from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from base.models import Task, Project, Message
from base.serializers import TaskSerializer, MessageSerializerForTask
from django.contrib.auth.models import User

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProjectTasks(request, pk):
    project = Project.objects.get(id=pk)
    
    tasks = project.task_set.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSingleTask(request, pk):
    task = Task.objects.get(id=pk)
    serializer = TaskSerializer(task, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createTask(request):
    creator = request.user
    data = request.data
    project_id = data['project_id']
    project = Project.objects.get(id=project_id)

    task = Task.objects.create(
        creator=creator,
        project=project,
        name=data['name'],
        type=data['type'],
        urgency=data['urgency'],
        status=0,
        description=data['description']
    )
    serializer = TaskSerializer(task, many=False)

    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def assignTaskToUser(request, pk):
    data = request.data
    handler_id = data['user']
    
    task = Task.objects.get(id=pk)
    handler = User.objects.get(id=handler_id)

    task.handler = handler
    task.status = 1

    task.save()
    serializer = TaskSerializer(task, many=False)

    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def editTask(request, pk):
    data = request.data
    task = Task.objects.get(id=pk)

    task.name=data['name']
    task.type=data['type']
    task.urgency=data['urgency']
    task.description=data['description']

    task.save()
    serializer = TaskSerializer(task, many=False)

    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def updateTaskToInProgress(request, pk):
    task = Task.objects.get(id=pk)

    task.status = 2
    task.save()
    serializer = TaskSerializer(task, many=False)

    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def updateTaskToDone(request, pk):
    task = Task.objects.get(id=pk)

    task.status = 3
    task.save()
    serializer = TaskSerializer(task, many=False)

    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteTask(request, pk):
    task = Task.objects.get(id=pk)
    task.delete()
    return Response('Task was Deleted')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createTaskMessage(request):
    user =request.user
    data = request.data
    task_id = data['task_id']
    task = Task.objects.get(id=task_id)

    message = Message.objects.create(
        user=user,
        task=task,
        body=data['body']
    )
    serializer = MessageSerializerForTask(message, many=False)

    return Response(serializer.data)