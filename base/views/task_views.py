from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from base.models import Task, Project
from base.serializers import TaskSerializer

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
def editTask(request, pk):
    data = request.data
    task = Task.objects.get(id=pk)

    task.name=data['name'],
    task.type=data['type'],
    task.urgency=data['urgency'],
    task.description=data['description']

    task.save()
    serializer = TaskSerializer(task, many=False)

    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteTask(request, pk):
    task = Task.objects.get(id=pk)
    task.delete()
    return Response('Task was Deleted')