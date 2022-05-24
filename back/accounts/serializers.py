from rest_framework import serializers
from django.contrib.auth import get_user_model
from movies.models import Movie
from community.models import Review

User = get_user_model()

class ProfileSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields = ('pk', 'username', 'nickname', 'profile_img', 'followings', 'followers', 'introduce',)
        read_only_fields = ('username', 'followings')



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