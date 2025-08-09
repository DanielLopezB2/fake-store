import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      pinia: () => {
        const pinia = createPinia();
        pinia.use(piniaPluginPersistedstate);
      },
    },
  };
});
