import './assets/main.css';

import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {useWasmStore} from "@/stores/wasm";

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

const wasmStore = useWasmStore();

wasmStore.initialize().then(() => {
    app.mount('#app');
});
