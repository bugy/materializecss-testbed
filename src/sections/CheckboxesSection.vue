<template>
  <div>
    <h4 class="header">Checkboxes <a
        href="https://materializecss.com/checkboxes.htmlhttps://materializecss.com/checkboxes.html">(docs)</a></h4>
    <p>
      <label>
        <input type="checkbox"/>
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input checked="checked" type="checkbox"/>
        <span>Yellow</span>
      </label>
    </p>
    <p>
      <label>
        <input checked="checked" class="filled-in" type="checkbox"/>
        <span>Filled in</span>
      </label>
    </p>
    <p>
      <label>
        <input id="indeterminate-checkbox" type="checkbox"/>
        <span>Indeterminate Style</span>
      </label>
    </p>
    <p>
      <label>
        <input checked="checked" disabled="disabled" type="checkbox"/>
        <span>Checked disabled</span>
      </label>
    </p>
    <p>
      <label>
        <input disabled="disabled" type="checkbox"/>
        <span>Disabled</span>
      </label>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CheckboxesSection',
  mounted() {
    document.querySelector('#indeterminate-checkbox').indeterminate = true
  }
}
</script>

<style scoped>

</style>