<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

</script>

<template>
  <Suspense>
    <template #default>
      <main>
        <span>this is home view</span>
        <TheWelcome/>
      </main>
    </template>
    <template #fallback>
      <span class="suspended">準備中(Suspense)</span>
    </template>
  </Suspense>
</template>

<style scoped>
span.suspended {
    background-color: orange;
    color: red;
    padding: 20px;
}
</style>
