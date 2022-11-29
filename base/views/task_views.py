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