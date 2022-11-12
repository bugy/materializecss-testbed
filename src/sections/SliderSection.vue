<template>
  <div>
    <h4 class="header">Slider / range <a href="https://material.io/components/sliders">(docs)</a></h4>
    <form action="#">
      <p class="range-field">
        <input id="test5" max="100" min="0" type="range"/>
      </p>
      <div id="fancy-slider"></div>
    </form>
  </div>

</template>

<script>
import * as noUiSlider from 'materialize-css/extras/noUiSlider/nouislider';
import 'materialize-css/extras/noUiSlider/nouislider.css';

export default {
  name: 'SliderSection',
  mounted() {
    const fancySlider = document.querySelector('#fancy-slider');
    noUiSlider.create(fancySlider, {
      start: [20, 80],
      connect: true,
      step: 1,
      orientation: 'horizontal', // 'horizontal' or 'vertical'
      range: {
        'min': 0,
        'max': 100
      },
      format: wNumb({
        decimals: 0
      })
    });

    const ranges = document.querySelectorAll('input[type=range]');
    M.Range.init(ranges);
  }
}
</script>

<style scoped>
input[type=range],
#fancy-slider {
  width: 500px;
}
</style>