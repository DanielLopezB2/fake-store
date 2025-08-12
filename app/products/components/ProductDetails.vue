<template>
  <div class="mt-8 flex flex-col justify-center items-center">
    <h3 class="font-semibold text-2xl text-primary-400 text-center">
      {{ product?.title }}
    </h3>
    <div class="my-4 flex justify-center items-center gap-2">
      <span>Categorias:</span>
      <u-badge color="success" :label="product?.category" />
    </div>
    <div class="px-8 py-6 border border-dashed border-secondary-300 rounded-lg">
      <nuxt-img :src="product?.image" alt="Product Image" :width="250" />
    </div>
    <div class="flex justify-center mt-8 items-center gap-12 max-w-2xl">
      <div class="flex flex-col">
        <div>
          <p class="font-semibold text-lg text-primary-300">Description:</p>
          <p class="text-gray-400">{{ product?.description }}</p>
        </div>
        <div class="mt-4">
          <p class="text-primary-400 font-bold text-2xl">${{ product?.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Product } from '../interfaces/product.interface';
  defineProps<{ product: Product }>();
</script>
