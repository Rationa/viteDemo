<script setup lang="ts">
import { ref } from "vue";
const a = ref();
</script>

<template>
  <div>table</div>
  <div v-memo="">{{ a }}</div>
</template>

<style scoped></style>
