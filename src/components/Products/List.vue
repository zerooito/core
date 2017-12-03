<template>
  <div class="ui grid">
    <div class="sixteen wide column">
      <router-link  v-bind:to="{ name: 'ProductCreate' }" class="ui labeled icon right floated primary button" tag="button">
        <i class="add circle icon"></i> {{ $t('Create', {locale: getLocale()}) }}
      </router-link>
    </div>

    <div class="sixteen wide column">
      <vuetable ref="vuetable" api-url="http://api.ciawn.com.br/v1/products"
              :fields="fields" pagination-path=""
              @vuetable:pagination-data=" " :http-options="options">
        <template slot="actions" slot-scope="props">
          <div class="table-button-container">
            <router-link v-bind:to="{ name: 'ProductEdit', params: { id: props.rowData.id, product: props.rowData } }" class="ui labeled icon button" tag="button">
              <i class="edit icon"></i> {{ $t('Edit', {locale: getLocale()}) }}
            </router-link>
            <button class="ui labeled icon red button" @click="deleteRow(props.rowData)">
              <i class="remove icon"></i> {{ $t('Delete', {locale: getLocale()}) }}
            </button>
          </div>
        </template>
      </vuetable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productslist',
  data () {
    return {
      fields: [
        {
          name: 'id',
          title: '#',
          callback: 'formatID'
        },
        {
          name: 'sku',
          title: 'SKU'
        },
        {
          name: 'name',
          title: this.$t('Name Product', {locale: process.env.LOCALE})
        },
        {
          name: 'price',
          title: this.$t('Price', {locale: process.env.LOCALE}),
          callback: 'moneyFormat'
        },
        '__slot:actions'
      ],
      options: {
        headers: {
          'Authorization': 'Bearer ' + localStorage.token
        }
      },
      date: []
    }
  },
  created: function () {},
  methods: {
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    getLocale () {
      return process.env.LOCALE
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    deleteRow (rowData) {
      this.$swal({
        title: this.$t('Are you sure?', {locale: process.env.LOCALE}),
        text: this.$t('You won\'t be able to revert this!', {locale: process.env.LOCALE}),
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: this.$t('Yes, delete it!', {locale: process.env.LOCALE}),
        cancelButtonText: this.$t('Cancel', {locale: process.env.LOCALE})
      }).then((result) => {
        if (result) {
          this.$http.delete(process.env.API + '/v1/products/' + rowData['sku']).then(({ data }) => {
            this.$forceUpdate()
          })
        }
      })
    },
    replaceDateOrder (value) {
      this.date = value.match(/\d+/g)

      return this.date[2] + '/' + this.date[1] + '/' + this.date[0]
    },
    moneyFormat (price) {
      const pieces = parseFloat(price).toFixed(2).split('')
      let ii = pieces.length - 3

      while ((ii -= 3) > 0) {
        pieces.splice(ii, 0, ',')
      }

      return 'R$ ' + pieces.join('')
    },
    formatID (id) {
      return '#' + id
    }
  }
}
</script>
