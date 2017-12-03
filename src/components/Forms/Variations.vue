<template>
  <div>
    <div class="ui message" v-if="!productForm.variations[0]">
      <p>{{ $t('This product has no variations', {locale: getLocale()}) }}</p>
    </div>

    <template v-for="(variation, key) in productForm.variations">
      <div class="two fields">
        <div class="field">
          <label>SKU</label>
          <input type="text" name="sku" placeholder="SKU" v-model="variation.sku" :class="{ 'is-invalid': productForm.errors.has('sku') }">
          <has-error class="ui negative message" :form="productForm" field="sku"></has-error>
        </div>
        <div class="field">
          <label>{{ $t('Name', {locale: getLocale()}) }}</label>
          <input type="text" name="name" :placeholder="$t('Name', {locale: getLocale()})  " v-model="variation.name" :class="{ 'is-invalid': productForm.errors.has('name') }">
          <has-error class="ui negative message" :form="productForm" field="name"></has-error>
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label>{{ $t('Price', {locale: getLocale()}) }}</label>
          <div class="ui labeled input">
            <div class="ui label">$</div>
            <input type="text" name="price" :placeholder="$t('Price', {locale: getLocale()})  " v-model="variation.price" :class="{ 'is-invalid': productForm.errors.has('price') }">
          </div>
          <has-error class="ui negative message" :form="productForm" field="price"></has-error>
        </div>
        <div class="field">
          <label>{{ $t('Stock', {locale: getLocale()}) }}</label>
          <input type="text" name="stock" :placeholder="$t('Stock', {locale: getLocale()})" v-model="variation.stock" :class="{ 'is-invalid': productForm.errors.has('stock') }">
          <has-error class="ui negative message" :form="productForm" field="stock"></has-error>
        </div>
      </div>

      <div class="ui fluid buttons">
        <button type="button" class="ui button" @click="copyVariation(key)">
          {{ $t('Copy Variation', {locale: getLocale()}) }}
        </button>
        <div class="or" data-text="ou"></div>
        <button type="button" class="ui red button" @click="removeVariation(key)">
          {{ $t('Remove Variation', {locale: getLocale()}) }}
        </button>
      </div>

      <hr style="border-color: #ebebeb;margin: 25px 0px;">
    </template>

    <div class="ui grid">
      <div class="sixteen wide column">
        <button type="button" class="ui right floated info button" @click="addVariation">
          <i class="add circle icon"></i>
          {{ $t('Add Variation', {locale: getLocale()}) }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { HasError, AlertError } from 'vform'

export default {
  name: 'variationsform',
  components: {
    HasError,
    AlertError
  },
  props: [
    'productForm'
  ],
  data () {
    return {
    }
  },
  mounted () {
  },
  watch: {
    'productForm.variations': {
      handler: function () {
        this.$emit('variations-updated', this.productForm.variations)
      },
      deep: true
    }
  },
  methods: {
    getLocale () {
      return process.env.LOCALE
    },
    copyVariation (key) {
      this.productForm.variations.push({ ...this.productForm.variations[key] })
    },
    addVariation () {
      this.productForm.variations.push({
        sku: '',
        name: '',
        price: '',
        stock: ''
      })
    },
    removeVariation (key) {
      this.productForm.variations.splice(key, 1)
    }
  }
}
</script>
