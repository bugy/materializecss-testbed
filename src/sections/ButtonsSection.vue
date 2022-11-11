<template>
  <div class="buttons-block">
    <h4 class="header">Buttons <a href="https://materializecss.com/buttons.html">(docs)</a></h4>
    <a class="waves-effect waves-light btn">button</a>
    <a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">add</i></a>
    <a class="waves-effect waves-teal btn-flat">Button</a>
    <a class="btn disabled">Button</a>
  </div>
</template>

<script>
export default {
  name: 'ButtonsSection'
}
</script>

<style scoped>
.buttons-block a {
  margin-right: 36px;
}
</style>