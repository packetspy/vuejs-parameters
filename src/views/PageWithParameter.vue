<template>
  <div>
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <h1>Page with parameter</h1>
    <p class="anyway">Unique ID: {{ uniqueId }}</p>
  </div>
</template>

<script lang="ts" setup>
import '@/style.css'
import '@/assets/css/index.css'
import { router } from '@/routes'
const uniqueId: string | string[] = router.currentRoute.value.params.uniqueId
</script>
