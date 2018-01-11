<template>
  <aside>
    <el-menu :default-active="$router.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" unique-opened router>
      <template v-for="(item, key) in menus" v-if="!item.hidden">
        <el-submenu :index="item.path" :key="key" v-if="item.children">
          <template slot="title">
            <i :class="item.iconCls"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item v-for="(child, key) in item.children" :key="key" :index="child.path">
            <i :class="child.iconCls"></i>
            <span class="childSpan">{{child.name}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-if="!item.children" :key="key" :index="item.path">
          <i :class="item.iconCls"></i>
          <span>{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </aside>
</template>
<style>
  aside{
    width: 100%;
  }
  aside i{
    float: left;
    margin-top: 8px;
  }
  aside span {
    font-size: 32px;
    font-family: inherit;
  }
  aside el-submenu el-submenu span {
    font-size: 27px;
    font-family: inherit;
  }
  aside el-menu-item {
    font-size: 22px;
    font-family: inherit;
  }
  .el-menu {
    background-color: rgb(191, 197, 216);
  }
  .el-menu-item.is-active {
    color: #f5f8f8;
    background: gray;
  }
  .childSpan {
    font-size: 27px;
    font-family: inherit;
  }
</style>

<script>
  export default {
    data () {
      return {
        menus: this.$router.options.routes[2].children
      }
    },
    created () {
      console.log('aside is create')
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

