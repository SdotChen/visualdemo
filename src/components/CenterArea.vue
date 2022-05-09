<template>
  <div id="center-area">
    <SideBar/>
    <MainContent/>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import MainContent from "@/components/MainContent";


export default {
  name: "CenterArea",
  components:{
    SideBar,
    MainContent,
  }
}
</script>

<style scoped>
  #center-area {
    position: fixed;
    display: block;
    width: 100%;
    height: 570px;
    min-width: 1500px;
    /*border:3px solid green;*/
  }
</style>