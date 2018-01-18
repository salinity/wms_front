<template>
  <z-table :tableColumn="tableColumn" :tableData="tableData" :tableHeight="tableHeight"></z-table>
</template>

<script>
  export default {
    data () {
      return {
        tableHeight: 1000,
        tableColumn: [
          {prop: 'date', label: '日期', sortable: '', hidden: false},
          {prop: 'name', label: '姓名', sortable: ''},
          {prop: 'login_name', label: '登录名', sortable: '', width: 200},
          {prop: 'address', label: '地址', sortable: ''},
          {prop: 'tag', label: '标签', sortable: '', width: 180}
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
        }]
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
      }
    }
  }
</script>