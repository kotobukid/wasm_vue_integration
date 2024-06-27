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
      準備中
    </template>
  </Suspense>
</template>
