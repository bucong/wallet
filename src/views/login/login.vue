<template>
  <div class="login">
    <div class="flex">
      <img src="/static/img/login-logo.png" class="login-logo" alt="">
      <div class="language-box">
        <ul class="language">
          <li v-for="item in language" @click="switchLang(item.lang)"><img :src="'/static/img/language-'+item.lang+'.png'" alt="">{{item.value}}</li>
        </ul>
      </div>
    </div>
    <div class="text-box">
      <textarea name="" v-show="see === 1" :placeholder="$t('login.placeholder')" v-model="password"></textarea>
      <input type="password" v-show="see === 2" :placeholder="$t('login.placeholder')" v-model="password">
      <img :src="'/static/img/password-see'+see+'.png'" @click="seePassword" alt="">
    </div>
    <div class="error-box">
      <div class="error" v-show="err">
        <img src="/static/img/login-error.png" alt="">{{ $t("login.error") }}
      </div>
    </div>
    <div class="flex">
      <el-checkbox v-model="checked">{{ $t("login.keep") }}</el-checkbox>
      <div class="sub-box">
        <button><router-link to="/register">{{ $t("login.new") }}</router-link></button>
        <button @click="loginSub">{{ $t("login.sub") }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {handleLocalStorage} from '../../utils/util'
  import {crypto} from 'htc-js'
  import store from '@/store/store'
export default {
  name: 'index',
  data () {
    return {
      checked: true, // 记住密码
      language: [ //语言切换
        {lang: 'en',value: 'English'},
        {lang: 'cn',value: '汉语'}
      ],
      password: '',
      see: 1,  //密码可见1，不可见2
      err: false, //登录出错
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background-image: url(/static/img/login-bg.png);min-width: 700px;');
  },
  beforeMount() {
    let lang = localStorage.lang || 'en';
    let language = this.language;
    language.find(function(value,index,language){
      if(value.lang === lang){
        let temp = language[0];
        language[0] = language[index];
        language[index] = temp;
      }
    });
  },
  methods: {
    switchLang(lang)  {
      this.$i18n.locale = lang;
      handleLocalStorage('set','lang',lang);
      let language = this.language;
      language.find(function(value,index,language){
        if(value.lang === lang){
          let temp = language[0];
          language[0] = language[index];
          language[index] = temp;
        }
      })
    },
    seePassword(){
      if(this.see ===1){
        this.see = 2;
      }else{
        this.see =1;
      }
    },
    loginSub(){
      //判断密码是否为空
      if(this.password.length === 0){
        this.err = true;
      }else{
        //判断密码是否正确
        if(crypto.getKeys(this.password)){
          let keyPassword = crypto.getKeys(this.password);
          //保存密码信息到vuex
          store.commit('setPassword', this.password);
          store.commit('setPublicKey', keyPassword.publicKey);
          store.commit('setPrivateKey', keyPassword.privateKey);
          if(this.checked === true){
            //记住密码，保存到localstorage
            handleLocalStorage('set','mainPassword',this.password);
            handleLocalStorage('set','publicKey',keyPassword.publicKey);
            handleLocalStorage('set','privateKey',keyPassword.privateKey);
          }else{
            handleLocalStorage('remove','mainPassword');
            handleLocalStorage('remove','publicKey');
            handleLocalStorage('remove','privateKey');
          }
          this.$router.push({path: '/'})
        }else{
          this.err = true;
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
