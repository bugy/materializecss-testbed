<template>
  <div class="select-section">
    <h4 class="header">Select <a href="https://materializecss.com/select.html">(docs)</a></h4>

    <div class="input-field">
      <select class="simple-select">
        <option disabled selected value="">Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
        <option value="6">Option 6</option>
        <option value="7">Option 7</option>
        <option value="8">Option 8</option>
        <option value="9">Option 9</option>
      </select>
      <label>Simple select</label>
    </div>

    <div class="input-field col s12">
      <select>
        <optgroup label="team 1">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </optgroup>
        <optgroup label="team 2">
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
        </optgroup>
      </select>
      <label>Optgroups</label>
    </div>

    <div class="input-field">
      <input id="autocomplete-input" class="autocomplete" type="text">
      <label for="autocomplete-input">Autocomplete</label>
    </div>

  </div>

</template>

<script>
export default {
  name: 'SelectSection',
  mounted() {
    const simpleSelects = document.querySelectorAll('.select-section select');
    M.FormSelect.init(simpleSelects);

    const autocompletes = document.querySelectorAll('.autocomplete');
    M.Autocomplete.init(autocompletes, {
      data: {
        'Apples': null,
        'Oranges': null,
        'Bananas': null
      }, minLength: 0
    });
  }
}

</script>

<style scoped>

</style>