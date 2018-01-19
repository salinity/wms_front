<template>
  <div class="panel-box-right">
    <el-form-item>
      <el-button type="primary" size="small" v-on:click="query">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="small" v-on:click="rest">重置</el-button>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: 'z-search-button',
  methods: {
    query () {
      this.$emit('query')
    },
    rest () {
      this.$emit('rest')
    }
  }
}
</script>

<style>
.panel-box-right {
  width: auto;
  float: right;
  padding-right: 5px;
}
</style>
