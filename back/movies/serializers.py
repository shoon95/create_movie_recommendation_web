from rest_framework import serializers
from .models import Movie, Genre, Video 
from community.models import Review, Comment
from django.contrib.auth import get_user_model

User = get_user_model()

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
    class ReviewSerializer(serializers.ModelSerializer):

        class Meta:
            model = Review
            fields = ('__all__')
            depth = 1

    reviews = ReviewSerializer(many=True, read_only=True)    
    genres = GenreSerializer(many=True, read_only=True)
    videos = VideoSerializer(read_only=True)

    class Meta:
        model = Movie
        fields = ('__all__')
        depth = 1


class MovieListSerializer(serializers.ModelSerializer):

    class VideoSerializer(serializers.ModelSerializer):

        class Meta:
            model = Video
            fields = ('youtube_key', )

    class ReviewSerializer(serializers.ModelSerializer):

        class CommentSerializer(serializers.ModelSerializer):
            class Meta:
                model = Comment
                fields = ('__all__')
                depth = 1


        comment_set = CommentSerializer(many=True, read_only=True)
        like_count = serializers.IntegerField(source='like_user.count', read_only=True)

        class Meta:
            model = Review
            fields = ('__all__')
            depth = 1

    class UserSerializer(serializers.ModelSerializer):

        class Meta:
            model = User
            fields = ('__all__')

    user = UserSerializer(many=True, read_only=True)
    reviews = ReviewSerializer( many=True)
    genres = GenreSerializer(many=True, read_only=True)
    videos = VideoSerializer(read_only=True)

    class Meta:
        model = Movie
        fields = ('__all__')
        depth = 1

class GenreListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Genre
        fields = ('__all__')