from rest_framework import serializers
from django.contrib.auth import get_user_model
from movies.models import Movie
from community.models import Review

User = get_user_model()

class ProfileSerializer(serializers.ModelSerializer):

    # class ReviewSerializer(serializers.ModelSerializer):
        
    #     class Meta:
    #         model = Review
    #         fields = ('pk', 'title', )

    # class MovieSerializer(serializers.ModelSerializer):

    #     class Meta:
    #         model = Movie
    #         fields = ('pk', 'title')

    # like_movie = MovieSerializer(many=True)
    # movie = MovieSerializer(many=True)

    class Meta:
        model = get_user_model()
        fields = ('pk', 'username', 'profile_img', 'followings', 'followers', )