from pickle import NONE
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render
from django.contrib.auth import authenticate, login

from .models import (
    Project
)
from .forms import (
    ProjectForm
)

# Create your views here.
def projects_view(request):
    context = {
        "projects": Project.objects.all(),
        "form": ProjectForm()
    }
    if request.method == "POST":
        if "username" in request.POST:
            username = request.POST.get("username")
            password = request.POST.get("password")
            user = authenticate(request, username=username, password=password)
            if user is None:
                context = {"error": "Invalid username or password"}
                return render(request, 'home/home.html', {})
            login(request, user)
            return render(request, 'projects/projects.html', context)
        else:
            form = ProjectForm(request.POST, request.FILES or NONE)
            if form.is_valid():
                form.save()
                return render(request, 'projects/projects.html', context)
    return render(request, 'projects/projects.html', context)

def deleteProject_view(request, id):
    project = Project.objects.get(id=id)
    project.delete()
    return HttpResponseRedirect(reverse("projects"))

def spc_view(request):
    return render(request, 'projects/spc.html', {})

