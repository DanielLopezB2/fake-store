<template>
  <div ref="rootEl" class="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
    <h2 class="text-xl font-semibold mb-2 text-primary-800 text-center">
      {{ product.title }}
    </h2>

    <div class="flex justify-center p-8">
      <nuxt-img :src="product.image" :height="128" :width="128" />
    </div>

    <p class="text-gray-400 mb-4 flex-1">
      {{ truncatedDescription }}
    </p>

    <div class="flex justify-between items-center">
      <p class="text-lg font-bold text-primary-500 mt-auto">${{ product.price }}</p>
      <u-button label="Ver más" trailing-icon="i-lucide-arrow-right" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Product } from '~/products/interfaces/product.interface';
  import { computed } from 'vue';

  const props = defineProps<{ product: Product }>();

  const truncatedDescription = computed(() => {
    const text = props.product.description || '';
    return text.length > 131 ? text.slice(0, 131) + '...' : text;
  });

  const rootEl = ref<HTMLElement | null>(null);
  defineExpose({ rootEl });
</script>
