from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout

from projects.models import (
    Project
)
from projects.forms import (
    ProjectForm
)

# Create your views here.
def home_view(request):
    context = {
        "projects": Project.objects.all(),
        "form": ProjectForm()
    }
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user is None:
            context = {"error": "Invalid username or password"}
            return render(request, 'home/home.html', {})
        login(request, user)
        return render(request, 'projects/projects.html', context)
    return render(request, 'home/home.html', {})

def logout_view(request):
    #if request.method == "POST":
    #    username = request.POST.get("username")
    #    password = request.POST.get("password")
    #    user = authenticate(request, username=username, password=password)
    #    if user is None:
    #        context = {"error": "Invalid username or password"}
    #        return render(request, 'home/home.html', {})
    #    login(request, user)
    #    return render(request, 'projects/projects.html', context)
    logout(request)
    return home_view(request)