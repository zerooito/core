<template>
  <div v-if="$route.name != 'Login'">
    <div class="ui pointing menu">
      <router-link v-bind:to="{ path: '/dashboard' }" class="item" active-class="active">
        {{ $t('Dashboard', {locale: this.locale}) }}
      </router-link>
      <router-link v-bind:to="{ path: '/sales' }" class="item" active-class="active">
        {{ $t('Sales', {locale: this.locale}) }}
      </router-link>
      <router-link v-bind:to="{ path: '/products' }" class="item" active-class="active">
        {{ $t('Products', {locale: this.locale}) }}
      </router-link>
      <div class="right menu">
        <div class="item">
          <div class="ui transparent icon input">
            <input type="text" :placeholder="$t('Search...', {locale: this.locale})">    
            <i class="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
  .ui.menu {
    margin-bottom: 10px !important;
  }
</style>

<script>
export default {
  name: 'menu-bar',
  data () {
    return {
      locale: process.env.LOCALE
    }
  }
}
</script>
