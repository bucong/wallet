<template>
  <div class="vote">
    <h3 class="title">{{ $t("vote.title") }}</h3>
    <div class="vote-view flex">
      <div @click="showVote">
        <img src="/static/img/password-see1.png" alt="">
        {{ $t("vote.view.prompt") }} (<span>0</span>/33)
      </div>
      <button @click="confirmVote">{{ $t("vote.view.btn") }}</button>
    </div>
    <div class="search">
      <div class="search-input">
        <input type="text" :placeholder="$t('vote.search.placeholder')" />
      </div>
      <div class="result" v-show="searchList.length > 0">
        <h5><span>3</span> {{ $t("vote.search.result") }}</h5>
        <searchTable :tableData="searchList" @handleSelectionChange="searchSelect"></searchTable>
      </div>
    </div>
    <div class="vote-data">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="$t('vote.voteData.delegates.tab')" name="first">
          <h4>{{ $t("vote.voteData.all") }} 544 {{ $t("vote.voteData.delegates.unit") }}</h4>
          <delegatesTable :tableData="delegatesData"></delegatesTable>
          <pagination @pageChange="getPageData"></pagination>
        </el-tab-pane>
        <el-tab-pane :label="$t('vote.voteData.record.tab')" name="second">
          <h4>{{ $t("vote.voteData.all") }} {{ recordData.length }} {{ $t("vote.voteData.record.unit") }}</h4>
          <recordTable :tableData="recordData"></recordTable>
        </el-tab-pane>
        <el-tab-pane :label="$t('vote.voteData.voters.tab')" name="third">
          <h4>{{ $t("vote.voteData.all") }} {{ votersData.length }} {{ $t("vote.voteData.voters.unit") }}</h4>
          <votersTable :tableData="votersData"></votersTable>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog width="700px" :visible.sync="seeSelect" class="select-model">
      <h5>{{ $t("vote.view.seeTitle") }} (<span>7</span>/33)</h5>
      <voteViewTable :tableData="chooseData" @deleteRow="deleteSelect"></voteViewTable>
    </el-dialog>
    <el-dialog width="700px" :visible.sync="confirmSelect" class="select-model">
      <h5>{{ $t("vote.view.confirmTitle") }} (<span>7</span>/33)</h5>
      <p>{{ $t("vote.view.confirmPrompt") }}</p>
      <voteConfirmTable :tableData="chooseData"></voteConfirmTable>
      <div slot="footer" class="dialog-footer">
        <span class="spend">{{ $t("delegate.register.spend") }}</span>
        <el-button @click="confirmSelect = false">{{ $t("vote.view.cancel") }}</el-button>
        <el-button type="primary" @click="confirmSelect = false">{{ $t("vote.view.confirm") }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import searchTable from '../../components/searchTable'
import pagination from '../../components/pagination'
import delegatesTable from '../../components/delegatesTable'
import recordTable from '../../components/recordTable'
import votersTable from '../../components/votersTable'
import voteViewTable from '../../components/voteViewTable'
import voteConfirmTable from '../../components/voteConfirmTable'
export default {
  name: "vote",
  data(){
    return {
      searchList: [{
        name: 'seatrips',
        address: '2675385658327038858S'
      }, {
        name: 'seatrips1',
        address: '2675385658327038858S'
      }, {
        name: 'seatrips2',
        address: '2675385658327038858S'
      }], //搜索结果列表
      activeName: 'first',
      delegatesData: [{
        rank: '1',
        name: 'fiaifdsaj',
        address: '138721043174121324',
        productivity: '99.78%',
        forgedBlocks: '87809',
        approval: '18.1%'
      },{
        rank: '1',
        name: 'fiaifdsaj',
        address: '138721043174121324',
        productivity: '99.78%',
        forgedBlocks: '87809',
        approval: '18.1%'
      },{
        rank: '1',
        name: 'fiaifdsaj',
        address: '138721043174121324',
        productivity: '99.78%',
        forgedBlocks: '87809',
        approval: '18.1%'
      }], //所有数据
      recordData: [{
        rank: '1',
        name: 'fiaifdsaj',
        address: '138721043174121324',
        productivity: '99.78%',
        forgedBlocks: '87809',
        approval: '18.1%'
      },{
        rank: '1',
        name: 'fiaifdsaj',
        address: '138721043174121324',
        productivity: '99.78%',
        forgedBlocks: '87809',
        approval: '18.1%'
      },{
        rank: '1',
        name: 'fiaifdsaj',
        address: '138721043174121324',
        productivity: '99.78%',
        forgedBlocks: '87809',
        approval: '18.1%'
      }], //投票记录
      votersData: [{
        name: 'jofajfl',
        address: 'fhislhfkeruhvkzdnvjdksvkjdznzbdfhbvfjk',
        percentage: '18.6%'
      },{
        name: 'jofajfl',
        address: 'fhislhfkeruhvkzdnvjdksvkjdznzbdfhbvfjk',
        percentage: '18.6%'
      },{
        name: 'jofajfl',
        address: 'fhislhfkeruhvkzdnvjdksvkjdznzbdfhbvfjk',
        percentage: '18.6%'
      }], //投票数据
      chooseData: [],
      seeSelect: false, //查看投票模态框
      confirmSelect: false //确认投票模态框
    }
  },
  methods:{
    searchSelect(val){
      this.chooseData = val;
    },
    getPageData(val){
      console.log('接收到的分页：'+val)
    },
    deleteSelect(index, rows){
      rows.splice(index, 1);
    },
    showVote(){
      this.seeSelect = true;
    },
    confirmVote(){
      this.confirmSelect = true;
    }
  },
  components:{
    searchTable,
    pagination,
    delegatesTable,
    recordTable,
    votersTable,
    voteViewTable,
    voteConfirmTable
  }
}
</script>

<style scoped>

</style>
