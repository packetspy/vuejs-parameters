<template>
  <div>
    <h1>Page with parameter</h1>
    <p>Unique ID: {{ uniqueId }}</p>
  </div>
</template>

<script lang="ts" setup>
import { router } from '@/routes'
const uniqueId: string | string[] = router.currentRoute.value.params.uniqueId
</script>
