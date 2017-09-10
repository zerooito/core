<template>
  <div>
    <div class="ui pointing menu">
      <a class="item active" href="/#/dashboard">
        Dashboard
      </a>
      <a class="item" href="/#/sales">
        Sales
      </a>
      <a class="item">
        Products
      </a>
      <div class="right menu">
        <div class="item">
          <div class="ui transparent icon input">
            <input type="text" placeholder="Search...">
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

    }
  }
}
</script>