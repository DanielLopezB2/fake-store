<template>
  <section>
    <div class="flex justify-center">
      <h1 class="font-semibold text-3xl text-primary-200">List of Products!</h1>
    </div>

    <!-- LOADING STATE -->
    <div class="mt-8 grid grid-cols-3 gap-6" v-if="pending">
      <u-skeleton class="h-64 w-[400px]" v-for="_ in 6" />
    </div>

    <!-- PRODUCTS LIST -->
    <div v-else-if="visibleProducts.length" class="grid grid-cols-3 gap-6 mt-8">
      <product-card
        v-for="(product, index) in visibleProducts"
        :key="product.id"
        :product="product"
        :ref="el => setLastItemRef(el, index)"
      />
    </div>

    <!-- FETCHING ERROR -->
    <div v-else-if="error" class="mt-8">
      <u-alert
        color="error"
        title="Oh no!"
        description="Something went wrong while fetching products. Please try again later."
        icon="i-lucide-octagon-alert"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import type ProductCard from '~/products/components/ProductCard.vue';
  import type { Product } from '~/products/interfaces/product.interface';

  const {
    data: products,
    pending,
    error,
  } = useFetch<Product[]>('https://fakestoreapi.com/products');

  const { visibleItems: visibleProducts, setLastItemRef } = useVirtualScroller(products, 6, 0.5);
</script>
