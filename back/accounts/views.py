from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProfileSerializer
from django.http import JsonResponse, HttpResponse
<<<<<<< HEAD
from django.http import QueryDict
=======
from django.core.files import File
>>>>>>> review

User = get_user_model()

@api_view(['GET'])
def profile(request, username):
    user = get_object_or_404(User, username=username)
    serializer = ProfileSerializer(user)
    return Response(serializer.data)


@api_view(['PUT'])
def edit_profile(request, username):
    user = get_object_or_404(User, username=username)
    if request.user == user:
        rd = QueryDict('', mutable=True)
        rd.update(request.data)
        serializer = ProfileSerializer(user, data=rd)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


@api_view(['POST'])
def follow(request, user_pk):
    if request.user.is_authenticated:
        person = get_object_or_404(User, pk=user_pk)
        user = request.user
        if person != user:
            if person.followers.filter(pk=user.pk).exists():
                person.followers.remove(user)
                follow = False
            else:
                person.followers.add(user)
                follow =True
            
            follow_data = {
                'follow':follow,
                'followers_count':person.followers.count(),
                'followings_count':person.followings.count(),
            }
            print(follow_data)
        return JsonResponse(follow_data)
    return HttpResponse(status=401)


@api_view(['GET'])
def img(request, user_pk):
    user = User.objects.get(pk=1)
    user.profile_img.save('박상훈.jpg', File(open('C:/Users/sjhty/Desktop/박상훈.jpg','rb')))
    return Response({'data':'성공'})