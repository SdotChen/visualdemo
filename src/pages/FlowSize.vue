<template>
  <div id="root">
    <div id="info">
      <h1>Flow size</h1>
    </div>
    <div id="table">
      <el-table
          :data="tableData"
          style="width: 100%"
          height="400px"
          border
      >
        <el-table-column
            prop="srcIP"
            label="源IP地址"
            sortable
            width="200">
        </el-table-column>
        <el-table-column
            prop="srcPort"
            label="源端口"
            sortable
            width="150">
        </el-table-column>
        <el-table-column
            prop="dstIP"
            label="目的IP地址"
            sortable
            width="200">
        </el-table-column>
        <el-table-column
            prop="dstPort"
            label="目的端口"
            sortable
            width="150">
        </el-table-column>
        <el-table-column
            prop="protocol"
            label="传输层协议"
            sortable
            width="150">
        </el-table-column>
        <el-table-column
            prop="estimatedFlows"
            label="估计流量"
            sortable
            width="200">
        </el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
export default {
  name: "FlowSize",
  data() {
    return {
      tableData:[
          {
            srcIP: '192.168.1.8',
            dstIP: '192.168.1.7',
            srcPort: 1,
            dstPort: 4753,
            protocol: 6,
            estimatedFlows: 100333
          },
          {
            srcIP: '192.168.1.6',
            dstIP: '192.168.1.9',
            srcPort: 3,
            dstPort: 33333,
            protocol: 6,
            estimatedFlows: 21333
          },
          {
            srcIP: '192.168.1.8',
            dstIP: '192.168.1.7',
            srcPort: 1,
            dstPort: 4753,
            protocol: 6,
            estimatedFlows: 200333
          },
          {
            srcIP: '192.168.1.8',
            dstIP: '192.168.1.7',
            srcPort: 3,
            dstPort: 47153,
            protocol: 6,
            estimatedFlows: 22333
          },
          {
            srcIP: '192.168.1.8',
            dstIP: '192.168.1.7',
            srcPort: 1,
            dstPort: 44753,
            protocol: 6,
            estimatedFlows: 1233
          },
          {
            srcIP: '192.168.1.8',
            dstIP: '192.168.1.7',
            srcPort: 1,
            dstPort: 4753,
            protocol: 6,
            estimatedFlows: 200333
          },
          {
            srcIP: '192.168.1.8',
            dstIP: '192.168.1.7',
            srcPort: 1,
            dstPort: 4753,
            protocol: 6,
            estimatedFlows: 200333
          },
          {
            srcIP: '192.168.1.8',
            dstIP: '192.168.1.7',
            srcPort: 1,
            dstPort: 4753,
            protocol: 6,
            estimatedFlows: 200333
          }
          ]
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
  #table {
    padding-left: 100px;
  }
</style>