<template>
  <div id="main-content">
    <div id="display-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContent"
}
</script>

<style scoped>
  #main-content {
    position: fixed;
    display: inline-block;
    width:75%;
    left:23%;
    height: 560px;
    /*！*/
    overflow: scroll;
    /*border: 3px solid black;*/
  }
</style>