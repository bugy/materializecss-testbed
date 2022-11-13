<template>
  <div>
    <h4 class="header">Date and Time pickers <a href="https://material.io/components/time-pickers">(docs)</a></h4>
    <div class="date-time-pickers-content">
      <div>
        <input class="timepicker" type="text">
      </div>
      <div>
        <input type="text" class="datepicker">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DateAndTimePickersSection',
  mounted() {
    const timePickers = document.querySelectorAll('.timepicker');
    M.Timepicker.init(timePickers, {});

    const datepickers = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepickers, {
      minDate: new Date()
    });
  }
}
</script>

<style scoped>
.date-time-pickers-content {
  display: flex;
  align-items: flex-start;
}

.date-time-pickers-content > input {
  width: 300px;
}

.date-time-pickers-content > div:not(:first-child) {
  margin-left: 32px;
}
</style>