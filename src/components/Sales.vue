<template>
	<div>		
    <menu-bar></menu-bar>

		<breadcrumb></breadcrumb>

    <div class="ui container">
      <vuetable ref="vuetable" api-url="http://localhost:8000/v1/orders" 
                :fields="fields" pagination-path="" 
                @vuetable:pagination-data=" " :http-options="options">
        <template slot="actions" scope="props">
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
    </div>

    <footer-component></footer-component>
	</div>
</template>

<style type="text/css" scoped>
  .ui.grid {
    text-align: left;
    margin: 15px;
  }
</style>

<script>
export default {
  name: 'sales',
  data () {
    return {
      fields: [
        {
          name: 'order_id',
          title: '#',
          callback: 'formatID'
        },
        {
          name: 'value',
          title: 'Value',
          callback: 'moneyFormat'
        },
        {
          name: 'cust',
          title: 'Cust',
          callback: 'moneyFormat'
        },
        {
          name: 'name',
          title: 'Name Client'
        },
        {
          name: 'date_order',
          title: 'Date Order',
          callback: 'replaceDateOrder'
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