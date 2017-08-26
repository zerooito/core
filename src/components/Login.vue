<template>
  <div class="ui grid">
    <div class="eight wide column landing-image"></div>
    <div class="four wide column box-center">
      <h1>Acesse o Sistema</h1>
      <div class="ui form segment">
        <div class="field">
          <label>E-mail</label>
          <div class="ui left labeled icon input">
            <input type="text" placeholder="Digite seu e-mail">
          </div>
        </div>
        <div class="field">
          <label>Senha</label>
          <div class="ui left labeled icon input">
            <input type="password" placeholder="Digite sua Senha">
          </div>
        </div>
        <div class="ui error message">
          <div class="header">We noticed some issues</div>
        </div>
        <button class="ui blue submit button">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
