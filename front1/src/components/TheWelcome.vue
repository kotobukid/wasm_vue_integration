<script setup lang="ts">
import {useWasm} from "@/composables/wasm";
const {greet} = await useWasm();
</script>

<template>
  <span class="strong">{{ greet('Home View') }}</span>
</template>

<style scoped>
span.strong {
  font-weight: bolder;
  font-size: 2rem;
  line-height: 2rem;
  display: block;
}
</style>
