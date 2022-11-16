<template>
  <div>
    <h4 class="header">Modals <a href="https://materializecss.github.io/materialize/modals.html">(docs)</a></h4>

    <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect btn-flat">Agree</a>
      </div>
    </div>

    <a class="waves-effect waves-light btn modal-trigger" href="#modal2">Modal with fixed footer</a>
    <!-- Modal Structure -->
    <div id="modal2" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect btn-flat">Agree</a>
      </div>
    </div>

    <a class="waves-effect waves-light btn modal-trigger" href="#modal3">Modal bottom sheet style</a>

    <!-- Modal Structure -->
    <div id="modal3" class="modal bottom-sheet">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  </div>
</template>

<script>
import 'materialize-css/js/modal';

export default {
  name: 'ModalsSection',
  mounted() {
    const modal1 = document.querySelector('#modal1')
    M.Modal.init(modal1, {})

    const modal2 = document.querySelector('#modal2')
    M.Modal.init(modal2, {})

    const modal3 = document.querySelector('#modal3')
    M.Modal.init(modal3, {})
  }
}
</script>

<style scoped>
.btn {
  margin-left: 16px;
}
</style>