<template>
  <div id="root">
    <TopBar/>
    <el-divider><i class="el-icon-view"></i></el-divider>
    <CenterArea/>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import CenterArea from "@/components/CenterArea";

export default {
  name: 'App',
  components: {
    TopBar,
    CenterArea
  }
}
</script>

<style>
  body {
    background-color: white;
    /*overflow: scroll;*/
    min-width: 1500px;
  }
</style>
