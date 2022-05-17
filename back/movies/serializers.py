from rest_framework import serializers
from .models import Movie, Genre, Video 


class MovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('title','overview',)


class MovieSerializer(serializers.ModelSerializer):
    class GenreSerializer(serializers.ModelSerializer):

        class Meta:
            model = Genre
            fields = ('name', )

    class VideoSerializer(serializers.ModelSerializer):

        class Meta:
            model = Video
            fields = ('key', )

    genres = GenreSerializer(many=True, read_only=True)
    videos = VideoSerializer(read_only=True)

    class Meta:
        model = Movie
        fields = ('__all__')