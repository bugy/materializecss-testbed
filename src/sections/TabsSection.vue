<template>
  <div>
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
    <div class="row">
      <div class="col s4">
        <ul class="tabs z-depth-1 tabs-transparent" style="background-color: green">
          <li class="tab col s3"><a href="#">Test 1</a></li>
          <li class="tab col s3"><a class="active" href="#">Test 2</a></li>
          <li class="tab col s3 disabled"><a href="#">Disabled Tab</a></li>
          <li class="tab col s3"><a href="#">Test 4</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsSection',
  mounted() {
    const normalTabs = document.querySelectorAll('.tabs');
    M.Tabs.init(normalTabs, {});
    const transparentTabs = document.querySelectorAll('.tabs.tabs-transparent');
    M.Tabs.init(transparentTabs, {});
  }
}
</script>

<style scoped>

</style>