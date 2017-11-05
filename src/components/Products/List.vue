<template>
  <div class="ui grid">
    <div class="sixteen wide column">
      <router-link  v-bind:to="{ name: 'ProductCreate' }" class="ui labeled icon right floated primary button" tag="button">
        <i class="add circle icon"></i> Create
      </router-link>
    </div>

    <div class="sixteen wide column">
      <vuetable ref="vuetable" api-url="http://api.ciawn.com.br/v1/products"
              :fields="fields" pagination-path=""
              @vuetable:pagination-data=" " :http-options="options">
        <template slot="actions" slot-scope="props">
          <div class="table-button-container">
            <router-link v-bind:to="{ name: 'ProductEdit', params: { id: props.rowData.id, product: props.rowData } }" class="ui labeled icon button" tag="button">
              <i class="edit icon"></i> Edit
            </router-link>
            <button class="ui labeled icon red button" @click="deleteRow(props.rowData)">
              <i class="remove icon"></i> Delete
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
          title: 'Name Product'
        },
        {
          name: 'price',
          title: 'Price',
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
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    editRow (rowData) {
      alert('You clicked edit on' + JSON.stringify(rowData))
    },
    deleteRow (rowData) {
      alert('You clicked delete on' + JSON.stringify(rowData))
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
