<template>
  <div class="test-app">
    <div class="block buttons-block">
      <h1>Buttons <a href="https://materializecss.com/buttons.html">(docs)</a></h1>
      <a class="waves-effect waves-light btn">button</a>
      <a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">add</i></a>
      <a class="waves-effect waves-teal btn-flat">Button</a>
      <a class="btn disabled">Button</a>
    </div>


    <div class="block">
      <h1>Dropdown <a href="https://material.io/components/lists">(docs)</a></h1>

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

    <div class="block">
      <h1>Sidenav</h1>
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
      <a class="sidenav-trigger" data-target="slide-out" href="#"><i class="material-icons">menu</i></a>
    </div>

    <div class="block">
      <h1>Tabs <a href="https://material.io/components/tabs">(docs)</a></h1>
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

    <div class="block">
      <h1>Time picker <a href="https://material.io/components/time-pickers">(docs)</a></h1>
      <input class="timepicker" type="text">
    </div>


    <div class="block">
      <h1>Slider / range <a href="https://material.io/components/sliders">(docs)</a></h1>
      <form action="#">
        <p class="range-field">
          <input id="test5" max="100" min="0" type="range"/>
        </p>
      </form>
    </div>

    <div class="block">
      <h1>Switches <a href="https://material.io/components/selection-controls#switches">(docs)</a></h1>
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


  </div>

</template>

<script>
export default {
  name: "TestApp",
  mounted: function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});

    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    var elems = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(elems, {});

    var elems = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(elems, {});


  },
}
</script>

<style scoped>
.block {
  border-top: 2px solid lightgray;
  padding: 16px;
  padding-bottom: 40px;
}

.block h1 {
  font-size: 30px;
  margin-top: 16px;
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
</style>