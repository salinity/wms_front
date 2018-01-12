<template>
  <el-table :data="tableData1" border style="width: 100%" height="1300">
    <template v-for="(item ,index) in tableColumn" v-if="!item.hidden">
    <el-table-column :prop="item.prop" :label="item.label" :sortable="item.sortable" :width="item.width" :key="index">
    </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'z-table',
  props: {
    tableColumn: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      tableData1: [{
        date: '2016-05-02',
        name: '王小虎',
        login_name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        login_name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        login_name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        login_name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        login_name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        login_name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        login_name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        login_name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        login_name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        login_name: 'wangxiaohu',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }]
    }
  },
  created () {
    console.log('zTable is created')
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