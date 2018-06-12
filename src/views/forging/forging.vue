<template>
  <div class="forging">
    <h3 class="title">{{ $t("delegate.title1") }}</h3>
    <div class="no-delegate" v-show="!isDelegate">
      <img src="/static/img/no-delegate.png" alt="">
      <p>{{ $t("delegate.noDelegate.prompt") }}</p>
      <button @click="dialogFormVisible = true">{{ $t("delegate.noDelegate.registerBtn") }}</button>
    </div>
    <div class="delegate-info" v-show="isDelegate">
      <ul class="base-info">
        <li class="flex"><span class="name">{{ $t("delegate.info.name") }}</span><span>HTRoad</span></li>
        <li class="flex"><span class="name">{{ $t("delegate.info.address") }}</span><span>A75e5skuvKeXHiL9PZU4hxDfqUHYSctcHw</span></li>
      </ul>
      <h3 class="title">{{ $t("delegate.title2") }}</h3>
      <ul class="forging-info flex">
        <li>
          <h5>{{ $t("delegate.forging.name1") }}</h5>
          <div>
            <span>4.56000</span>
          </div>
        </li>
        <li>
          <h5>{{ $t("delegate.forging.name2") }}</h5>
          <div>
            <span>98</span>
          </div>
        </li>
        <li>
          <h5>{{ $t("delegate.forging.name3") }}</h5>
          <div>
            <el-progress type="circle" :percentage="85.9" :width="80" :stroke-width="8" color="#FFA400"></el-progress>
          </div>
        </li>
        <li>
          <h5>{{ $t("delegate.forging.name4") }}</h5>
          <div>
            <el-progress type="circle" :percentage="18.1" :width="80" :stroke-width="8" color="#28CF4A"></el-progress>
          </div>
        </li>
      </ul>
      <h3 class="title">{{ $t("delegate.title3") }}</h3>
      <blockTable :tableData="blockData"></blockTable>
    </div>
    <el-dialog :title="$t('delegate.register.title')" width="700px" :visible.sync="dialogFormVisible" class="delegate-register">
      <p>{{ $t("delegate.register.prompt") }}</p>
      <h5>{{ $t("delegate.register.name") }}</h5>
      <input type="text" :placeholder="$t('delegate.register.placeholder')" v-model="registerName">
      <div slot="footer" class="dialog-footer">
        <span class="spend">{{ $t("delegate.register.spend") }}</span>
        <el-button @click="dialogFormVisible = false">{{ $t("delegate.register.cancel") }}</el-button>
        <el-button type="primary" @click="registerSub">{{ $t("delegate.register.register") }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import blockTable from '../../components/blockTable'
export default {
  name: "forging",
  data(){
    return {
      dialogFormVisible: false, //模态框默认隐藏
      isDelegate: false, //是否注册为代表
      registerName: '', //模态框注册姓名
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
  methods:{
    registerSub(){
      if(this.registerName === ''){
        this.$message.error(this.$t("delegate.register.error"));
      }else{
        this.dialogFormVisible = false;
        this.isDelegate = true;
      }
    }
  },
  components:{
    blockTable
  }

}
</script>

<style scoped>

</style>
