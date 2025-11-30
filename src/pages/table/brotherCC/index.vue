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
      return row.name == "1" ? "li" : "yuan"
    }
  },
]

const getTableData = ()=> {
  return axios("/api/JSON/user.json")
}

const selectRow = (rows: AnyColumn) => {
  console.log("rows", rows)
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
    <DYTable 
      ref="dyTableRef"
      :tableProps="{ currentRowKey: 'id', border: true }"
      @select="selectRow"
      >
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
