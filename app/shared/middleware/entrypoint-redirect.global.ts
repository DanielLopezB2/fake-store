export default defineNuxtRouteMiddleware(to => {
  if (to.path !== '/login' && to.path === '/') {
    return navigateTo('/login');
  }
});
