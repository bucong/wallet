<template>
  <div class="account">
    <h3 class="title">{{ $t("account.title") }}</h3>
    <div class="tab-box">
      <el-tabs v-model="activeName">
        <el-tab-pane :label="$t('account.tab.info')" name="first">
          <ul class="info">
            <li>
              <div class="name">{{ $t("account.info.name1") }}</div>
              <div>
                <span class="balance">45600</span>
                <span>HTC</span>
              </div>
            </li>
            <li>
              <div class="name">{{ $t("account.info.name2") }}</div>
              <div>
                <span>{{address}}</span>
                <img src="/static/img/copy.png" alt="" v-clipboard:copy="address" v-clipboard:success="onCopy" v-clipboard:error="onError">
              </div>
            </li>
            <li>
              <div class="name">{{ $t("account.info.name3") }}</div>
              <div>
                <span class="prompt">{{ $t("account.info.prompt") }}</span>
              </div>
            </li>
            <li>
              <div class="name">{{ $t("account.info.name4") }}</div>
              <div>
                <span>{{publicKey}}</span>
                <img src="/static/img/copy.png" alt="" v-clipboard:copy="publicKey" v-clipboard:success="onCopy" v-clipboard:error="onError">
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane :label="$t('account.tab.secret')" name="second">
          <div class="secret">
            <h5>{{ $t("account.secret.title") }}</h5>
            <h6>{{ $t("account.secret.name1") }}</h6>
            <input type="password" :placeholder="$t('account.secret.placeholder1')" v-model="password1" autocomplete="new-password" />
            <h6>{{ $t("account.secret.name2") }}</h6>
            <input type="password" :placeholder="$t('account.secret.placeholder2')" v-model="password2" autocomplete="new-password" />
            <p>{{ $t("account.secret.prompt") }}</p>
            <button>{{ $t("account.secret.submit") }}</button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="sign-out">{{ $t('head.signOut') }}</div>
  </div>
</template>

<script>
export default {
  name: "account",
  data(){
    return {
      address: 'A75e5skuvKeXHiL9PZU4hxDfqUHYSctcHw',
      publicKey: '057487c0464a3d6bb43ddd56f86ab16406209e86eaa6456e1e8704c068ae6ba2',
      activeName: 'first', //tab页
      password1: '',
      password2: ''
    }
  },
  methods: {
    onCopy() { //复制成功
      this.$message({
        message: this.$t('register.copy.success'),
        type: 'success'
      });
    },
    onError() { //复制失败
      this.$message.error(this.$t('register.copy.fail'));
    }
  }
}
</script>

<style scoped>

</style>
