<template>
  <div>
    <form @submit.prevent="onSubmit" class="mb-3">
      <div>
        <label for="nickname">nickname: </label>
        <input v-model="newProfile.nickname" type="text" id="nickname"/>
      </div>
      <div class="mt-4">
        <label class="align-top" for="introduce">introduce: </label>
        <textarea v-model="newProfile.introduce" type="text" id="introduce"></textarea>
      </div>
      <div>
        <button class="btn btn-primary">{{ action }}</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'ProfileCardForm',
    props: {
      profile: Object,
      action: String,
    },
    data() {
      return {
        newProfile: {
          nickname: this.profile.nickname,
          introduce: this.profile.introduce,
        }
      }
    },

    methods: {
      ...mapActions(['editProfile']),

      onSubmit() {
        const payload = {
          username: this.profile.username,
          ...this.newProfile,
        }
        this.editProfile(payload)
      },

      // onFileSelected (e) {
      //   console.log(e)
      // }
    },
  }
</script>

<style>
input {
  width:400px;
  height:30px;
  font-size:20px;
}

textarea {
  width:400px;
  height:100px;
  font-size:20px;
}
</style>