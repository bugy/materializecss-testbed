<template>
  <div>
    <h4 class="header">Toasts <a
        href="https://materializecss.github.io/materialize/toasts.html">(docs)</a></h4>

    <a class="waves-effect waves-light btn" @click="onClick">Toast!</a>
  </div>
</template>

<script>
import 'materialize-css/js/toasts';

export default {
  name: 'ToastSection',
  methods: {
    onClick() {
       M.toast({unsafeHTML: '<span>I am toast content</span><button class="btn-flat toast-action">Undo</button>'})
    }
  }
}
</script>

<style scoped>
</style>