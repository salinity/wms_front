<template>
  <div id="app">
        <el-container>
          <el-main>
            <layouts-main></layouts-main>
          </el-main>
        </el-container>
  </div>
</template>

<script>
import layoutsMain from './components/layouts/Main'
export default {
  name: 'app',
  components: {
    layoutsMain
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
