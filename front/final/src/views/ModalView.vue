<template>
  <div class="modale">
    <div class="overlay"  @click="isModalView(false)"></div>
    <div class="modal-card shadow-lg">
      <slot/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ModalView',

  methods: {
    ...mapActions(['isModalView'])
  }
}
</script>

<style>

  .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
  }
  
  .overlay{
    opacity: 0.5;
    background-color:black;
  }

  .modal-card{
    position: relative;
    max-width: 50%;
    margin: auto;
    margin-top: 30px;
    padding: 20px;
    background-color: rgb(243, 237, 237);
    border-radius: 15px;
    /* box-shadow: 1px 1px 3px 0px; */
    min-height: 800px;
    z-index: 100;
    opacity: 1;
  }

</style>