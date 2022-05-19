# 기획

## 컨셉

* 개발 배경 : 과거에는 영화 티켓을 본인 혼자 소장(본인만의 다이어리) -> 코로나가 끝나가며 영화관에 가기 좋은 시기 -> 영화관이 점점 살아남 -> 공유 영화 다이어리 괜춘  
* 디자인 컨셉 : 카드, 다이어리



영화가 영화에서 끝나는 것이 아쉬웠다. 영화에서 받는 느낌을 우리 현실에서도 연장되어 느껴지도록 사이트에서 그런 느낌을 주고 싶었다. (영화 사이트가 살아있다?). 사이트에서 영화를 보는 듯한 느낌을 주자.



상영 중인 영화를 기반으로 취향에 맞게 추천

나랑 취향이 비슷한 평론가나 유명인 추천



데이터 : '상영 중인 영화만' 



## 모델

영화관

1. 영화 목록
   * ID
   * Title
   * Vote
   * Poster_url
   * Genre_id

2. Videos-video
   * pk
   * movie-id
   * video-key
3. Genre
   * genreid
   * id

3. Genre_movie
   * id
   * movie-id
   * genre-



### 진행

## 0518

* 모델링
* 자료 수집
* movies.views, movies.serializers 대략 완성
* community.views, community.serializer 대략 완성

* 로그인, signup, 메인 페이지 프레임 완성
* 페이지 구성 설계

## 0519

* views, serializer, 데이터 수집 수정
* 목업 디자인 완성
* 와이어 프레임 완성

* LoginView.vue 기본 틀 가져오기