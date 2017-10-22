<template>
  <div id="app">
    <menu-bar></menu-bar>
		<breadcrumb></breadcrumb>

    <div class="ui container">
      <router-view></router-view>
    </div>

    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
