from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Task(models.Model):
    creator = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    handler = models.ForeignKey(User, related_name='handler', on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=250)
    type = models.CharField(max_length=250)
    status = models.CharField(max_length=250)
    # message
    description = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)