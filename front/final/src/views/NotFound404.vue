<template>
  <div>
    <h1>404 Not Found</h1>
    <div id="app1">
      <button class="tweet-heart" id="like"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound404',

  mounted () {
    const $like = document.getElementById('like');
    $like.addEventListener('click', () => {
    $like.classList.toggle('is-liked');
});
  }
}
</script>

<style scoped>
#app1 {
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.tweet-heart {
  background-color: transparent;
  background-image: url("https://abs.twimg.com/a/1492302959/img/animations/web_heart_animation.png");
  border: none;
  cursor: pointer;
  height: 100px;
  outline: none;
  width: 100px;
  transition: all ease-out 800ms;
}
.tweet-heart.is-liked {
  animation-name: like;
  animation-duration: 800ms;
  animation-timing-function: steps(28);
  animation-fill-mode: forwards;
}

@keyframes like {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: right;
  }
}
</style>