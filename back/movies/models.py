from django.db import models
from django.conf import settings
# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=50)

class Video(models.Model):
    
    youtube_key = models.TextField()

class Movie(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField()
    popularity = models.FloatField()
    vote_count = models.IntegerField()
    vote_average = models.FloatField()
    overview = models.TextField()
    poster_path = models.CharField(max_length=200)
    genres = models.ManyToManyField(Genre)
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_movies')

    def __str__(self):
        return self.title

