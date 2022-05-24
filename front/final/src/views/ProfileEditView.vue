<template>
  <div>
    <h1>Edit Profile</h1>
    <profile-card-form :profile="profile" action="update">

    </profile-card-form>
  </div>

</template>

<script>
import ProfileCardForm from '@/components/accounts/profile/ProfileCardForm.vue'
import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'EditProfileView',
    components: { ProfileCardForm },
    computed: {
      ...mapGetters(['profile'])
    },
    methods: {
      ...mapActions(['fetchProfile'])
    },
    created() {
      const payload = { username: this.$route.params.username }
      this.fetchProfile(payload)
    },
  }
</script>

<style></style>
