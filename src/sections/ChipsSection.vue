<template>
  <div>
    <h4 class="header">Chips <a href="https://materializecss.com/chips.html">(docs)</a></h4>

    <!-- Default with no input (automatically generated)  -->
    <div class="chips default"></div>
    <div class="chips chips-initial"></div>
    <div class="chips chips-placeholder"></div>
    <div class="chips chips-autocomplete"></div>

    <!-- Customizable input  -->
    <div class="chips">
      <input class="custom-class">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChipsSection',
  mounted() {
    const defaultChips = document.querySelectorAll('.chips.default');
    M.Chips.init(defaultChips, {});

    const initialChips = document.querySelectorAll('.chips-initial');
    M.Chips.init(initialChips, {
      data: [{
        tag: 'Apple'
      }, {
        tag: 'Microsoft'
      }, {
        tag: 'Google'
      }]
    });

    const placeholderChips = document.querySelectorAll('.chips-placeholder');
    M.Chips.init(placeholderChips, {
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag'
    });

    const autocompleteChips = document.querySelectorAll('.chips-autocomplete');
    M.Chips.init(autocompleteChips, {
      autocompleteOptions: {
        data: {
          'Apple': null,
          'Microsoft': null,
          'Google': null
        },
        limit: Infinity,
        minLength: 1
      }
    });

  }
}
</script>

<style scoped>

</style>