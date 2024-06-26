from django.shortcuts import render
from .models import Notes
from rest_framework import generics

from django.contrib.auth.models import User

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import generics

from rest_framework import viewsets
from .serializers import Userserializer,NoteSerializer,DataSerializer

# Create your views here.

#notes manageent view
class NotesViewset(generics.ListCreateAPIView):
    serializer_class=NoteSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        return Notes.objects.filter(user=user)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)


#delte a file
            
class NoteDelete(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Notes.objects.filter(user=user)


#usser creation view 
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = Userserializer
    permission_classes = [AllowAny]


#get all file
class FilesViewset(generics.ListAPIView):
    queryset = Notes.objects.all()
    serializer_class=DataSerializer
    permission_classes = [AllowAny]
    
   
class NoteUpdate(generics.RetrieveUpdateAPIView):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]
    queryset = Notes.objects.all()

    def get_queryset(self):
        user = self.request.user
        return Notes.objects.filter(user=user)

    def put(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)