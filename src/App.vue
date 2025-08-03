<script setup lang="ts">
import MeunBar from '@/components/MeunBar.vue';

</script>

<template>
  <div class="layout-container">
    <!-- <el-container>：外层容器 当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列， 否则会水平左右排列/ -->
    <el-container>
       <MeunBar></MeunBar>
      <el-container>
        <!-- <el-header>：顶栏容器 -->
        <el-header class="el-header">
          Header
        </el-header>
        <!-- <el-main>：主要区域容器 -->
        <el-main class="right-mian">
          <el-scrollbar>
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.layout-container .el-header {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
</style>
