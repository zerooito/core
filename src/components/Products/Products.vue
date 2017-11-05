<template>
  <vuetable ref="vuetable" api-url="http://api.ciawn.com.br/v1/products"
            :fields="fields" pagination-path=""
            @vuetable:pagination-data=" " :http-options="options">
    <template slot="actions" slot-scope="props">
      <div class="table-button-container">
        <button class="ui button" @click="editRow(props.rowData)">
          <i class="fa fa-edit"></i> Edit
        </button>
        <button class="ui basic red button" @click="deleteRow(props.rowData)">
          <i class="fa fa-remove"></i> Delete
        </button>
      </div>
    </template>
  </vuetable>
</template>

<style type="text/css" scoped>
  .ui.grid {
    text-align: left;
    margin: 15px;
  }
</style>

<script>
export default {
  name: 'products',
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
