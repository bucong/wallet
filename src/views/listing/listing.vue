<template>
    <div class="listing">
      <h3>{{ $t("listing.title") }}</h3>
      <div class="table">
        <blockTable :tableData="blockData"></blockTable>
        <pagination @pageChange="getPageData"></pagination>
      </div>
    </div>
</template>

<script>
import blockTable from '../../components/blockTable'
import pagination from '../../components/pagination'
export default {
  name: "listing",
  data() {
    return {
      blockData: [{
        id: '6421980538sdsad',
        height: '596356',
        time: '2018/01/13 17:44:47',
        transcation: '0',
        generatedBy: 'HTRoad',
        amount: '499.12345678',
        forged: '4.1'
      },{
        id: '6421980538sdsad',
        height: '596356',
        time: '2018/01/13 17:44:47',
        transcation: '0',
        generatedBy: 'HTRoad',
        amount: '499.12345678',
        forged: '4.1'
      },{
        id: '6421980538sdsad',
        height: '596356',
        time: '2018/01/13 17:44:47',
        transcation: '0',
        generatedBy: 'HTRoad',
        amount: '499.12345678',
        forged: '4.1'
      }]
    }
  },
  methods: {
    getPageData(val){
      console.log('接收到的分页：'+val)
    }
  },
  components:{
    blockTable,
    pagination
  }
}
</script>

<style scoped>

</style>
