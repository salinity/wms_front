<<template>
  <aside>
    <el-radio-group v-model="isCollapse" >
      <!-- <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button> -->
    </el-radio-group>
    <el-menu default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
        </template>
        <span slot="title">导航一</span>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-5">
          <span slot="title">选项5</span>
          <el-menu-item index="1-5-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="1-6">
          <span slot="title">选项6</span>
          <el-menu-item index="1-6-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-date"></i>
        </template>
        <span slot="title">导航二</span>
        <el-submenu index="2-4">
          <span slot="title">选项4</span>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="2-5">
          <span slot="title">选项5</span>
          <el-menu-item index="2-5-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="2-6">
          <span slot="title">选项6</span>
          <el-menu-item index="2-6-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <!-- <span slot="title">导航一</span> -->
        </template>
        <span slot="title">导航三</span>
        <el-submenu index="3-4">
          <span slot="title">选项4</span>
          <el-menu-item index="3-4-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="3-5">
          <span slot="title">选项5</span>
          <el-menu-item index="3-5-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="3-6">
          <span slot="title">选项6</span>
          <el-menu-item index="3-6-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
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
  /* .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  } */
</style>

<script>
  export default {
    data () {
      return {
        isCollapse: false // 导航栏是否收缩为一个图标
      }
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

