<template>
	<div>
		<menu-bar></menu-bar>

		<breadcrumb></breadcrumb>

    <div class="ui container">
      <vuetable ref="vuetable" api-url="https://vuetable.ratiw.net/api/users" :fields="fields" pagination-path="" @vuetable:pagination-data=" ">
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
      fields: ['name', 'email', 'birthdate', 'nickname', 'gender', '__slot:actions']
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
    }
  }
}
</script>