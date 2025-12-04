<!--
 * @Author: leo charlesleo@gmail.com
 * @Date: 2025-12-03 10:28:24
 * @LastEditors: leo charlesleo@gmail.com
 * @LastEditTime: 2025-12-03 16:07:49
 * @Description: 
 * @UpdateInfo: 
 * 
-->
<script setup lang="ts">
import router from './router';
import { Button as CommonButton } from 'common-components';
import { logButtonClick } from 'common-functions';

const handleCommonButtonClick = () => {
  logButtonClick('son01-vue3-ts', '子应用1公共按钮');
};
</script>

<template>
  <div class="son01-app">
    <CommonButton style="margin: 10px" @click="handleCommonButtonClick">子应用1公共按钮</CommonButton>
    <ul>
      <li v-for="value in router.options.routes" :key="value.path" class="menu-item">
        <router-link :to="value.path" active-class="active">{{ value.name }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.son01-app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--color-bg-primary);
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px;
  flex-shrink: 0;
}

.active {
  color: var(--color-primary);
}

.menu-item {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  width: 100px;
  height: 30px;
  background-color: var(--color-bg-primary);
  cursor: pointer;
}
</style>
