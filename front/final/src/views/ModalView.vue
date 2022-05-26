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
    opacity: 0.8;
    background-color:black;
  }

  .modal-card{
    position: relative;
    max-width: 30%;
    margin: auto;
    margin-top: 150px;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    /* box-shadow: 1px 1px 3px 0px; */
    min-height: 500px;
    max-height: 500px;
    z-index: 100;
    opacity: 1;
  }

</style>