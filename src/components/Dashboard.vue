<template>
	<div>
		<menu-bar></menu-bar>

		<breadcrumb></breadcrumb>

		<div class="ui two column stackable grid">
		  <div class="four wide column">
		    <div class="ui segment">
		    	<h2>Total de Pedidos</h2>

		    	<p>
		    		<icon name="area-chart" scale="2"></icon> 
		    		<br><br>
		    		{{ dashboard.orders }}
		    	</p>
		    </div>
		  </div>
		  <div class="four wide column">
		    <div class="ui segment">
		    	<h2>Total de Clientes</h2>

		    	<p>
		    		<icon name="users" scale="2"></icon> 
		    		<br><br>
		    		432
		    	</p>
		    </div>
		  </div>
		  <div class="four wide column">
		    <div class="ui segment">
		    	<h2>Total de Produtos</h2>

		    	<p>
		    		<icon name="barcode" scale="2"></icon> 
		    		<br><br>
		    		432
		    	</p>
		    </div>
		  </div>
		  <div class="four wide column">
		    <div class="ui segment">
		    	<h2>Custo total Produtos</h2>

		    	<p>
		    		<icon name="credit-card" scale="2"></icon> 
		    		<br><br>
		    		432
		    	</p>
		    </div>
		  </div>
		  <div class="ten wide column">
		  	<line-chart :data="chartData"></line-chart>
		  </div>
		  <div class="six wide column">
		  	<div class="ui comments">
				  <div class="comment">
				    <a class="avatar">
				      <img src="https://semantic-ui.com/images/avatar/small/joe.jpg">
				    </a>
				    <div class="content">
				      <a class="author">Joe Henderson</a>
				      <div class="metadata">
				        <div class="date">1 day ago</div>
				      </div>
				      <div class="text">
				        <p>The hours, minutes and seconds stand as visible reminders that your effort put them all there. </p>
				        <p>Preserve until your next run, when the watch lets you see how Impermanent your efforts are.</p>
				      </div>
				      <div class="actions">
				        <a class="reply">Reply</a>
				      </div>
				    </div>
				  </div>
				  <div class="comment">
				    <a class="avatar">
				      <img src="https://semantic-ui.com/images/avatar/small/christian.jpg">
				    </a>
				    <div class="content">
				      <a class="author">Christian Rocha</a>
				      <div class="metadata">
				        <div class="date">2 days ago</div>
				      </div>
				      <div class="text">
				        I re-tweeted this.
				      </div>
				      <div class="actions">
				        <a class="reply">Reply</a>
				      </div>
				    </div>
				  </div>
				  <form class="ui reply form">
				    <div class="field">
				      <textarea></textarea>
				    </div>
				    <div class="ui primary submit labeled icon button">
				      <i class="icon edit"></i> Add Comment
				    </div>
				  </form>
				</div>
		  </div>
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
      chartData: [['Jan', 4], ['Feb', 2], ['Mar', 10], ['Apr', 5], ['May', 3]],
      dashboard: {
        orders: 'R$ 0,00',
        clients: 0
      }
    }
  },
  created: function () {
    this.totalOrders()
  },
  methods: {
    totalOrders () {
      this.$http.get('http://localhost:8090' + '/v1/orders/total').then((response) => {
        this.dashboard.orders = response.body.total
      })
    }
  }
}
</script>