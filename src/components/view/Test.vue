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
          div {{filters.address}}
        z-search-button(@rest="$_test_rest" @query="$_test_query")
    // dataTable
    .tabel-class
      z-table(:tableColumn="tableColumn" :tableData="tableData" :tableHeight="tableHeight" @query="$_test_query")
</template>

<script>
  export default {
    data () {
      return {
        tableHeight: 530,
        tableColumn: [
          {prop: 'date', label: '日期', sortable: '', hidden: false},
          {prop: 'name', label: '姓名', sortable: ''},
          {prop: 'login_name', label: '登录名', sortable: '', width: 100},
          {prop: 'address', label: '地址', sortable: ''},
          {prop: 'tag', label: '标签', sortable: ''}
        ],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          login_name: 'wangxiaohu',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          login_name: 'wangxiaohu',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          login_name: 'wangxiaohu',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          login_name: 'wangxiaohu',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          login_name: 'wangxiaohu',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          login_name: 'wangxiaohu',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          login_name: 'wangxiaohu',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          login_name: 'wangxiaohu',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          login_name: 'wangxiaohu',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          login_name: 'wangxiaohu',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }],
        filters: {
          date: '',
          name: '',
          login_name: '',
          address: '',
          tag: ''
        }
      }
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
      $_test_rest: function () {
        console.log('rest is click')
        this.filters = {}
      },
      $_test_query: function () {
        console.log(this.filters)
        console.log('query is click')
      }
    }
  }
</script>

<style>

.panel-box-left {
  width: auto;
  float: left;
}

.tabel-class{
  background: #cccccc; 
}
</style>
