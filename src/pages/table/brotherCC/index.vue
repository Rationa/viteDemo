<script setup lang="ts">
import { ref, onMounted } from "vue"
import DYTable from "@/components/dyTable.vue"
import axios from "axios"
import type { AnyColumn } from "element-plus/es/components/table-v2/src/common.mjs"

const dyTableRef = ref()

const props = [
  {
    type: "selection",
    width: 55
  },
  {
    prop: "id",
    label: "编号",
    width: 55,
    extends: { fixed: true }
  },
  {
    prop: "user",
    label: "用户",
    width: 100
  },
  {
    prop: "name",
    label: "名字333",
    width: 120,
    render: (row: AnyColumn) => {
      return row.name == "1" ? "li" : row.name
    }
  },
  {
    prop: "options",
    label: "操作",
  }
]

const getTableData = ()=> {
  return axios("/api/JSON/user.json")
}

const selectRow = (rows: AnyColumn) => {
  console.log("rows", rows)
}

const viewDetail = (scope: any) => {
  console.log("row==>", scope.row.name)
}

onMounted(() => {
  dyTableRef.value.accpectParams({
    tableColumnList: props,
    api: getTableData
  })
})



</script>

<template>
  <div class="provide-and-inject-box">
    <img src="https://ts2.tc.mm.bing.net/th/id/OIP-C.ExoN8JY43TlYC0hCnoU8DwHaDt?w=108&h=108&c=1&bgcl=1fe6d9&r=0&o=7&dpr=1.3&pid=ImgRC&rm=3" alt="" v-bind="{ width: 200, height: 200, alt: 'logo' }">
    <DYTable 
      ref="dyTableRef"
      :tableProps="{ currentRowKey: 'id', border: true }"
      @select="selectRow"
      >
      <template #options="scope">
        <el-button type="primary" @click="viewDetail(scope)">详情</el-button>
        <el-button type="primary">修改</el-button>
        <el-button type="primary">删除</el-button>
      </template>
    </DYTable>
  </div>
</template>

<style scoped>
.home-box {
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
