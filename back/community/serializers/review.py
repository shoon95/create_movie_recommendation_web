from rest_framework import serializers
from django.contrib.auth import get_user_model

from ..models import Review
from .comment import CommentSerializer

User = get_user_model()


class ReviewSerializer(serializers.ModelSerializer):
    
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username', 'profile_img',)

    comments = CommentSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)
    like_users = UserSerializer(read_only=True, many=True)
    like_count = serializers.IntegerField()

    class Meta:
        model = Review
        fields = ('pk', 'user', 'title', 'content', 'comments','like_count', 'like_users','created_at', 'updated_at')


class ReviewListSerializer(serializers.ModelSerializer):
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk','username','profile_img')
            

    user = UserSerializer(read_only=True)
    # comment_count = serializers.IntegerField()
    like_count = serializers.IntegerField()

    class Meta:
        model = Review
        fields = ('pk', 'user', 'title',  'like_count','content', 'created_at', 'updated_at')
        depth = 1
# 'comment_count',