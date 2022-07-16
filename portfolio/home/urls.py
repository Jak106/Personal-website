from . import views as v
from django.urls import path

urlpatterns = [
    path('', v.home_view, name="home"),
    path('logout/', v.logout_view, name="logout")
]
