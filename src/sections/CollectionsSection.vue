<template>
  <div class="badges-section">
    <h4 class="header">Collections + badges
      <a href="https://materializecss.com/badges.html">(badges docs)</a>
      + <a href="https://materializecss.com/collections.html">(collection docs)</a>
    </h4>

    <div class="badges-content">
      <div class="collection">
        <a class="collection-item" href="#!"><span class="badge">1</span>Alan</a>
        <a class="collection-item" href="#!"><span class="new badge">4</span>Alan</a>
        <a class="collection-item active" href="#!">Alan<a class="secondary-content" href="#!"><i
            class="material-icons">send</i></a></a>
        <a class="collection-item" href="#!"><span class="badge">14</span>Alan</a>
      </div>

      <ul class="collection with-header">
        <li class="collection-header"><h4>First Names</h4></li>
        <li class="collection-item avatar">
          <img src="https://loremflickr.com/32/32/dog" alt="" class="circle">
          <span class="title">Title</span>
          <p>First Line <br>
            Second Line
          </p>
          <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
        <li class="collection-item avatar">
          <i class="material-icons circle">folder</i>
          <span class="title">Title</span>
          <p>First Line <br>
            Second Line
          </p>
          <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'BadgesSection'
}
</script>

<style scoped>
.badges-content {
  display: flex;
  align-items: flex-start;
}

.collection {
  width: 500px;
}

.collection:not(:first-child) {
  margin-left: 32px;
}
</style>