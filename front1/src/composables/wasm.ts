import {useWasmStore, type WasmUtil} from "@/stores/wasm";

export type {WasmUtil};

export const useWasm = async (): Promise<WasmUtil> => {
    return new Promise(async (resolve) => {
        const wasmStore = useWasmStore();

        const {
            add_points,
            greet,
            add,
            Point2D,
            calculate_distance
        } = await wasmStore.initialize(0);

        resolve({
            add_points,
            greet,
            add,
            Point2D,
            calculate_distance
        });
    })
};