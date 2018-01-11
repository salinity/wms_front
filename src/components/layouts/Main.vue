<template>
<div id="main">
  <el-container>
    <el-header><layouts-header></layouts-header></el-header>
    <el-container>
      <el-aside><layouts-aside></layouts-aside></el-aside>
      <el-main>
         <div class="outborder">
          <strong style="width:200px;float:right;color: #475669;">{{$route.name}}</strong>
          <el-breadcrumb separator="/" style="float:left;">
            <el-breadcrumb-item v-for="item in $route.matched" :key="item.key">
              {{ item.name }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <router-view></router-view>
      </el-main>
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
  },
  methods: {
  }
}
</script>
<style>
#main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header,
.el-footer {
  background-color: #096897;
  color: rgb(180, 156, 156);
  height: 130px ! important;
  text-align: center;
  line-height: 130px;
}

.el-aside {
  background-color: rgb(191, 197, 216);
  color: rgb(82, 114, 202);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
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

.outborder{
  height: 30px;
  align-content: center;
}
</style>
