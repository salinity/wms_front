<template lang="pug">
  section
    div
      el-table(:data="tableData" stripe border :height="tableHeight")
        el-table-column(fixed="left", label="操作", width="100")
          template(slot-scope="scope")
            el-button(type="text" size="small") 修改
            el-button(type="text" size="small") 删除
        template(v-for="(item ,index) in activeTableColumn")
          el-table-column(:prop="item.prop" :label="item.label" :sortable="item.sortable" :width="item.width" :key="index")
    .block
      el-pagination(@size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="1" :page-sizes="[10, 30, 50]" 
      :page-size="30" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length")
</template>
<script>
export default {
  name: 'z-table',
  props: {
    tableColumn: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    },
    tableHeight: 0
  },
  data () {
    return {
    }
  },
  computed: {
    activeTableColumn: function () {
      return this.tableColumn.filter(function (item) {
        return !item.hidden
      })
    }
  },
  created () {
    console.log('zTable is created')
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
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style>

.el-table__body-wrapper {
  background: #ececd2;
}

.el-pagination{
  margin-top: 3px;
}

.el-table td, .el-table th {
    padding: 0px 0;
    min-width: 0;
}
</style>
