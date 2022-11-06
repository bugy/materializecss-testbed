<template>
  <div class="test-app">

    <nav>
      <div class="nav-wrapper">
        <div class="header"></div>
        <a class="brand-logo" href="#">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li class="active"><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>

    <div class="block">
      <h4 class="header">Table of content + scrollspy <a href="https://materializecss.com/scrollspy.html">(docs)</a>
      </h4>
      <ul class="section table-of-contents" style="padding-top: 0">
        <li><a href="#buttons">Buttons</a></li>
        <li><a href="#dropdown-block">Dropdown</a></li>
        <li><a href="#select-block">Select</a></li>
        <li><a href="#sidenav">Sidenav</a></li>
        <li><a href="#tabs">Tabs</a></li>
        <li><a href="#time-picker">Time picker</a></li>
        <li><a href="#slider">Slider</a></li>
        <li><a href="#switches">Switches</a></li>
        <li><a href="#checkboxes">Checkboxes</a></li>
        <li><a href="#badges">Badges</a></li>
        <li><a href="#pagination">Pagination</a></li>
        <li><a href="#breadcrumbs">Breadcrumbs</a></li>
      </ul>
    </div>

    <div id="buttons" class="block buttons-block section scrollspy">
      <h4 class="header">Buttons <a href="https://materializecss.com/buttons.html">(docs)</a></h4>
      <a class="waves-effect waves-light btn">button</a>
      <a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">add</i></a>
      <a class="waves-effect waves-teal btn-flat">Button</a>
      <a class="btn disabled">Button</a>
    </div>


    <div id="dropdown-block" class="block section scrollspy">
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

    <div id="select-block" class="block section scrollspy">
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

      <div class="input-field">
        <input id="autocomplete-input" class="autocomplete" type="text">
        <label for="autocomplete-input">Autocomplete</label>
      </div>

    </div>

    <div id="sidenav" class="block section scrollspy">
      <h4 class="header">Sidenav</h4>
      <a class="sidenav-trigger" data-target="slide-out" href="#"><i class="material-icons">menu</i></a>
      <ul id="slide-out" class="sidenav">
        <li>
          <div class="user-view">
            <div class="background">
              <img src="images/office.jpg">
            </div>
            <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
            <a href="#name"><span class="white-text name">John Doe</span></a>
            <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
          </div>
        </li>
        <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a class="btn" href="#!">Some button</a></li>
        <li>
          <div class="divider"></div>
        </li>
        <li><a class="subheader">Subheader</a></li>
        <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
    </div>

    <div id="tabs" class="block section scrollspy">
      <h4 class="header">Tabs <a href="https://material.io/components/tabs">(docs)</a></h4>
      <div class="row">
        <div class="col s4">
          <ul class="tabs z-depth-1">
            <li class="tab col s3"><a href="#">Test 1</a></li>
            <li class="tab col s3"><a class="active" href="#">Test 2</a></li>
            <li class="tab col s3 disabled"><a href="#">Disabled Tab</a></li>
            <li class="tab col s3"><a href="#">Test 4</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div id="time-picker" class="block section scrollspy">
      <h4 class="header">Time picker <a href="https://material.io/components/time-pickers">(docs)</a></h4>
      <input class="timepicker" type="text">
    </div>


    <div id="slider" class="block section scrollspy">
      <h4 class="header">Slider / range <a href="https://material.io/components/sliders">(docs)</a></h4>
      <form action="#">
        <p class="range-field">
          <input id="test5" max="100" min="0" type="range"/>
        </p>
      </form>
    </div>

    <div id="switches" class="block section scrollspy">
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

    <div id="checkboxes" class="block section scrollspy">
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

    <div id="badges" class="block section scrollspy">
      <h4 class="header">Badges <a href="https://materializecss.com/badges.html">(docs)</a></h4>

      <div class="collection">
        <a class="collection-item" href="#!"><span class="badge">1</span>Alan</a>
        <a class="collection-item" href="#!"><span class="new badge">4</span>Alan</a>
        <a class="collection-item" href="#!">Alan<a class="secondary-content" href="#!"><i
            class="material-icons">send</i></a></a>
        <a class="collection-item" href="#!"><span class="badge">14</span>Alan</a>
      </div>
    </div>

    <div id="pagination" class="block section scrollspy">
      <h4 class="header">Pagination <a href="https://materializecss.com/pagination.html">(docs)</a></h4>

      <ul class="pagination">
        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
        <li class="active"><a href="#!">1</a></li>
        <li class="waves-effect"><a href="#!">2</a></li>
        <li class="waves-effect"><a href="#!">3</a></li>
        <li class="waves-effect"><a href="#!">4</a></li>
        <li class="waves-effect"><a href="#!">5</a></li>
        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
      </ul>
    </div>

    <div id="breadcrumbs" class="block section scrollspy">
      <h4 class="header">Breadcrumbs <a href="https://materializecss.com/breadcrumbs.html">(docs)</a></h4>

      <nav>
        <div class="nav-wrapper">
          <div class="col s12">
            <a class="breadcrumb" href="#!">First</a>
            <a class="breadcrumb" href="#!">Second</a>
            <a class="breadcrumb" href="#!">Third</a>
          </div>
        </div>
      </nav>
    </div>

    <div id="cards" class="block section scrollspy">
      <h4 class="header">Cards <a href="https://materializecss.com/cards.html">(docs)</a></h4>

      <div class="row">
        <div class="col s12 m6">
          <div class="card darken-1">
            <div class="card-content">
              <span class="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ThemeSwitch/>

  </div>

</template>

<script>
import ThemeSwitch from '@/ThemeSwitch'
import cssVars from 'css-vars-ponyfill'

cssVars({
  onlyLegacy: true
})

export default {
  name: 'TestApp',
  components: {ThemeSwitch},
  mounted: function () {
    const simpleSelects = document.querySelectorAll('.simple-select');
    M.FormSelect.init(simpleSelects);

    const autocompletes = document.querySelectorAll('.autocomplete');
    M.Autocomplete.init(autocompletes, {
      data: {
        'Apples': null,
        'Oranges': null,
        'Bananas': null
      }, minLength: 0
    });

    const dropdownTriggers = cash('.btn.dropdown-trigger');
    M.Dropdown.init(dropdownTriggers, {});

    const sidenavs = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavs, {});

    const tabs = document.querySelectorAll('.tabs');
    M.Tabs.init(tabs, {});

    const timePickers = document.querySelectorAll('.timepicker');
    M.Timepicker.init(timePickers, {});

    M.updateTextFields();

    const scrollspies = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspies, {});

    document.querySelector('#indeterminate-checkbox').indeterminate = true
  }
}
</script>

<style scoped>
.block {
  border-top: 2px solid var(--separator-color);
  padding: 16px;
  padding-bottom: 40px;
}

.block h4 {
  margin-top: 32px;
  margin-bottom: 32px;
}

.buttons-block a {
  margin-right: 36px;
}

input.timepicker {
  width: 300px;
}

input[type=range] {
  width: 500px;
}

.switch {
  margin-bottom: 16px;
}

.theme-switch {
  position: absolute;
  top: 88px;
  right: 24px;
}
</style>