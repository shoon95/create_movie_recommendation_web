from django.db import models
from django.contrib.auth.models import AbstractUser
from Mozul import settings
import os


def user_directory_path(instance, filename):
    return f'users/{instance.username}/{filename}'
def user_path(instance):
    return f'users/{instance.username}'

class User(AbstractUser):
    
    nickname = models.CharField(max_length=10, blank=True)
    introduce = models.CharField(max_length=200)
    followings = models.ManyToManyField('self', symmetrical=False, related_name='followers')
    profile_img = models.ImageField(upload_to=user_directory_path, blank=True)
    def delete(self, *args, **kargs):
        if self.profile_img:
            img_path = f'{settings.MEDIA_ROOT}/{user_path}'
            os.remove(os.path.join(img_path, self.profile_img.path))
        super(User, self).delete(*args, **kargs)
    # profile_img = models.TextField(null=True, blank=True)