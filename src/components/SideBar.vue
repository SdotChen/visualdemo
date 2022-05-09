<template>
  <div id="side-bar">
    <div id="box">
      <div id="info">
        <div id="icon">
          <i class="el-icon-menu"></i>
        </div>
        <div id="menu-claim">
          <span>Menu</span>
        </div>
      </div>
      <div id="menu">
        <!--        background-color="#545c64"-->
        <!--        text-color="#fff"-->
        <!--        active-text-color="#ffd04b"-->
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="vertical"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <router-link to="/FlowSize" class="list-class" active-class="list-class-active">
              Flow size
            </router-link>
          </el-menu-item>
<!--          <div class="gap"></div>-->
          <el-menu-item index="2">
            <router-link to="HeavyHitter" class="list-class" active-class="list-class-active">
              Heavy hitter
            </router-link>
          </el-menu-item>
<!--          <div class="gap"></div>-->
          <el-menu-item index="3">
            <router-link to="HeavyChange" class="list-class" active-class="list-class-active">
              Heavy change
            </router-link>
          </el-menu-item>
<!--          <div class="gap"></div>-->
          <el-menu-item index="4">
            <router-link to="FlowDistribution" class="list-class" active-class="list-class-active">
              Flow distribution
            </router-link>
          </el-menu-item>
<!--          <div class="gap"></div>-->
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      activeIndex:'1',
    }
  },
  methods: {
    handleSelect(key,keyPath) {
      console.log(key,keyPath)
    }
  }
}
</script>

<style scoped>
  #side-bar {
    position: fixed;
    display: inline-block;
    background-color: white;
    width: 15%;
    height: 500px;
    /*border: 3px solid black;*/
    padding-top: 60px;
    padding-left: 5%;
  }
  #info {
    font-size: 40px;
    padding-bottom: 60px;
  }
    #icon {
      display: inline;
      padding-left: 10px;
      color: gray;
    }
    #menu-claim {
      display: inline;
      padding-left: 50px;
      color: gray;
    }
  /*#menu {*/
  /*  border: 5px solid black;*/
  /*  background-color: yellow;*/
  /*}*/
  /*.gap {*/
  /*  width: 300px;*/
  /*  height: 10px;*/
  /*  background-color: white;*/
  /*}*/
  .list-class {
    color:white;
    text-decoration: none;
  }
  .list-class-active {
    color: orange;
  }
</style>