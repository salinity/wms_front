<template>
  <section>
    <el-col :span="24" class="toolbar search-toolbar">
      <el-form :inline="true" :model="filters">
        <div class="panel-box-left">
          <el-form-item>
            <el-date-picker v-model="filters.date" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-input v-model="filters.name" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="filters.address" placeholder="地址"></el-input>
          </el-form-item>
        </div>
        <z-search-button @rest="rest" @query="query"></z-search-button>
      </el-form>
    </el-col>
    <div class="tabel-class">
      <z-table :tableColumn="tableColumn" :tableData="tableData" :tableHeight="tableHeight"></z-table>
    </div>
  </section>
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
      rest: function () {
        console.log('rest is click')
        this.filters = {}
      },
      query: function () {
        console.log('query is click')
        this.filters = {}
      }
    }
  }
</script>

<style>

.panel-box-left {
  width: auto;
  float: left;
}

.el-col-24 {
  padding-left: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  background: #cccccc;
  width: 100%;
}

.tabel-class{
  background: #cccccc;
}
</style>
