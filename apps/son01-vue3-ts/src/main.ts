import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper';
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import './style.css';

let app: any = null;
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(App).use(router).use(ElementPlus).mount('#app');
} else {
  renderWithQiankun({
    bootstrap: () => {
      console.log('bootstrap');
    },
    mount: (props: any) => {
      console.log('mount - received props:', props);
      app = createApp(App);
      app.use(router);
      app.use(ElementPlus);
      // 将qiankun传递的props设置为全局属性（需在组件挂载前设置，保证 onMounted 时可用）
      app.config.globalProperties.$qiankunInfo = props;
      // 直接从props中解构出全局状态管理函数并设置为全局属性，便于组件使用
      if (props.onGlobalStateChange) {
        app.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
      }
      if (props.setGlobalState) {
        app.config.globalProperties.$setGlobalState = props.setGlobalState;
      }
      app.mount(props.container.querySelector('#app'));
    },
    unmount: () => {
      console.log('unmount');
      app.unmount();
    },
    update: () => {
      console.log('update');
    },
  });
}
