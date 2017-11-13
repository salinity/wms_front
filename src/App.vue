<template>
  <div id="app">
    <el-container>
      <el-header>
        <layouts-header>Header</layouts-header>
      </el-header>
      <el-container>
        <el-aside>
          <layouts-aside width="200px">Aside</layouts-aside>
        </el-aside>
        <el-container>
          <el-main>
            <layouts-main></layouts-main>
          </el-main>
          <el-footer>
            <layouts-footer></layouts-footer>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutsHeader from './components/layouts/Header'
import layoutsAside from './components/layouts/Aside'
import layoutsMain from './components/layouts/Main'
import layoutsFooter from './components/layouts/Footer'
export default {
  name: 'app',
  components: {
    layoutsHeader,
    layoutsAside,
    layoutsMain,
    layoutsFooter
  },
  beforeCreate: function () {
    console.log('App beforeCreate 初始化时同步调用')
  },
  created: function () {
    console.log('App created 实例创建之后调用，此时已完成数据绑定，事件方法，但尚未开始DOM编译，即未挂载到document中')
  },
  beforeMount: function () {
    console.log('App beforeMount')
  },
  mounted: function () {
    console.log('App mounted 在编译结束时调用。此时所有的指令已生效，数据变化已能触发DOM更新，但不保证$el已插入文档')
  },
  beforeDestroy: function () {
    console.log('App beforeDestroy 销毁之前')
  },
  destroyed: function () {
    console.log('App destroyed 销毁方法')
  },
  beforeUpdate: function () {
    console.log('beforeUpdate')
  },
  updated: function () {
    console.log('再次更新实例病更新完DOM结构后调用')
  },
  ready: function () {
    this.$destroyed()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
