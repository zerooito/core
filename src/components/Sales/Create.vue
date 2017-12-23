<template>
  <div>
    <div class="all">
      <div class="search-products">
        <input type="text" :placeholder="$t('Type to search products...', {locale: getLocale()})" />
      </div>
      <div class="values">
        <h1>R$ 89,00</h1>
      </div>
      <div class="products">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SaleCreate',
  data () {
    return {}
  },
  methods: {
    getLocale () {
      return process.env.LOCALE
    }
  }
}
</script>

<style scoped>
.search-products {
  position: absolute;
  width: 85%;
}
.search-products input{
  width: 100%;
  border: solid 1px #ebebeb;
  margin: 0px 0px 15px 0px;
  padding: 10px;
}
</style>