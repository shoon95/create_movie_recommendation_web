<template>
  <div>
    <account-error-list v-if="authError"></account-error-list>
    <form @submit.prevent="login(credentials)" class="form" id="b-form">
      <h2 id="title">Login to Website</h2>
      <input v-model="credentials.username" id="form__input" type="text" placeholder="ID" required />
      <input v-model="credentials.password" id="form__input" type="password" placeholder="Password" required />
      <div>
        <button class="form__button button">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AccountErrorList from '@/components/accounts/AccountErrorList.vue'
export default {
  name: 'LoginForm',
  components: { AccountErrorList },
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      }
    }
  },

  computed: {
    ...mapGetters(['authError'])
  },

  methods: {
    ...mapActions(['login']),
  }
}

</script>

<style>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

#form__input {
  width: 350px;
  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  font-family: "Montserrat", sans-serif;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}

#form__input:focus {
  box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
}
.button {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  margin-top: 50px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;
  background-color: #4B70E2;
  color: #f9f9f9;
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
  border: none;
  outline: none;
}

#title {
  font-size: 34px;
  font-weight: 700;
  line-height: 3;
  color: #181818;
}
</style>