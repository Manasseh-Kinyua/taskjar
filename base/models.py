from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Project(models.Model):
    scrum = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    contributors = models.ManyToManyField(User, related_name='contributors', blank=True)
    name = models.CharField(max_length=250)
    description = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Task(models.Model):
    creator = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    handler = models.ForeignKey(User, related_name='handler', on_delete=models.SET_NULL, null=True, blank=True)
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=250)
    type = models.CharField(max_length=250)
    urgency = models.CharField(max_length=250)
    status = models.IntegerField(blank=True)
    description = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    body = models.TextField()
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.body[0:50]
