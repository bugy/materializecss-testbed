<template>
  <div class="buttons-block">
    <h4 class="header">Buttons <a href="https://materializecss.com/buttons.html">(docs)</a></h4>
    <a class="waves-effect waves-light btn">button</a>
    <a class="btn-floating btn-large waves-effect waves-light"><i class="material-icons">add</i></a>
    <a class="waves-effect waves-teal btn-flat">Button</a>
    <a class="btn disabled">Button</a>

    <div class="fixed-action-btn toolbar direction-top" style="transition: transform 0.2s ease 0s; transform: translate3d(0px, 0px, 0px);">
      <a class="btn-floating btn-large" style="transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s; transform: translate3d(0px, 0px, 0px);">
        <i class="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li class="waves-effect waves-light"><a href="#!" style=""><i class="material-icons">insert_chart</i></a></li>
        <li class="waves-effect waves-light"><a href="#!" style=""><i class="material-icons">format_quote</i></a></li>
        <li class="waves-effect waves-light"><a href="#!" style=""><i class="material-icons">publish</i></a></li>
        <li class="waves-effect waves-light"><a href="#!" style=""><i class="material-icons">attach_file</i></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonsSection',
  mounted() {
    const fixedActionButton = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fixedActionButton, {
      toolbarEnabled: true
    });
  }
}
</script>

<style scoped>
.buttons-block a {
  margin-right: 36px;
}

.fixed-action-btn {
  /*position: relative;*/
}
</style>