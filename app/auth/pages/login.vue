<template>
  <div>
    <div class="flex flex-col gap-2 justify-center items-center mb-8">
      <h1 class="font-bold text-3xl">Login</h1>
      <span class="text-sm text-primary-200/70">Fake Store</span>
    </div>
    <div class="border border-gray-200 p-12 rounded-lg w-lg bg-primary-50/20">
      <form class="space-y-4 md:space-y-6" action="#">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium">Correo</label>
          <u-input class="block" />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium">Contraseña</label>
          <u-input class="block" />
        </div>

        <u-button label="Ingresar" :block="true" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'auth',
  });

  const onSubmit = () => {
    console.log('Formulario enviado');
  };
</script>
