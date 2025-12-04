/*
 * @Author: leo charlesleo@gmail.com
 * @Date: 2025-12-03 15:58:39
 * @LastEditors: leo charlesleo@gmail.com
 * @LastEditTime: 2025-12-03 15:59:12
 * @Description: 
 * @UpdateInfo: 
 * 
 */
import type { App } from 'vue';
import Button from './Button.vue';

export { Button };

export default {
  install(app: App) {
    app.component('CommonButton', Button);
  },
};
