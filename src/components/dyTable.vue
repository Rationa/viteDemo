<script setup lang="ts">
import { ElMessage } from 'element-plus'
import type { AnyColumn } from 'element-plus/es/components/table-v2/src/common.mjs'
import { ref, render } from "vue"

type TC = {
  prop: string,
  label: string
  type?: string
  extends: object
}

type TABLEPARMS = {
  tableColumnList: Array<TC>,
  api: Promise<Object>
}
const emit = defineEmits(['select'])

// const tableProps = ref<TabBarProps>();
const rowsProps = ref();
const showList = ref<Array<TABLEPARMS>>();
const listLoading = ref<boolean>(false)

// 接受参数
const accpectParams = async (params: TABLEPARMS) => {
  rowsProps.value = params;
  if (rowsProps.value?.api) {
    listLoading.value = true
    try {
      const result = await rowsProps.value?.api();
      showList.value = result.data.data;
      listLoading.value = false
    } catch {
      ElMessage("信号不好，请稍后尝试");
      listLoading.value = false
    }
  }
}

// 勾选的想
const selectRow = (rows: AnyColumn) => {
  emit('select', rows);
}


defineProps({
  tableProps: { type: Object, default: () => {} },
})

// 暴露的子组件方法
defineExpose({
  accpectParams
})

</script>
<template>
  <div class="dytable">
    <el-table
      class="fixedtableHeight"
      v-loading="listLoading"
      ref="multipleTable"
      :data="showList"
      @select="selectRow"
      tooltip-effect="dark"
      style="width: 100%;margin-top:1%;"
      v-bind="{ ...tableProps }"
      >
      <el-table-column 
        :type="item.type" 
        :width="item.width" 
        :label="item.label" 
        :property="item.prop"
        v-for="item in rowsProps?.tableColumnList" :key="item.prop" 
        align="center"
        v-bind="{ ...item.extends }"
        >
        <template #header>
        </template>
        <template #default="scope">
          {{ item.render ? item.render(scope.row) : scope.row[scope.column.property] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style lang="scss" scoped>
</style>
