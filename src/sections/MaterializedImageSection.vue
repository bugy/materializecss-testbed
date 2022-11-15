<template>
  <div>
    <h4 class="header">Materialized image <a href="https://materializecss.github.io/materialize/media.html">(docs)</a>
    </h4>

    <img class="materialboxed" width="400" src="https://loremflickr.com/1024/768">

  </div>
</template>

<script>
import 'materialize-css/js/materialbox';

export default {
  name: 'MaterializedImageSection',
  mounted() {
    const components = document.querySelectorAll('.materialboxed')
    M.Materialbox.init(components, {})
  }
}
</script>

<style scoped>

</style>