<template>
  <div class="mt-8 flex flex-col justify-center items-center">
    <h3 class="font-semibold text-2xl text-primary-400 text-center">
      {{ product?.title }}
    </h3>
    <div class="my-4 flex justify-center items-center gap-2">
      <span>Categoría:</span>
      <u-badge color="success" :label="product?.category" />
    </div>
    <div class="px-8 py-6 border border-dashed border-secondary-300 rounded-lg bg-secondary-100/30">
      <nuxt-img :src="product?.image" alt="Product Image" :width="250" />
    </div>
    <div class="flex justify-center mt-8 items-center gap-12 max-w-2xl">
      <div class="flex flex-col">
        <div>
          <p class="font-semibold text-lg text-primary-300">Descripción:</p>
          <p class="text-gray-400">{{ product?.description }}</p>
        </div>
        <div class="mt-2">
          <div class="flex items-center gap-2 justify-between">
            <p class="font-semibold text-lg text-primary-300">Calificación:</p>
            <p class="text-gray-400 text-sm">{{ product?.rating?.rate }} / 5</p>
          </div>
          <u-progress v-model="progressValue" :max="5" color="success" />
        </div>
        <div class="mt-8 flex justify-between items-center">
          <p class="text-primary-500 font-bold text-2xl">${{ product?.price }}</p>
          <u-button variant="outline" icon="i-lucide-shopping-cart" size="lg">
            Agregar al carrito
          </u-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Product } from '../interfaces/product.interface';
  const props = defineProps<{ product: Product }>();
  const progressValue = ref(props.product?.rating?.rate || 0);
</script>
