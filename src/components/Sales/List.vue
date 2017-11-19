<template>
  <vuetable ref="vuetable" api-url="http://api.ciawn.com.br/v1/orders"
            :fields="fields" pagination-path=""
            @vuetable:pagination-data=" " :http-options="options">
    <template slot="actions" slot-scope="props">
      <div class="table-button-container">
        <button class="ui button" @click="editRow(props.rowData)">
          <i class="fa fa-edit"></i> {{ $t('Edit', {locale: getLocale()}) }}
        </button>
        <button class="ui basic red button" @click="deleteRow(props.rowData)">
          <i class="fa fa-remove"></i> {{ $t('Delete', {locale: getLocale()}) }}
        </button>
      </div>
    </template>
  </vuetable>
</template>

<script>
export default {
  name: 'saleslist',
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
          title: this.$t('Value', {locale: process.env.LOCALE}),
          callback: 'moneyFormat'
        },
        {
          name: 'cust',
          title: this.$t('Cust', {locale: process.env.LOCALE}),
          callback: 'moneyFormat'
        },
        {
          name: 'name',
          title: this.$t('Name Client', {locale: process.env.LOCALE})
        },
        {
          name: 'date_order',
          title: this.$t('Date Order', {locale: process.env.LOCALE}),
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
    getLocale () {
      return process.env.LOCALE
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
