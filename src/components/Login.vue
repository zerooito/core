<template>
  <div class="ui grid">
    <div class="eight wide column landing-image"></div>
    <div class="four wide column box-center">
      <h1>{{ $t('Sign Up', {locale: getLocale()}) }}</h1>

      <form v-on:submit="handleSubmit($event)">
        <div class="ui form segment">
          <div class="field">
            <label>E-mail</label>
            <div class="ui left labeled icon input">
              <input type="text" :placeholder="$t('Type your E-mail', {locale: getLocale()})" v-model="user.email">
            </div>
          </div>
          <div class="field">
            <label>{{ $t('Password', {locale: getLocale()}) }}</label>
            <div class="ui left labeled icon input">
              <input type="password" :placeholder="$t('Type your password', {locale: getLocale()})" v-model="user.password">
            </div>
          </div>
          <div class="ui error message">
            <div class="header">We noticed some issues</div>
          </div>
          <button class="ui blue submit button">Login</button>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    getLocale () {
      return process.env.LOCALE
    },
    handleSubmit (e) {
      e.preventDefault()

      this.$auth.login({
        params: this.user,
        method: 'POST',
        success: ({ data }) => {
          localStorage.token = data.access_token
        },
        error: ({ data }) => {
          if (data.response.status === 422 || data.response.status >= 500) {
            this.$swal('User not found or data wrong!')
          }
        },
        rememberMe: true,
        redirect: '/dashboard'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.landing-image {
  background-image: url('https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?w=940&h=700&auto=compress&cs=tinysrgb') !important;
  background-size: cover !important;
  height: 700px;
}

.box-center {
  margin-left: 13%;
  margin-top: 10%;
}

</style>
