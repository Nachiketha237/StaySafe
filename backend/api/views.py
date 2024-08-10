from .models import Blogs, Announcement, Alert, HelpRequest, Users, Volunteer
from rest_framework import serializers
from .serializer import UsersSerializer, BlogsSerializer, AnnouncementSerializer, AlertSerializer, HelpRequestSerializer, VolunteerSerializer
from rest_framework import viewsets

class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    
    serializer_class = UsersSerializer

class BlogsViewSet(viewsets.ModelViewSet):
    queryset = Blogs.objects.all()
    
    serializer_class = BlogsSerializer

class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

class AnnouncementViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all()
    serializer_class = AnnouncementSerializer

class AlertViewSet(viewsets.ModelViewSet):
    queryset = Alert.objects.all()
    serializer_class = AlertSerializer


class HelpRequestViewSet(viewsets.ModelViewSet):
    queryset = HelpRequest.objects.all()
    serializer_class = HelpRequestSerializer





