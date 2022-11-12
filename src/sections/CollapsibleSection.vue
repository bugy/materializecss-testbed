<template>
  <div class="collapsible-section">
    <div>
      <ul class="collapsible collapsible-normal">
        <li>
          <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
          <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
          <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
          <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
        <li>
          <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
          <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
        </li>
      </ul>
    </div>

    <ul class="collapsible popout">
      <li>
        <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
        <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
    </ul>
  </div>
</template>

<script>
import 'materialize-css/js/collapsible';

export default {
  name: 'CollapsibleSection',
  mounted() {
    const collapsibleNormal = document.querySelectorAll('.collapsible-normal');
    M.Collapsible.init(collapsibleNormal, {});

    const collapsiblePopout = document.querySelectorAll('.collapsible.popout');
    M.Collapsible.init(collapsiblePopout, {});
  }
}
</script>

<style scoped>
.collapsible {
  margin: 16px;
  width: 400px;
}

.collapsible-section {
  display: flex;
}
</style>