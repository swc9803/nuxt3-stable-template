# Nuxt 3 Stable Template

## Page Transitions
nuxt.config.ts
app: {
    pageTransition: { name: 'page', mode: 'out-in' }
},

## app.vue
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}