from django.urls import path
from . import views

urlpatterns = [
    path('', views.movie_list, name='movie_list'),
    path('<int:movie_pk>/', views.movie_detail, name='movie_detail'),
    path('get_data/', views.get_data, name='get_data'),
    path('now_playing/', views.now_playing, name='now_playing'),
    path('<int:movie_pk>/like/', views.like_movie),
    path('<str:query>/', views.show_movies, name='show_movies'),
]