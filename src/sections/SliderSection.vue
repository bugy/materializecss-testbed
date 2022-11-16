<template>
  <div>
    <h4 class="header">Slider / range <a href="https://material.io/components/sliders">(docs)</a></h4>
    <form action="#">
      <p class="range-field">
        <input id="test5" max="100" min="0" type="range"/>
      </p>
      <div id="fancy-slider"></div>
    </form>

    <div class="slider">
      <ul class="slides">
        <li>
          <img src="https://loremflickr.com/640/480/city?lock=1"> <!-- random image -->
          <div class="caption center-align">
            <h3>This is our big Tagline!</h3>
            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
            <p>Some text</p>
          </div>
        </li>
        <li class="active">
          <img src="https://loremflickr.com/640/480/city?lock=2">
          <div class="caption left-align">
            <h3>Left Aligned Caption</h3>
            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
            <p>Some text</p>
          </div>
        </li>
        <li>
          <img src="https://loremflickr.com/640/480/city?lock=3">
          <div class="caption right-align">
            <h3>Right Aligned Caption</h3>
            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
            <p>Some text</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import * as noUiSlider from 'materialize-css/extras/noUiSlider/nouislider';
import 'materialize-css/extras/noUiSlider/nouislider.css';
import 'materialize-css/js/slider';

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
      }),
      pips: {
        mode: 'positions',
        values: [0, 25, 50, 75, 100],
        density: 4
      }
    });

    const ranges = document.querySelectorAll('input[type=range]');
    M.Range.init(ranges);

    const slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {});
  }
}
</script>

<style scoped>
input[type=range],
#fancy-slider {
  width: 500px;
  margin-bottom: 48px;
}

.slider {
  width: 480px;
}
</style>