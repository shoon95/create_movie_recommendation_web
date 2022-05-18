from django.urls import path
from . import views


urlpatterns = [
    path('', views.review_list_or_create),
    path('<int:review_pk>/', views.review_detail_or_update_or_delete),
    path('<int:review_pk>/like/', views.like_review),
    path('<int:review_pk>/comments/', views.create_comment),
    path('<int:review_pk>/comments/<int:comment_pk>/', views.comment_update_or_delete)
]
