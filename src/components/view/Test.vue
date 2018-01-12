<template>
  <z-table :tableColumn="tableColumn" :tableData="tableData"></z-table>
  <!-- <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="日期" sortable width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="login_name" label="登录名">
    </el-table-column>
    <el-table-column prop="address" label="地址" :formatter="formatter">
    </el-table-column>
    <el-table-column prop="tag" label="标签" width="100"
      :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
    </el-table-column>
  </el-table> -->
</template>

<script>
  export default {
    data () {
      return {
        tableColumn: [
          {prope: 'date', label: '日期', sortable: '', hidden: false},
          {prope: 'name', label: '姓名', sortable: ''},
          {prope: 'login_name', label: '登录名', sortable: '', width: 200},
          {prope: 'address', label: '地址', sortable: ''},
          {prope: 'tag', label: '标签', sortable: '', width: 180}
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