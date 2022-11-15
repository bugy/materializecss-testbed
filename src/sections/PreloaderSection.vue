<template>
  <div>
    <h4 class="header">Preloaders <a href="https://materializecss.github.io/materialize/preloader.html">(docs)</a></h4>
    <div class="progress">
      <div class="determinate" style="width: 70%"></div>
    </div>
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
    <div class="preloader-wrapper big active">
      <div class="spinner-layer">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PreloaderSection'
}
</script>

<style scoped>

</style>