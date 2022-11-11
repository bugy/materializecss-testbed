<template>
  <div>
    <h4 class="header">Slider / range <a href="https://material.io/components/sliders">(docs)</a></h4>
    <form action="#">
      <p class="range-field">
        <input id="test5" max="100" min="0" type="range"/>
      </p>
    </form>
  </div>

</template>

<script>
export default {
  name: 'SliderSection'
}
</script>

<style scoped>
input[type=range] {
  width: 500px;
}
</style>