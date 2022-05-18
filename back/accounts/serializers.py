from rest_framework import serializers
from django.contrib.auth import get_user_model
from movies.models import Movie

class ProfileSerializer(serializers.ModelSerializer):

    class MovieSerializer(serializers.ModelSerializer):
        
        class Meta:
            model = Movie
            fields = ('pk', 'title', 'content')

    like_movie = MovieSerializer(many=True)
    movie = MovieSerializer(many=True)

    class Meta:
        model = get_user_model()
        fields = ('pk', 'username', 'email', 'like_movies', 'movies',)