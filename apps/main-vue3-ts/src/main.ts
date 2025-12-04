/*
 * @Author: leo charlesleo@gmail.com
 * @Date: 2025-12-03 10:28:24
 * @LastEditors: leo charlesleo@gmail.com
 * @LastEditTime: 2025-12-03 19:03:58
 * @Description: 
 * @UpdateInfo: 
 * 
 */
import { initGlobalState, registerMicroApps } from 'qiankun';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';

import './style.css';
import './assets/theme/theme.less';
import { themeManager } from './utils/themeManager';

const { key: initialTheme } = themeManager.getCurrentTheme();

// 初始化全局状态
const initialState = {
  userInfo: {
    name: '张三',
    age: 18,
  },
  theme: initialTheme,
};
const actions = initGlobalState(initialState);

// 导出actions以便在其他组件中更新全局状态
export { actions };
// 创建Vue应用实例
const app = createApp(App);
app.use(ElementPlus);
app.config.globalProperties.$microActions = actions;

// 注册路由
app.use(router);

// 挂载应用
app.mount('#app');

// 注册微应用
registerMicroApps([
  {
    name: "son01-vue3-ts",
    entry: "http://192.168.10.119:8081/",
    container: "#micro-app-container",
    activeRule: "/son01-vue3-ts",
    props: {
      theme: initialTheme,
      onGlobalStateChange: actions.onGlobalStateChange,
      setGlobalState: actions.setGlobalState,
    },
  },
  {
    name: "son02-vue3-ts",
    entry: "http://192.168.10.119:8082/",
    container: "#micro-app-container",
    activeRule: "/son02-vue3-ts",
    props: {
      theme: initialTheme,
      onGlobalStateChange: actions.onGlobalStateChange,
      setGlobalState: actions.setGlobalState,
    },
  },
]);
