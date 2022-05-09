<template>
  <div id="root">
    <div id="info">
      <h1>Heavy change</h1>
    </div>
    <div ref="hc1" id="hc1"></div>
    <div ref="hc2" id="hc2"></div>
  </div>

</template>

<script>
export default {
  name: "HeavyChange",
  data(){
    return {

    }
  },
  mounted(){
    this.drawChart();
  },
  methods:{
    drawChart() {
      let myChart1 = this.$echarts.init(this.$refs.hc1);
      let option1 = {
        // 鼠标移动到每一item都会显示details
        tooltip:{
          trigger: 'item'
        },
        grid: [{
          left: '1%',
          right: '1%',
          top: '5%',
          bottom: '5%',
          containLabel: true
        }],
        dataZoom: [{
          type: 'inside',
          xAxisIndex: 0,
          filterMode: 'filter',
          bottom: '15%',
          startValue: 0,
          endValue: 49
        }],
        xAxis: {
          type: 'category',
          data: ['', '', '', '', '', '', ''],
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            realtimeSort: true,
            data: [3164, 4200, 3150, 1180, 700, 110, 130],
            type: 'bar'
          }
        ]
      };
      let myChart2 = this.$echarts.init(this.$refs.hc2);
      let option2 = {
        grid: [{
          left: '0%',
          right: '3%',
          top: '7%',
          bottom: '7%',
          containLabel: true
        }],
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
        },
        series: [{

          type: 'line',
          areaStyle: {
            color: '#2ec7c9'
          },
          data: [3164, 4200, 3150, 1180, 700, 110, 130],
          tooltip: {},
          smooth: true
        }]
      };

      myChart1.setOption(option1);
      myChart2.setOption(option2);
    }
  }
}
</script>

<style scoped>
  #root {
    background-color: white;
  }
  #info {
    /*border:3px solid black;*/
    width: 300px;
    padding-left:100px;
    padding-bottom: 10px;
  }
  #hc1 {
    margin-left: 100px;
    /*border: 3px solid black*/
    width: 90%;
    height:400px;
  }

  #hc2 {
    margin-left: 100px;
    /*border: 3px solid black;*/
    width: 90%;
    height: 400px;
  }
</style>