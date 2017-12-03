<template>
  <form class="ui form" @submit.prevent="save" @keydown="product.errors.clear($event.target.name)">
    <div v-if="page == 'general'">
      <div class="two fields">
        <div class="field">
          <label>SKU</label>
          <input :disabled="method == 'patch'" type="text" name="sku" placeholder="SKU" v-model="product.sku" :class="{ 'is-invalid': product.errors.has('sku') }">
          <has-error class="ui negative message" :form="product" field="sku"></has-error>
        </div>
        <div class="field">
          <label>{{ $t('Name', {locale: getLocale()}) }}</label>
          <input type="text" name="name" :placeholder="$t('Name', {locale: getLocale()})  " v-model="product.name" :class="{ 'is-invalid': product.errors.has('name') }">
          <has-error class="ui negative message" :form="product" field="name"></has-error>
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label>{{ $t('Price', {locale: getLocale()}) }}</label>
          <div class="ui labeled input">
            <div class="ui label">$</div>
            <input type="text" name="price" :placeholder="$t('Price', {locale: getLocale()})  " v-model="product.price" :class="{ 'is-invalid': product.errors.has('price') }">
          </div>
          <has-error class="ui negative message" :form="product" field="price"></has-error>
        </div>
        <div class="field">
          <label>{{ $t('Stock', {locale: getLocale()}) }}</label>
          <input type="text" name="stock" :placeholder="$t('Stock', {locale: getLocale()})" v-model="product.stock" :class="{ 'is-invalid': product.errors.has('stock') }">
          <has-error class="ui negative message" :form="product" field="stock"></has-error>
        </div>
      </div>
    </div>

    <variations-form
      :product-form="product"
      method="patch"
      v-if="page == 'variations'"
      v-on:variations-updated="newVariations => product.variations = newVariations"
    ></variations-form>

    <div class="ui grid">
      <div class="sixteen wide column">
        <button class="ui right floated primary button" :class="{ loading: product.busy }" :disabled="product.busy" type="submit">{{ $t('Save', {locale: getLocale()}) }}</button>
      </div>
    </div>
  </form>
</template>

<script>
import { Form, HasError, AlertError } from 'vform'
import VariationsForm from '../Forms/Variations'

export default {
  name: 'productform',
  components: {
    HasError,
    AlertError,
    VariationsForm
  },
  props: [
    'productData',
    'method',
    'page'
  ],
  data () {
    return {
      product: new Form({
        sku: '',
        name: '',
        price: '',
        stock: '',
        variations: []
      })
    }
  },
  mounted () {
    if (this.productData) {
      this.product.sku = this.productData.sku
      this.product.name = this.productData.name
      this.product.price = this.productData.price
      this.product.stock = this.productData.stock
      this.product.variations = (this.productData.variations) ? this.productData.variations : []
    }
  },
  methods: {
    getLocale () {
      return process.env.LOCALE
    },
    save () {
      const url = (this.method === 'post') ? `/v1/products` : `/v1/products/${this.product.sku}`
      this.product[this.method](url)
        .then(({ data }) => {
          this.$toastr('add', {
            title: this.$t('Success!', {locale: process.env.LOCALE}),
            msg: this.$t('Your product has been submited', {locale: process.env.LOCALE}),
            clickClose: false,
            timeout: 3000,
            type: 'success'
          })

          if (this.method === 'post') {
            this.$router.push({ name: 'Products' })
          }
        })
    }
  }
}
</script>
