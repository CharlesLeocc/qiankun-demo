<template>
  <div id="micro-app-container"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { start } from 'qiankun';

let hasStarted = false;

onMounted(() => {
  if (!hasStarted) {
    start({
      sandbox: {
        experimentalStyleIsolation: true, // 使用实验性样式隔离
      },
    });
    hasStarted = true;
  }
});
</script>

<style scoped>
#micro-app-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  background-color: var(--color-bg-primary);
}
</style>
