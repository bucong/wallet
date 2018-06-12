<template>
    <div class="peers">
      <h3 class="title">{{ $t("peers.title") }}</h3>
      <peerTable :tableData="peerData"></peerTable>
    </div>
</template>

<script>
import peerTable from '../../components/peerTable'
export default {
  name: "peers",
  data(){
    return {
      peerData: [{
        ip: '101.200.220.254',
        port: '8080',
        hostName: '221.253.231.103.static.pacdns.com',
        status: '1',
        version: '0.9.12',
        platform: 'Linux',
        height: '5664408'
      },{
        ip: '101.200.220.254',
        port: '8080',
        hostName: '221.253.231.103.static.pacdns.com',
        status: '0',
        version: '0.9.12',
        platform: 'Linux',
        height: '5664408'
      },{
        ip: '101.200.220.254',
        port: '8080',
        hostName: '221.253.231.103.static.pacdns.com',
        status: '1',
        version: '0.9.12',
        platform: 'Linux',
        height: '5664408'
      },{
        ip: '101.200.220.254',
        port: '8080',
        hostName: '221.253.231.103.static.pacdns.com',
        status: '0',
        version: '0.9.12',
        platform: 'Linux',
        height: '5664408'
      },{
        ip: '101.200.220.254',
        port: '8080',
        hostName: '221.253.231.103.static.pacdns.com',
        status: '1',
        version: '0.9.12',
        platform: 'Linux',
        height: '5664408'
      },{
        ip: '101.200.220.254',
        port: '8080',
        hostName: '221.253.231.103.static.pacdns.com',
        status: '0',
        version: '0.9.12',
        platform: 'Linux',
        height: '5664408'
      },{
        ip: '101.200.220.254',
        port: '8080',
        hostName: '221.253.231.103.static.pacdns.com',
        status: '1',
        version: '0.9.12',
        platform: 'Linux',
        height: '5664408'
      }]
    }
  },
  created: {
    //获取后台展示数据
  },
  components:{
    peerTable
  }
}
</script>

<style scoped>

</style>
