from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Project(models.Model):
    scrum = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    contributors = models.ManyToManyField(User, related_name='contributors', blank=True)
    name = models.CharField(max_length=250)
    description = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

class Task(models.Model):
    creator = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    handler = models.ForeignKey(User, related_name='handler', on_delete=models.SET_NULL, null=True, blank=True)
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=250)
    type = models.CharField(max_length=250)
    status = models.CharField(max_length=250, blank=True)
    # message
    description = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
