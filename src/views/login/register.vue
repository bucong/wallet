<template>
  <div class="register">
    <div class="tab">
      <div :class="{active: step === 1}">{{ $t('register.step1.tab') }}</div>
      <div :class="{active: step === 2}">{{ $t('register.step2.tab') }}</div>
    </div>
    <div class="steps" v-show="step === 1">
      <textarea v-model="password"></textarea>
      <div class="info">
        <p>{{ $t('register.info') }}</p>
      </div>
      <div class="sub-box">
        <button @click="downloadTXT">{{ $t("register.step1.btn1") }}</button>
        <button v-clipboard:copy="password" v-clipboard:success="onCopy" v-clipboard:error="onError">{{
          $t("register.step1.btn2") }}
        </button>
        <button @click="next">{{ $t("register.step1.btn3") }}</button>
      </div>
    </div>
    <div class="steps" v-show="step === 2">
      <textarea v-model="subPassword"></textarea>
      <div class="info">
        <div class="error" v-show="err">
          <img src="/static/img/login-error.png" alt="">{{ $t("login.error") }}
        </div>
        <p>{{ $t('register.info') }}</p>
      </div>
      <div class="sub-box">
        <span @click="back">{{ $t("register.step2.btn1") }}</span>
        <button @click="loginSub">{{ $t("register.step2.btn2") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {handleLocalStorage} from '../../utils/util'
  import {crypto} from 'htc-js'
  import {saveAs} from '../../assets/js/FileSaver.min'
  import {fetchTest} from '@/api/api'
  import store from '@/store/store'
  export default {
    name: 'index',
    data() {
      return {
        password: '', //生成的密码
        subPassword: '', //填写的密码
        step: 1, //步骤1，步骤2
        err: false,  //登录出错
        publicKey: '',
        privateKey: ''
      }
    },
    beforeCreate() {
      document.querySelector('body').setAttribute('style', 'background-image: url(/static/img/login-bg.png);min-width: 700px;');
    },
    created() {
      this.password = crypto.generateSecret();
      let passKey = crypto.getKeys(this.password);
      this.publicKey = passKey.publicKey;
      this.privateKey = passKey.privateKey;
      fetchTest().then(res => {
        console.log('mock数据：');
        console.log(res.data);
      })
    },
    methods: {
      next() {
        this.step = 2;
        this.err = false;
        this.subPassword = '';
      },
      back() {
        this.step = 1;
      },
      loginSub() {
        //判断密码
        if (this.password === this.subPassword) {
          store.commit('setPassword', this.password);
          store.commit('setPublicKey', this.publicKey);
          store.commit('setPrivateKey', this.privateKey);
          handleLocalStorage('set', 'mainPassword', this.password);
          handleLocalStorage('set', 'publicKey', this.publicKey);
          handleLocalStorage('set', 'privateKey', this.privateKey);
          this.$router.push({path: '/'})
        } else {
          this.err = true;
        }
      },
      onCopy() { //复制成功
        this.$message({
          message: this.$t('register.copy.success'),
          type: 'success'
        });
      },
      onError() { //复制失败
        this.$message.error(this.$t('register.copy.fail'));
      },
      downloadTXT() { //下载密码TXT文件
        let blob = new Blob([this.password], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "password.txt");
      }
    }
  }
</script>

<style scoped>

</style>
