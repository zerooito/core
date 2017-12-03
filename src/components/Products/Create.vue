<template>
  <div class="ui segment left aligned">
    <div class="ui grid">
      <div class="four wide computer sixteen wide mobile column product-menu">
        <div class="ui secondary vertical menu">
          <a class="item" v-on:click="page = 'general'" v-bind:class="{ active: page == 'general' }">
            {{ $t('General', {locale: getLocale()}) }}
          </a>
          <a class="item" v-on:click="page = 'variations'" v-bind:class="{ active: page == 'variations' }">
            {{ $t('Variations', {locale: getLocale()}) }}
          </a>
        </div>
      </div>

      <div class="twelve wide computer sixteen wide mobile column">
        <product-form
          :product-data="this.$route.params.product"
          method="post"
          :page="page"
        ></product-form>
      </div>
    </div>
  </div>
</template>

<script>
import ProductForm from '../Forms/Product'
export default {
  components: {
    ProductForm
  },
  data () {
    return {
      page: 'general'
    }
  },
  methods: {
    getLocale () {
      return process.env.LOCALE
    }
  }
}
</script>
