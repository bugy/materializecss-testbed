<template>
  <div>
    <h4 class="header">Tap target <a
        href="https://materializecss.github.io/materialize/feature-discovery.html">(docs)</a></h4>

    <a id="menu" class="waves-effect waves-light btn btn-floating"><i class="material-icons">menu</i></a>

    <!-- Tap Target Structure -->
    <div class="tap-target" data-target="menu" ref="tapTarget">
      <div class="tap-target-content">
        <h5>Title</h5>
        <p>A bunch of text</p>
      </div>
    </div>

    <a class="waves-effect waves-light btn opener" @click="onClick">open</a>
  </div>
</template>

<script>
import 'materialize-css/js/tapTarget';

export default {
  name: 'TapTargetSection',
  mounted() {
    const tapTarget = document.querySelectorAll('.tap-target');
    M.TapTarget.init(tapTarget, {});
  },
  methods: {
    onClick() {
      const instance = M.TapTarget.getInstance(this.$refs.tapTarget);
      instance.open()
    }
  }
}
</script>

<style scoped>
a.opener {
  margin-left: 64px;
}
</style>