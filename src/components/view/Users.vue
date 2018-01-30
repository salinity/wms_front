<template lang="pug">
  section
    // sercher toolbar
    el-col.toolbar.search-toolbar(:span="24")
      el-form(:inline="true" :model="filters" rel="searchFilter")
        .panel-box-left
          el-form-item
            el-date-picker(v-model="filters.date" type="date" placeholder="选择日期")
          el-form-item
            el-input(v-model="filters.name" placeholder="用户名")
          el-form-item
            el-input(v-model="filters.address" placeholder="地址")
        z-search-button(@rest="rest" @query="query")
    // dataTable
    .tabel-class
      z-table(:tableColumn="tableColumn" :tableData="tableData" :tableHeight="tableHeight" @query="query")
</template>

<script>
  import UserService from '../../services/UserService'
  export default {
    data () {
      return {
        userService: new UserService(),
        tableHeight: 530,
        tableColumn: [
          {prop: 'id', label: 'id', sortable: '', hidden: false},
          {prop: 'name', label: '姓名', sortable: ''},
          {prop: 'loginPwd', label: '登录名', sortable: '', width: 100},
          {prop: 'sex', label: '性别', sortable: ''},
          {prop: 'telephone', label: '电话', sortable: ''},
          {prop: 'admin', label: '管理员', sortable: ''},
          {prop: 'active', label: '是否可用', sortable: ''}
        ],
        tableData: [],
        filters: {
          date: '',
          name: '',
          login_name: '',
          address: '',
          tag: ''
        }
      }
    },
    created () {
      this.query()
    },
    activated: function () {
      console.log('在动态组件初始化渲染的过程中调用该方法')
    },
    methods: {
      formatter (row, column) {
        return row.address
      },
      filterTag (value, row) {
        return row.tag === value
      },
      rest: function () {
        console.log('rest is click')
        this.filters = {}
      },
      async query () {
        const json = this.userService.getUsersListPage(this.filters)
        console.log(json)
      }
    }
  }
</script>

<style>

.panel-box-left {
  width: auto;
  float: left;
}

</style>
