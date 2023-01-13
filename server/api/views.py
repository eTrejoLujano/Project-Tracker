from django.shortcuts import render

from .models import Project
from .serializers import ProjectSerializer

from rest_framework import viewsets


class ProjectView(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
