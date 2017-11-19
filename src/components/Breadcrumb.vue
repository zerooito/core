<template>
  <div class="intern" v-if="currentRoute.name != 'Dashboard' && currentRoute.name != 'Login'">
   <div class="ui breadcrumb">
     <router-link v-bind:to="{ name: 'Dashboard' }" class="section">Dashboard</router-link>
     <i class="right angle icon divider"></i>
     <div class="active section">
      <router-link v-bind:to="{ name: currentRoute.name }" class="section">
        {{ $t(currentRoute.name, {locale: getLocale()}) }}
      </router-link>
     </div>
   </div>
  </div>
</template>

<style type="text/css" scoped>
	.intern {
		text-align: left;
    margin: 20px;
	}
</style>

<script>
export default {
  name: 'breadcrumb',
  data () {
    return {
      currentRoute: {
        name: this.$route.name
      }
    }
  },
  methods: {
    getLocale () {
      return process.env.LOCALE
    }
  },
  watch: {
    '$route.name' (routeName) {
      this.currentRoute.name = routeName
    }
  }
}
</script>
