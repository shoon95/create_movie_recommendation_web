<template>
  <div>
    <div>
      <h1>Login</h1>

      <account-error-list v-if="authError"></account-error-list>

      <form @submit.prevent="login(loginCredentials)">
        <div>
          <label for="loginUsername">Username: </label>
          <input v-model="loginCredentials.username" type="text" id="loginUsername" required />
        </div>

        <div>
          <label for="loginPassword">Password: </label>
          <input v-model="loginCredentials.password" type="text" id="loginPassword" required />        
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>

    <hr>

    <div>
      <h1>Signup</h1>

      <account-error-list v-if="authError"></account-error-list>

      <form @submit.prevent="signup(signupcredentials)">
        <div>
          <label for="signupUsername">Username: </label>
          <input  v-model="signupCredentials.username" type="text" id="signupUsername" required/>
        </div>
        <div>
          <label for="signupPassword1">Password: </label>
          <input v-model="signupCredentials.password1" type="password" id="signupPassword1" required />
        </div>
        <div>
          <label for="signupPassword2">Password Confirmation: </label>
          <input v-model="signupCredentials.password2" type="password" id="signupPassword2" required />
        </div>
        <div>
          <button>Signup</button>
        </div>
      </form>
    </div>

    <hr>

    <div>
      <form></form>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'SignupView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        loginCredentials: {
          username: '',
          password1: '',
        },

        signupCredentials: {
          username: '',
          password1: '',
          password2: '',
        }
      }
    },
    computed: {
      ...mapGetters(['authError', 'isLoggedIn'])
    },
    methods: {
      ...mapActions(['signup', 'login', 'logout'])
    },
    // () {
    //   if (this.isLoggedIn) {
    //     this.logout()
    //   }
    // }
  }
</script>

<style></style>
