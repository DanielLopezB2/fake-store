<template>
  <section>
    <div class="flex justify-center">
      <h1 class="font-semibold text-2xl text-primary-200">List of Products!</h1>
    </div>

    <div v-if="pending"></div>

    <div v-else-if="products?.length! > 0" class="grid grid-cols-3 gap-6 mt-4">
      <product-card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { Product } from '~/products/interfaces/product.interface';

  const {
    data: products,
    pending,
    error,
  } = useFetch<Product[]>('https://fakestoreapi.com/products');
</script>
