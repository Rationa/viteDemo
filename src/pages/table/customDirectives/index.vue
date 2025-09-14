<script setup lang="ts">
import { ref, type Directive, type DirectiveBinding } from "vue"
// 在模板中启用 v-move

interface backgrod {
  background: string
}

localStorage.setItem("userId", "coldmo")

const permission = [
  "coldmo:shop:add",
  "coldmo:shop:edit",
  // "coldmo:shop:delete"
]

const userId = localStorage.getItem("userId") as string

const vHasShow: Directive = {
  mounted: (el: HTMLElement, binding: DirectiveBinding<string>) => {
    if (!permission.includes(userId + ":" + binding.value))
      el.style.display = "none";
  }
}

const vMove: Directive = {
  mounted: (el: HTMLElement, binding: DirectiveBinding<backgrod>) => {
    el.classList.add('is-highlight')
  }
}

// const color = ref<string>("#ff0000")
const color = ref<string>("orange")
</script>

<template>
  <div v-move="123" v-highlight>
    自定义指令
    <span v-color="color">123</span>
    <button v-has-show="'shop:add'">新增</button>
    <button v-has-show="'shop:edit'">修改</button>
    <button v-has-show="'shop:delete'">删除</button>
  </div>
</template>

<style scoped>
.home-box {
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.is-highlight {
  color: aqua;
}
</style>
