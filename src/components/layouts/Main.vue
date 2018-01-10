<template>
<div id="main">
  <el-container>
    <el-header><layouts-header></layouts-header></el-header>
    <el-container>
      <el-aside><layouts-aside></layouts-aside></el-aside>
      <router-view></router-view>
    </el-container>
    <el-footer><layouts-footer></layouts-footer></el-footer>
  </el-container>
</div>
</template>
<script>
import layoutsHeader from './Header'
import layoutsAside from './Aside'
import layoutsFooter from './Footer'
export default {
  name: 'main',
  components: {
    layoutsHeader,
    layoutsAside,
    layoutsFooter
  }
}
</script>
<style>
#main {
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
