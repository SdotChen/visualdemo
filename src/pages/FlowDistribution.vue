<template>
  <div id="root">
    <div id="info">
      <h1>Flow distribution and entropy</h1>
    </div>
    <div id="fd" ref="fd"></div>
    <div id="entropy" ref="entropy"></div>
    <div id="cardinality" ref="cardinality"></div>
  </div>
</template>

<script>
export default {
  name: "FlowDistribution",
  data() {
    return {

    }
  },
  mounted() {
    this.drawChart();
  },
  methods:{
    drawChart(){
      let myChart1 = this.$echarts.init(this.$refs.fd);
      let myChart2 = this.$echarts.init(this.$refs.entropy);
      let myChart3 = this.$echarts.init(this.$refs.cardinality);

      let option1 = {
        title: {
          text: 'Flow distribution',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          bottom: 10,
          left: 'center',
          data: ['≤20', '≤50', '≤200', '≤500', '≤2K', '>2K']
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: [
              {value:20,name:'≤20'},
              {value:128,name:'≤50'},
              {value:75,name:'≤200'},
              {value:336,name:'≤500'},
              {value:100,name:'≤2K'},
              {value:6,name:'≥2K'}
            ]
          }
        ]
      };
      let option2 = {
        series: [{
          name: 'Entropy',
          type: 'gauge',
          radius: '80%',
          center: ["50%", "55%"],
          detail: {
            formatter: '{value}'
          },
          data: [
            {
              value: 9.66,
              name: 'ENTROPY'
            }
          ]
        }]
      };
      let option3 = {
        series: [{
          name: 'Cardinality',
          type: 'gauge',
          radius: '80%',
          center: ["50%", "55%"],
          detail: {
            formatter: '{value}'
          },
          data: [
            {
              value: 3904,
              name: 'CARDINALITY'
            }
          ]
        }]
      };

      myChart1.setOption(option1);
      myChart2.setOption(option2);
      myChart3.setOption(option3);
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
    width: 500px;
    padding-left:100px;
    padding-bottom: 10px;
  }
  #fd {
    display: inline-block;
    height: 400px;
    width: 40%;
  }
  #entropy {
    display: inline-block;
    height: 400px;
    width:30%;
    /*padding-bottom: 10px;*/
  }
  #cardinality {
    display: inline-block;
    height: 400px;
    width: 30%;
  }
</style>