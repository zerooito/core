<template>
  <div class="ui two column stackable grid">
    <div class="four wide column">
      <div class="ui segment">
        <h2>Total Sales</h2>

        <p>
          <icon name="area-chart" scale="2"></icon>
          <br><br>
          {{ dashboard.orders }}
        </p>
      </div>
    </div>
    <div class="four wide column">
      <div class="ui segment">
        <h2>Total Clients</h2>

        <p>
          <icon name="users" scale="2"></icon>
          <br><br>
          {{ dashboard.clients }}
        </p>
      </div>
    </div>
    <div class="four wide column">
      <div class="ui segment">
        <h2>Total Products</h2>

        <p>
          <icon name="barcode" scale="2"></icon>
          <br><br>
          {{ dashboard.products }}
        </p>
      </div>
    </div>
    <div class="four wide column">
      <div class="ui segment">
        <h2>Cust all products</h2>

        <p>
          <icon name="credit-card" scale="2"></icon>
          <br><br>
          {{ dashboard.cust }}
        </p>
      </div>
    </div>
      <div class="sixteen wide column"></div>
      <line-chart :data="chartData"></line-chart>
    </div>
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
  name: 'dashboard',
  data () {
    return {
      chartData: [],
      dashboard: {
        orders: 'R$ 0,00',
        clients: 0,
        products: 0,
        cust: 0
      }
    }
  },
  created: function () {
    this.loadChart()
    this.totalOrders()
    this.countClients()
    this.countProducts()
    this.custProducts()
  },
  methods: {
    totalOrders () {
      this.$http.get(process.env.API + '/v1/orders/total').then((response) => {
        this.dashboard.orders = response.body.total
      })
    },
    countClients () {
      this.$http.get(process.env.API + '/v1/clients/count').then((response) => {
        this.dashboard.clients = response.body.count
      })
    },
    countProducts () {
      this.$http.get(process.env.API + '/v1/products/count').then((response) => {
        this.dashboard.products = response.body.count
      })
    },
    custProducts () {
      this.$http.get(process.env.API + '/v1/products/cust').then((response) => {
        this.dashboard.cust = response.body.cust !== null ? response.body.cust : 0
      })
    },
    loadChart () {
      this.$http.get(process.env.API + '/v1/orders/load').then((response) => {
        this.chartData = response.body
      })
    }
  }
}
</script>
