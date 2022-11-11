<template>
  <div>
    <h4 class="header">Time picker <a href="https://material.io/components/time-pickers">(docs)</a></h4>
    <input class="timepicker" type="text">
  </div>
</template>

<script>
export default {
  name: 'TimePickerSection',
  mounted() {
    const timePickers = document.querySelectorAll('.timepicker');
    M.Timepicker.init(timePickers, {});
  }
}
</script>

<style scoped>
input.timepicker {
  width: 300px;
}
</style>