import {defineStore} from "pinia";

import init, {greet, add, Point2D, calculate_distance, add_points} from "../assets/ttr.js";

const w = {greet, add, Point2D, calculate_distance, add_points}

export type WasmUtil = typeof w;

export const useWasmStore = defineStore<'wasm-point', { loading: boolean, wasm: WasmUtil | null }>('wasm-point', {
    state() {
        return {
            loading: true,
            wasm: null
        }
    },
    actions: {
        async initialize(): Promise<WasmUtil> {
            await init();

            this.wasm = {
                greet, add, Point2D, calculate_distance, add_points
            };
            this.loading = false;

            return this.wasm;
        }
    }
});