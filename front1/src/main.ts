import './assets/main.css';

import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';

import init, {greet, add, calculate_distance, Point2D, add_points} from "./assets/ttr.js";  // Import functions directly

const run = async () => {
    await init();  // Await initialization directly in an async function, no need for wrapping it in a promise
    return {greet, add, Point2D, calculate_distance, add_points};  // Return functions directly
};

run().then(({greet, add, Point2D, calculate_distance, add_points}) => {  // Destructure functions from the returned object
    const message = greet("Alice");
    console.log(message);  // Should print "hello Alice"

    const result = add(100, 200);
    console.log(result);  // Should print 300

    const point1 = new Point2D(0.0, 0.0);
    const point2 = new Point2D(3.0, 4.0);
    const distance = calculate_distance(point1, point2);
    console.log(distance);

    const point3 = add_points(point2, point2);
    console.log(calculate_distance(point1, point3));

    const app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.mount('#app');
});