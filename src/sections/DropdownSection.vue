<template>
  <div class="">
    <h4 class="header">Dropdown <a href="https://material.io/components/lists">(docs)</a></h4>

    <!-- Dropdown Trigger -->
    <a class='dropdown-trigger btn' data-target='dropdown1' href='#'>Drop Me!</a>

    <!-- Dropdown Structure -->
    <ul id='dropdown1' class='dropdown-content'>
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider" tabindex="-1"></li>
      <li><a href="#!">three</a></li>
      <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
      <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropdownSection',
  mounted() {
    const dropdownTriggers = cash('.btn.dropdown-trigger');
    M.Dropdown.init(dropdownTriggers, {});
  }
}
</script>

<style scoped>

</style>