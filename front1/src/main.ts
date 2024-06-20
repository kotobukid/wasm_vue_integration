import './assets/main.css';

import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';

import init, { greet, add } from "./assets/ttr.js";  // Import functions directly

const run = async () => {
    await init();  // Await initialization directly in an async function, no need for wrapping it in a promise
    return { greet, add };  // Return functions directly
};

run().then(({ greet, add }) => {  // Destructure functions from the returned object
    const message = greet("Alice");
    console.log(message);  // Should print "hello Alice"

    const result = add(100, 200);
    console.log(result);  // Should print 300

    const app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.mount('#app');
});