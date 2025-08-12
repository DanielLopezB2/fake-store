<template>
  <section>
    <div class="grid grid-cols-3 items-center mb-8">
      <nuxt-link to="/products">
        <u-button color="secondary" label="Ir atrás" icon="i-lucide-arrow-left" />
      </nuxt-link>
      <h1 class="font-semibold text-3xl text-primary-200 text-center">Product Details</h1>
      <div></div>
    </div>

    <!-- LOADING STATE -->
    <div class="mt-8 flex justify-center items-center" v-if="pending">
      <u-skeleton class="h-80 w-full" />
    </div>

    <!-- PRODUCT DETAILS -->
    <div v-else-if="product">
      <product-details :product="product" />
    </div>

    <!-- FETCHING ERROR -->
    <div v-else-if="error" class="mt-8">
      <u-alert
        color="error"
        title="Oh no!"
        description="Something went wrong while fetching product details. Please try again later."
        icon="i-lucide-octagon-alert"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { Product } from '~/products/interfaces/product.interface';

  const route = useRoute();
  const productId = route.params.id;

  const {
    data: product,
    pending,
    error,
  } = useFetch<Product>(`https://fakestoreapi.com/products/${productId}`);
</script>
