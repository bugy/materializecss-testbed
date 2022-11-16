<template>
  <div>
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
      <li class="no-padding">
        <ul class="collapsible collapsible-accordion">
          <li>
            <a class="collapsible-header">Dropdown<i class="material-icons">arrow_drop_down</i></a>
            <div class="collapsible-body">
              <ul>
                <li><a href="#!">First</a></li>
                <li class="active"><a href="#!">Second</a></li>
                <li><a href="#!">Third</a></li>
                <li><a href="#!">Fourth</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import 'materialize-css/js/collapsible';

export default {
  name: 'SidenavSection',
  mounted() {
    const sidenavs = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavs, {});

    const collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible, {});
  }
}
</script>

<style scoped>

</style>