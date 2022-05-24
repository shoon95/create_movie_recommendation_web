from django.urls import path
from . import views


urlpatterns = [
    path('profile/<username>/', views.profile),
    path('<int:user_pk>/follow/', views.follow),
<<<<<<< HEAD
    path('profile/<username>/edit/', views.edit_profile),
=======
    path('test/<int:user_pk>/', views.img)
>>>>>>> review
]
