from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_list_or_404, get_object_or_404
from .serializers import MovieListSerializer, MovieSerializer
from .models import Movie, Genre, Video


@api_view(['GET'])
def movie_list(request):
    # movies = get_list_or_404(Movie)
    # serializer = MovieListSerializer(movies, many=True)
    data = {
        'text': '성공'
    }
    return Response(data)


@api_view(['GET'])
def movie_detail(request, movie_pk):
    # movie = get_object_or_404(Movie, pk=movie_pk)
    # serializer = MovieSerializer(movie)
    data = {
        'text': '성공'
    }
    return Response(data)