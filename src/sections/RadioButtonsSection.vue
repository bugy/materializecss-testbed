<template>
  <form action="#">
    <h4 class="header">Radiobuttons <a href="https://materializecss.com/radio-buttons.html">(docs)</a></h4>

    <p>
      <label>
        <input name="group1" type="radio" checked/>
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio"/>
        <span>Yellow</span>
      </label>
    </p>
    <p>
      <label>
        <input class="with-gap" name="group1" type="radio"/>
        <span>Green</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" disabled="disabled"/>
        <span>Brown</span>
      </label>
    </p>
  </form>
</template>

<script>
export default {
  name: 'RadioButtonsSection'
}
</script>

<style scoped>

</style>