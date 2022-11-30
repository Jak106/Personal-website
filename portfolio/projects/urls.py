from django.urls import path
from . import views as v
urlpatterns = [
    path('', v.projects_view, name="projects"),
    path('delete/<int:id>', v.deleteProject_view, name="projectDelete"),
    path('SealsPriceCounter/', v.spc_view, name="spc"),
    path('Hangman/', v.hangman_view, name="hangman"),
    path('tictactoe/', v.tictactoe_view, name="tictactoe"),
    path('euroscola/', v.euroschool_view, name="euroschool"),
    path('euroscola/eckologicke_polnohospodarstvo', v.ecohosp_view, name="ecohosp")
]
