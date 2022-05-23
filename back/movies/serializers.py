from rest_framework import serializers
from .models import Movie, Genre, Video 
from community.models import Review


class MovieSearchSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('id','title', 'poster_path',)

class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ('name', )

class MovieDetailSerializer(serializers.ModelSerializer):
    
    class VideoSerializer(serializers.ModelSerializer):
        
        class Meta:
            model = Video
            fields = ('youtube_key', )

    genres = GenreSerializer(many=True, read_only=True)
    videos = VideoSerializer(read_only=True)

    class Meta:
        model = Movie
        fields = ('__all__')


class MovieListSerializer(serializers.ModelSerializer):

    class VideoSerializer(serializers.ModelSerializer):

        class Meta:
            model = Video
            fields = ('youtube_key', )

    class ReviewSerializer(serializers.ModelSerializer):
        
        class Meta:
            model = Review
            fields = ('__all__')

    reviews = ReviewSerializer( many=True)
    genres = GenreSerializer(many=True, read_only=True)
    videos = VideoSerializer(read_only=True)

    class Meta:
        model = Movie
        fields = ('__all__')

class GenreListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Genre
        fields = ('__all__')