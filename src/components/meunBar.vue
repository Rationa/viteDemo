<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';


const route = useRoute()
const router = useRouter();

const list = ref(router.options.routes);
console.log("route==>", list)
const activeMenu = computed(() => route.path);

console.log("activeMenu", activeMenu)

const noChilden = computed(() => list.value.filter(item => !item.children || item.children.length === 0))
const hasChilden = computed(() => list.value.filter(item => item.children && item.children.length > 0))

const handlemenu = (item) => {
  router.push(item.path);
}

const handlmenuclild = (item, subItem) => {
  console.log("==>", item.path + '/' + subItem.path)
  router.push(item.path + '/' + subItem.path)
}

</script>

<template>
  <div>
    <el-scrollbar>
      <!-- <el-aside>：侧边栏容器 -->
      <el-aside width="200px">
        <h5 class="mb-2">动态路由</h5>
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item v-for="item in noChilden" :index="item.path" :key="item.path" @click="handlemenu(item)">
            <component class="icon" :is="item.meta.icon"></component>
            <span>{{ item.meta.title }}</span>
          </el-menu-item>
          <el-sub-menu v-for="item in hasChilden" :index="item.path" :key="item.path">
            <template #title>
              <component class="icon" :is="item.meta.icon"></component>
              <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item v-for="subItem in item.children" :key="subItem.path" :index="subItem.path"
              @click="handlmenuclild(item, subItem)" class="sub-menu-deep">
              <component class="icon" :is="subItem.meta.icon"></component>
              <span>{{ subItem.meta.title }}</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.icon {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}

.el-menu {
  border-right: none;
  font-size: 20px;
  font-weight: bold;

  h3 {
    line-height: 48px;
    text-align: center;
  }
}

.el-aside {
  height: 100%;
  background-color: #fff;
  /* box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.2); */
  border-right: 1px solid #e4e7ed;
}
</style>
