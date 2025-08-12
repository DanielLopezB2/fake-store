<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold mb-2 text-primary-800">
      {{ product.title }}
    </h2>
    <p class="text-gray-700 mb-4">{{ product.description }}</p>
    <p class="text-lg font-bold text-primary-500">${{ product.price }}</p>
  </div>
</template>

<script setup lang="ts">
  import type { Product } from '~/products/interfaces/product.interface';

  defineProps<{
    product: Product;
  }>();
</script>
