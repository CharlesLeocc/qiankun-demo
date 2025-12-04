<!--
 * @Author: leo charlesleo@gmail.com
 * @Date: 2025-12-03 10:28:24
 * @LastEditors: leo charlesleo@gmail.com
 * @LastEditTime: 2025-12-03 17:56:56
 * @Description: 
 * @UpdateInfo: 
 * 
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { Button as CommonButton } from 'common-components';
import { logButtonClick } from 'common-functions';

const handleCommonButtonClick = () => {
  logButtonClick('son02-vue3-ts', '子应用2公共按钮');
};
</script>

<template>
  <div class="son02-container">
    <div class="son02-content">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <div style="margin-top: 16px">
        <CommonButton @click="handleCommonButtonClick">子应用2公共按钮</CommonButton>
      </div>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped lang="less">
.son02-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--color-bg-primary);
}

.son02-content {
  // flex: 1;
  overflow: auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em var(--color-success));
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em var(--color-success));
}
</style>
