<template>
  <div class="switch theme-switch">
    <label>
      Light
      <input v-model="darkEnabled" checked type="checkbox">
      <span class="lever"></span>
      Dark
    </label>
  </div>
</template>

<script>
export default {
  name: 'ThemeSwitch',
  data() {
    return {
      darkEnabled: false
    }
  },
  watch: {
    darkEnabled(newValue) {
      if (newValue) {
        document.documentElement.setAttribute('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('theme');
      }
    }
  }
}
</script>

<style scoped>
.theme-switch {
  position: fixed;
  top: 88px;
  right: 24px;
}
</style>