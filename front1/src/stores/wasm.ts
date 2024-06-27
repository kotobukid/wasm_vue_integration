import {defineStore} from "pinia";

import init, {greet, add, Point2D, calculate_distance, add_points} from "../assets/ttr.js";

export const useWasmStore = defineStore('wasm-point', {
    state() {
        return {
            loading: true,
            wasm: null
        }
    },
    actions: {
        async initialize() {
            await init();

            // @ts-ignore
            this.wasm = {
                greet, add, Point2D, calculate_distance, add_points
            };
            this.loading = false;
        }
    }
});