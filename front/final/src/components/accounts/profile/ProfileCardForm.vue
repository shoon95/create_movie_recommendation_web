<template>
  <div>
    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <div>
        <label for="nickname">nickname: </label>
        <input v-model="newProfile.nickname" type="text" id="nickname" />
      </div>
      <div>
        <label for="introduce">introduce: </label>
        <textarea v-model="newProfile.introduce" type="text" id="introduce"></textarea>
      </div>
      <div>
        <input type="file" @change="onFileSelected">
        <!-- <input type="file"> -->
      </div>
      <div>
        <!-- <p>{{ newProfile.profile_img }}</p> -->
      </div>
      <div>
        <button>{{ action }}</button>
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
          profile_img: this.profile.profile_img
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

      onFileSelected (e) {
        console.log(e)
      }
    },
  }
</script>

<style></style>
