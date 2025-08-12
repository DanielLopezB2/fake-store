<template>
  <nuxt-loading-indicator />
  <u-app :toaster="{ position: 'bottom-center' }" :tooltip="{ delayDuration: 0 }">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </u-app>
</template>

<script lang="ts" setup>
  const route = useRoute();
  if (route.path === '/') {
    navigateTo('/login', { redirectCode: 301 });
  }
</script>
