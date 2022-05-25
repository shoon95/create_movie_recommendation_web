from rest_framework import serializers
from django.contrib.auth import get_user_model

from ..models import Review, Comment
from .comment import CommentSerializer

User = get_user_model()


class ReviewSerializer(serializers.ModelSerializer):
    
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
<<<<<<< HEAD
            fields = ('pk', 'username', 'profile_img',)
            depth=1
=======
            fields = ('__all__')
>>>>>>> f2f0b95565c9c2fb930b99afc64a631f476b4c4e

    class CommentSerializer(serializers.ModelSerializer):
        class Meta:
            model = Comment
            fields = ('__all__')
            # depth = 1

    comment_set = CommentSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)
    like_users = UserSerializer(read_only=True, many=True)

    class Meta:
        model = Review
<<<<<<< HEAD
        fields = ('pk', 'user', 'title', 'content', 'comment_set','like_count', 'like_users','created_at', 'updated_at')
        
=======
        fields = ('pk', 'user', 'title', 'content', 'comments', 'like_users','created_at', 'updated_at')
        # read_only_fields = ('like_count', '')
>>>>>>> f2f0b95565c9c2fb930b99afc64a631f476b4c4e


class ReviewListSerializer(serializers.ModelSerializer):
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk','username','profile_img')
            
    class CommentSerializer(serializers.ModelSerializer):
        class Meta:
            model = Comment
            fields = ('__all__')
            depth = 1

    comment_set = CommentSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)
    # comment_count = serializers.IntegerField()
    like_count = serializers.IntegerField()

    class Meta:
        model = Review
        fields = ('__all__')
        # depth = 1
# 'comment_count',