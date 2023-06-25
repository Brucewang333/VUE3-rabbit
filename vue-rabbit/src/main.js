// 引入初始化样式文件
import "@/styles/common.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import  PiniaPluginPersistedState  from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
import { useIntersectionObserver } from "@vueuse/core";
// 引入全局组件插件
import { componentPlugin } from '@/components'


// 引入懒加载插件并注册

import {lazyPlugin} from '@/directives'


const pinia = createPinia();
pinia.use(PiniaPluginPersistedState);

const app = createApp(App);
app.use(pinia);

app.use(router);
app.use(lazyPlugin)
app.mount("#app");
app.use(componentPlugin)
// 定义全局指令


