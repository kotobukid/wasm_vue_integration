import {useWasmStore, type WasmUtil} from "@/stores/wasm";

export {WasmUtil};

export const useWasm = async (): Promise<WasmUtil> => {
    return new Promise(async (resolve) => {
        const wasmStore = useWasmStore();

        const {
            add_points,
            greet,
            add,
            Point2D,
            calculate_distance
        } = await wasmStore.initialize();

        resolve({
            add_points,
            greet,
            add,
            Point2D,
            calculate_distance
        });
    })
};