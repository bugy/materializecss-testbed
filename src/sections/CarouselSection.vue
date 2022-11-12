<template>
  <div class="carousel">
    <h4 class="header">Carousel <a href="https://materializecss.com/carousel.html">(docs)</a></h4>

    <a class="carousel-item" href="#one!"><img src="https://loremflickr.com/320/240/dog?lock=1"></a>
    <a class="carousel-item" href="#two!"><img src="https://loremflickr.com/320/240/dog?lock=2"></a>
    <a class="carousel-item" href="#three!"><img src="https://loremflickr.com/320/240/dog?lock=3"></a>
    <a class="carousel-item" href="#four!"><img src="https://loremflickr.com/320/240/dog?lock=4"></a>
    <a class="carousel-item" href="#five!"><img src="https://loremflickr.com/320/240/dog?lock=5"></a>
  </div>
</template>

<script>
import 'materialize-css/js/carousel';

export default {
  name: 'CarouselSection',
  mounted() {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      indicators: true
    });
  }
}
</script>

<style scoped>

</style>