<template>
  <div>
    <h4 class="header">Switches <a href="https://material.io/components/selection-controls#switches">(docs)</a></h4>
    <div class="switch">
      <label>
        Off
        <input type="checkbox">
        <span class="lever"></span>
        On
      </label>
    </div>
    <div class="switch">
      <label>
        Off
        <input checked disabled type="checkbox">
        <span class="lever"></span>
        On
      </label>
    </div>

    <div class="switch">
      <label>
        Off
        <input disabled type="checkbox">
        <span class="lever"></span>
        On
      </label>
    </div>
  </div>

</template>

<script>
export default {
  name: 'SwitchesSection'
}
</script>

<style scoped>
.switch {
  margin-bottom: 16px;
}
</style>