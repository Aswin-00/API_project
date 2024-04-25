from django.urls import path
from . import views

urlpatterns = [
    path("data/", views.NotesViewset.as_view(), name="note-list"),
    path("data/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path("data/update/<int:pk>/", views.NoteUpdate.as_view(), name="delete-note"),
]