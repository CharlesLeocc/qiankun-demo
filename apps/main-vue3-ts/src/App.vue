<script setup lang="ts">
import { ref } from 'vue';
import { themeManager, type ThemeType } from './utils/themeManager';
import {Button as CommonButton } from 'common-components';
import { logButtonClick } from 'common-functions';

const theme = ref<ThemeType>(themeManager.getCurrentTheme().key);

const toggleTheme = () => {
  const nextTheme: ThemeType = theme.value === 'light' ? 'dark' : 'light';
  theme.value = nextTheme;
  themeManager.applyTheme(nextTheme);
};
const handleCommonButtonClick = () => {
  logButtonClick('main-vue3-ts', '公共按钮');
};
</script>

<template>
  <div class="main-layout">
    <!-- 顶部导航栏 -->
    <nav class="top-nav">
      顶部导航
      <button class="theme-toggle" type="button" @click="toggleTheme">
        {{ theme === 'light' ? '切换暗色主题' : '切换亮色主题' }}
      </button>
      <CommonButton style="margin-left: 12px" @click="handleCommonButtonClick">公共按钮</CommonButton>
    </nav>
    <!-- 主内容区 -->
    <div class="main-content">
      <!-- 侧边菜单 -->
      <div class="menu">
        <ul>
          <li>
            <router-link to="/" active-class="active">首页</router-link>
          </li>
          <li>
            <router-link to="/son01-vue3-ts" active-class="active">vue3-ts子应用01</router-link>
          </li>
          <li>
            <router-link to="/son02-vue3-ts" active-class="active">vue3子应用02</router-link>
          </li>
        </ul>
      </div>
      <!-- 内容区 -->
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
/* 主布局容器 */
.main-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* 顶部导航栏 */
.top-nav {
  background-color: var(--color-bg-primary);
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
  flex-shrink: 0;
  z-index: 1000;
}

/* 主内容区（侧边栏 + 内容区） */
.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* 侧边菜单 */
.menu {
  background-color: var(--color-bg-primary);
  width: 200px;
  padding-top: 20px;
  flex-shrink: 0;
  overflow-y: auto;
  z-index: 999;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 10px 20px;
      height: 30px;
      background-color: var(--color-bg-primary);
      color: var(--color-text-primary);

      a {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
      }

      &:hover {
        background-color: var(--color-bg-hover);
        color: var(--color-text-primary);
      }

      .active {
        color: var(--color-primary);
      }
    }
  }
}

/* 内容区 */
.content {
  flex: 1;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

/* 微应用容器 */
#micro-app-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
}

.theme-toggle {
  margin-left: auto;
  margin-right: 16px;
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid var(--color-border-primary);
  background-color: var(--color-bg-primary);
  cursor: pointer;
}
</style>
