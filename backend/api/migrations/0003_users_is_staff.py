# Generated by Django 5.0.6 on 2024-08-10 14:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_users_user_alter_users_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='is_staff',
            field=models.BooleanField(default=True),
        ),
    ]
