<template lang="pug">
div#main
  el-container
    el-header
      layouts-header
    el-container
      el-aside
        layouts-aside
      el-main
        .outborder
          strong(style="width:200px;float:left;color: #475669;") {{$route.name}}
          el-breadcrumb(separator-class="el-icon-arrow-right" style="float:right;")
            el-breadcrumb-item(v-for="item in $route.matched" v-if="item.name != null" :key="item.key") {{ item.name }}
        router-view
    el-footer
      layouts-footer
</template>
<script>
import layoutsHeader from './Header'
import layoutsAside from './Aside'
import layoutsFooter from './Footer'
export default {
  name: 'main-view',
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
.el-header {
  background-color: #096897;
  color: rgb(180, 156, 156);
  height: 130px ! important;
  text-align: center;
  line-height: 130px;
}

.el-footer {
  background-color: #096897;
  color: rgb(180, 156, 156);
  height: 100px ! important;
  text-align: center;
  line-height: 100px;
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

@media screen and (max-width: 10000px) {
  .el-main {
    height: 1307px;
  }
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
  background: #e6e6e6;
  height: 30px;
  align-content: center;
}

.el-submenu__title {
  background: #585858;
}
</style>
