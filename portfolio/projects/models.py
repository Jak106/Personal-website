from django.db import models
import os

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=50)
    organization = models.CharField(max_length=100, blank=True, default='', null=True)
    description = models.CharField(max_length=500)
    pictureName = models.ImageField(upload_to="images/")
    link = models.CharField(max_length=100)
    linkType = models.CharField(max_length=1)
    class Meta:
        db_table = "projects"
    def get_absolute_image(self):
        return os.path.join('/media', self.pictureName.name)
