from django.urls import path
from . import views


urlpatterns = [
    path('profile/<username>/', views.profile),
    path('<username>/follow/', views.follow),
    path('profile/<username>/edit/', views.edit_profile),
]
