<template>
  <div class="index">
    <el-container>
      <el-aside class="aside" width="16%">
        <div class="logo">
          <img src="/static/img/logo.png" alt="">
        </div>
        <div class="nav">
          <h5>{{ $t("aside.menu") }}</h5>
          <router-link to="/home">
            <img src="/static/img/icon-home1.png" class="choose" alt="">
            <img src="/static/img/icon-home2.png" class="default" alt="">
            <span>{{ $t("aside.home") }}</span>
          </router-link>
          <router-link to="/account">
            <img src="/static/img/icon-myAccount1.png" class="choose" alt="">
            <img src="/static/img/icon-myAccount2.png" class="default" alt="">
            <span>{{ $t("aside.account") }}</span>
          </router-link>
          <router-link to="/forging">
            <img src="/static/img/icon-forging1.png" class="choose" alt="">
            <img src="/static/img/icon-forging2.png" class="default" alt="">
            <span>{{ $t("aside.forging") }}</span>
          </router-link>
          <router-link to="/listing">
            <img src="/static/img/icon-listing1.png" class="choose" alt="">
            <img src="/static/img/icon-listing2.png" class="default" alt="">
            <span>{{ $t("aside.listing") }}</span>
          </router-link>
          <router-link to="/vote">
            <img src="/static/img/icon-vote1.png" class="choose" alt="">
            <img src="/static/img/icon-vote2.png" class="default" alt="">
            <span>{{ $t("aside.vote") }}</span>
          </router-link>
          <router-link to="/transfer">
            <img src="/static/img/icon-transfer1.png" class="choose" alt="">
            <img src="/static/img/icon-transfer2.png" class="default" alt="">
            <span>{{ $t("aside.transfer") }}</span>
          </router-link>
          <router-link to="/peers">
            <img src="/static/img/icon-peers1.png" class="choose" alt="">
            <img src="/static/img/icon-peers2.png" class="default" alt="">
            <span>{{ $t("aside.peers") }}</span>
          </router-link>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="head flex">
            <div class="search-box flex">
              <input type="text" :placeholder="$t('head.placeholder')" v-model="search" autocomplete="new-password" />
              <div class="search-btn">
                <img src="/static/img/head-search.png" alt="">
              </div>
            </div>
            <div class="user flex">
              <div class="imgbg user-img" :style="{backgroundImage:'url(/static/img/head.png)'}"></div>
              <span>{{username}}</span>
              <img src="/static/img/arrow-up.png" alt="">
              <ul>
                <li @click="signOut">{{ $t('head.signOut') }}</li>
              </ul>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import {handleLocalStorage, loginStatus} from '../../utils/util'
  import store from '@/store/store'
export default {
  name: 'index',
  data () {
    return {
      search: '', //搜索内容
      username: '14512322023176S'
    }
  },
  beforeCreate(){
    document.querySelector('body').removeAttribute('style');
  },
  mounted(){
    console.log(loginStatus());
  },
  methods: {
    signOut(){
      store.commit('setPassword', '');
      store.commit('setPublicKey', '');
      store.commit('setPrivateKey', '');
      handleLocalStorage('remove','mainPassword');
      handleLocalStorage('remove','publicKey');
      handleLocalStorage('remove','privateKey');
      this.$router.push({path: '/login'});
    }
  }
}
</script>

<style scoped>

</style>
