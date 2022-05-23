from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_list_or_404, get_object_or_404
from .serializers import GenreListSerializer, MovieListSerializer, MovieDetailSerializer, MovieSearchSerializer
from .models import Movie, Genre, Video, Actor
import requests

@api_view(['GET'])
def get_data(request):
    base_url = 'https://api.themoviedb.org/3'
    path = '/genre/movie/list'

    params1 = {
        'api_key' : '3108335d58371831522e2e99a0a78b38',
        'language' : 'ko',
    }
    res_genre = requests.get(base_url + path, params=params1)
    genre_list = res_genre.json()
    
    name = [
        'id','name'
    ]
    for genre in genre_list['genres']:
        try:
            Genre.objects.create(**genre)
        except:
            continue
    ### 영화 데이터 가져오기

    name = [
        'id','title','release_date','popularity','vote_count','vote_average','overview','poster_path'
    ]

    for page in range(1,3):
        base_url = 'https://api.themoviedb.org/3'
        path = '/movie/popular'

        params2 = {
            'api_key' : '3108335d58371831522e2e99a0a78b38',
            'language' : 'ko',
            'page' : page
        }
        res = requests.get(base_url+path, params=params2)
        data = res.json()

        result = data['results']

        for movie_item in result:
            movie = Movie()

            ### 비디오 가져오기
            path = f"/movie/{movie_item['id']}/videos"
            
            res = requests.get(base_url+path, params=params1)
            data = res.json()
            result = data.get('results')

            i = 0
            for item in result:
                video = {}
                video['youtube_key'] = item.get('key')
                video = Video.objects.create(**video)
                i += 1
                if i != 0:
                    break
            for field in name: 
                setattr(movie,field,movie_item.get(field))
            setattr(movie,'videos',video)
            movie.save()
                
            #### 영화 데이터에 장르 추가하기

            genre = Genre.objects.filter(pk__in=movie_item.get('genre_ids'))
            for i in genre:
                movie.genres.add(i.pk)
            
            #### actors 가져오기
            path = f'/movie/{movie.id}/credits'

            res = requests.get(base_url+path, params=params1)
            data = res.json()

            for item in data.get('cast'):
                actor = {}
                if item.get('known_for_department') != 'Acting':
                    break
                actor['id'] = item.get('id')
                actor['name'] = item.get('name')
                actor['profile_path'] = item.get('profile_path')
                
                try:
                    actor = Actor.objects.create(**actor)
                    movie.actors.add(actor.pk)
                except:
                    continue
        print(f'현재 {page} / 1000 page 수집되었습니다.')
    data = {
        'text': '성공?!'
    }
    return Response(data)

@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = Movie.objects.filter(pk=movie_pk)
    serializer = MovieDetailSerializer(movie, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def show_movies(request, query):
    movies = Movie.objects.filter(title__iregex=rf'^{query}')
    serializer = MovieSearchSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def now_playing(request):
    name = [
        'id','title','release_date','popularity','vote_count','vote_average','overview','poster_path'
    ]

    base_url = 'https://api.themoviedb.org/3'
    path = '/movie/now_playing'

    screening = []
    params = {
        'api_key' : '3108335d58371831522e2e99a0a78b38',
        'language' : 'ko',
        'region' : 'KR',
    }

    res = requests.get(base_url+path, params=params)
    result = res.json()['results']
    result = result[:10]

    for item in result:
        screening.append(item.get('id'))

    screening = screening[:10]

    name = [
        'id','title','release_date','popularity','vote_count','vote_average','overview','poster_path'
    ]
    
    for movie_item in result:
            movie = {}
            flag = 0
            for field in name: 
                movie[field] = movie_item.get(field)
            try:
                movie = Movie.objects.create(**movie)    
            except:
                break
            
                
            #### 영화 데이터에 장르 추가하기

            genre = Genre.objects.filter(pk__in=movie_item.get('genre_ids'))
            for i in genre:
                movie.genres.add(i.pk)

            #### video 가져오기

            path = f'/movie/{movie.id}/videos'
            
            res = requests.get(base_url+path, params=params1)
            data = res.json()
            result = data.get('results')

            i = 0
            for item in result:
                video = {}
                video['movie'] = movie
                video['youtube_key'] = item.get('key')
                video = Video.objects.create(**video)
                # movie['video'] = video
                i += 1
                if i != 0:
                    break
            
            #### actors 가져오기
            path = f'/movie/{movie.id}/credits'

            params1 = {
                'api_key' : '3108335d58371831522e2e99a0a78b38',
                'language' : 'ko',
            }

            res = requests.get(base_url+path, params=params1)
            data = res.json()

            for item in data.get('cast'):
                actor = {}
                if item.get('known_for_department') != 'Acting':
                    break
                actor['id'] = item.get('id')
                actor['name'] = item.get('name')
                actor['profile_path'] = item.get('profile_path')
                
                try:
                    actor = Actor.objects.create(**actor)
                    movie.actors.add(actor.pk)
                except:
                    continue

    movies_screening = Movie.objects.filter(pk__in=screening)
    serializer = MovieListSerializer(movies_screening, many=True)
    return Response (serializer.data)
    # for i in screening:
        # 목록에 없으면 수집 진행 후 새로운 목록에 추가
        # 목록에 있으면 새로운 목록에 추가

    # 전부다 종료 되면 serializer로 변환 후 출력

@api_view(['GET'])
def movie_list(request):
    if request.GET == {} :
        movies = Movie.objects.all()[0:10]
        serializer = MovieListSerializer(movies, many=True)
    else:
        genres = request.GET
        requestGenres = genres.getlist('genres[]')
        movies = Movie.objects.filter(genres__in=requestGenres)
        movies = list (set(movies))[0:10]
        serializer = MovieListSerializer(movies, many=True)
    return Response (serializer.data)

@api_view(['POST'])
def like_movie(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    user = request.user
    if movie.like_users.filter(pk=user.pk).exists():
        movie.like_users.remove(user)
        like = False
        
    else:
        movie.like_users.add(user)
        like = True
    context = {
        'like': like
    }
    return Response(context)

@api_view(['GET'])
def get_genres(request):
    genres = Genre.objects.all()
    serializer = GenreListSerializer(genres, many=True)
    return Response (serializer.data)