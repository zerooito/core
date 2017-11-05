<template>
  <product-form :product-data="this.$route.params.product" method="patch"></product-form>
</template>

<script>
import ProductForm from '../Forms/Product'

export default {
  components: {
    ProductForm
  },
  mounted () {
    if (!this.$route.params.product) {
      return this.$router.push('/products')
    }
  }
}
</script>
