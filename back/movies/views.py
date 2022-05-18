from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_list_or_404, get_object_or_404
from .serializers import MovieListSerializer, MovieDetailSerializer, MovieSearchSerializer
from .models import Movie, Genre, Video


@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = Movie.objects.filter(pk=movie_pk)
    serializer = MovieDetailSerializer(movie)
    return Response(serializer.data)


@api_view(['GET'])
def show_movies(request, query):
    movies = Movie.objects.filter(title__iregex=rf'^{query}')
    serializer = MovieSearchSerializer(data, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def now_playing(request):
    base_url = 'https://api.themoviedb.org/3'
    path = '/movie/now_playing'

    screening = []
    params = {
        'api_key' : '3108335d58371831522e2e99a0a78b38',
        'language' : 'ko',
        'region' : 'KR',
    }

    res = requests.get(base_url+path, params=params)
    data = res.json()

    for item in data['results']:
        screening.append(item.get('id'))


    # for i in screening:
        # 목록에 없으면 수집 진행 후 새로운 목록에 추가
        # 목록에 있으면 새로운 목록에 추가

    # 전부다 종료 되면 serializer로 변환 후 출력