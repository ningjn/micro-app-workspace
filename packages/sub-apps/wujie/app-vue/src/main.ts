import { createApp } from 'vue'
import { createPinia } from 'pinia'
import WujieVue from "wujie-vue3";

import App from './App.vue'
import router from './router'

import './assets/main.css'

declare global {
    interface Window {
        // 是否存在无界
        __POWERED_BY_WUJIE__?: boolean;
        // 子应用mount函数
        __WUJIE_MOUNT: () => void;
        // 子应用unmount函数
        __WUJIE_UNMOUNT: () => void;
        // 子应用无界实例
        __WUJIE: { mount: () => void };
    }
}

if (window.__POWERED_BY_WUJIE__) {
    let instance: any;
    window.__WUJIE_MOUNT = () => {
        const app = createApp(App)

        app.use(WujieVue)
        app.use(createPinia())
        app.use(router)

        app.mount('#app')
    };
    window.__WUJIE_UNMOUNT = () => {
        instance.unmount();
    };
    /*
      由于vite是异步加载，而无界可能采用fiber执行机制
      所以mount的调用时机无法确认，框架调用时可能vite
      还没有加载回来，这里采用主动调用防止用没有mount
      无界mount函数内置标记，不用担心重复mount
    */
    window.__WUJIE.mount()
} else {
    const app = createApp(App)

    app.use(WujieVue)
    app.use(createPinia())
    app.use(router)

    app.mount('#app')
}


