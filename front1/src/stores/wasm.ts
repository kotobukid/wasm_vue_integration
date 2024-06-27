import {defineStore} from "pinia";

import init, {greet, add, Point2D, calculate_distance, add_points} from "../assets/ttr.js";

const w = {greet, add, Point2D, calculate_distance, add_points}

export type WasmUtil = typeof w;

export const useWasmStore = defineStore<'wasm-point', { loaded: boolean, wasm: WasmUtil | null }>('wasm-point', {
    state() {
        return {
            loaded: false,
            wasm: null
        }
    },
    actions: {
        async initialize(wait_for_practice: number): Promise<WasmUtil> {
            wait_for_practice = wait_for_practice || 0;
            return new Promise((resolve) => {
                if (this.loaded) {
                    console.log('early return wasm store initializing');
                    resolve(this.wasm);
                } else {
                    console.log('start wasm store initializing');
                    setTimeout(async () => {
                        await init();

                        this.wasm = {
                            greet, add, Point2D, calculate_distance, add_points
                        };
                        this.loaded = true;

                        resolve(this.wasm);
                    }, wait_for_practice);
                }
            });
        }
    }
});