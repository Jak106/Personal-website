from django import forms

from .models import (
    Project
)

class ProjectForm(forms.ModelForm):
    name = forms.CharField(label='', max_length=50, widget=forms.TextInput(attrs = {'class': 'heading-text', 'id':'heading-name', 'placeholder': 'Name'} ))
    organization = forms.CharField(label='', max_length=50, widget=forms.TextInput(attrs = {'class': 'heading-text', 'id':'heading-org', 'placeholder': 'Organization'} ))
    description = forms.CharField(label='', max_length=500, widget=forms.Textarea(attrs = {'id':'heading-description', 'placeholder': 'Description'} ))
    pictureName = forms.ImageField(label='', widget=forms.FileInput(attrs = {'id':'img', 'accept':'image/*'}))
    link = forms.CharField(label='', max_length=100, widget=forms.TextInput(attrs={'class': 'heading-text', 'id': 'heading-link', 'placeholder': 'Link'}))
    CHOICES = [('E','External'),('I','Internal')]
    linkType=forms.CharField(label='', widget=forms.RadioSelect(choices=CHOICES, attrs={'id':'new-radio'}))
    class Meta:
        model = Project
        fields = ["name", "organization", "description", "pictureName", "link", "linkType"]
