<template>
  <div id="header">
    <div class="header-content">
      <div id="title">
        Demo v1.1
      </div>
      <div id="option">
        <el-radio-group v-model="radio">
          <el-radio-button label="Interval"></el-radio-button>
          <el-radio-button label="period"></el-radio-button>
        </el-radio-group>
      </div>
      <div id="intervalProfile">
        <template>
          <el-radio-group v-model="intervalSecond">
            <el-radio :label="5">5s</el-radio>
            <el-radio :label="10">10s</el-radio>
            <el-radio :label="30">30s</el-radio>
          </el-radio-group>
        </template>
      </div>
      <div id="periodProfile">
        <div id="periodStart">
          <el-date-picker
              v-model="startTime"
              type="datetime"
              placeholder="选择开始时间"
              default-time="12:00:00">
          </el-date-picker>
        </div>
        <div id="periodEnd">
          <el-date-picker
              v-model="endTime"
              type="datetime"
              placeholder="选择结束时间"
              default-time="12:00:00">
          </el-date-picker>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "TopBar",
  data(){
    return {
      radio:'Interval',//当前模式，默认为隔几秒刷新一次
      intervalSecond:5,//默认隔5秒
      startTime:'',//固定开始时间
      endTime:'',//固定结束时间
    };
  }
}
</script>

<style scoped>
  #header {
    display: block;
    height: 60px;
    width: 1500px;
    background-color: #fff;
    position: relative;
    /*min-width: 1500px;*/
    /*border: 3px solid black;*/
  }
  .header-content {
    display: block;
  }

  #title {
    margin-left: 120px;
    display: inline-block;
    font-size: 40px;
    line-height: 80px;
    height:100px;
    /*border: 1px solid black;*/
  }

  #option {
    margin-left:150px;
    display: inline-block;
  }

  #intervalProfile {
    margin-left: 60px;
    display: inline-block;
  }

  #periodProfile {
    margin-left: 60px;
    display: inline-block;
  }

  #periodStart {
    display: inline-block;
  }

  #periodEnd {
    display: inline-block;
    padding-left: 10px;
  }
</style>