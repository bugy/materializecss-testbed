<template>
  <div>
    <h4 class="header">Tooltips <a
        href="https://materializecss.github.io/materialize/tooltips.html">(docs)</a></h4>

    <a class="btn tooltipped" data-position="bottom" data-tooltip="I am a tooltip">Hover me!</a>

  </div>
</template>

<script>
import 'materialize-css/js/tooltip';

export default {
  name: 'TooltipsSection',
  mounted() {
    const elements = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elements, {});
  }
}
</script>

<style scoped>

</style>