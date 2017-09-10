<template>
  <div class="intern">
   <div class="ui breadcrumb">
     <a class="section" href="/#/dashboard">Home</a>
     <i class="right angle icon divider"></i>
     <div class="active section">
      <a :href="currentRoute.link">{{ currentRoute.name }}</a>
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
        name: this.$route.name,
        link: '/#' + this.$route.path
      }
    }
  }
}
</script>