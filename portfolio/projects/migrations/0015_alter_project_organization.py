# Generated by Django 4.0.3 on 2022-07-16 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0014_alter_project_organization'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='organization',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
