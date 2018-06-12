<template>
    <div class="transfer">
      <h3>{{ $t("transfer.title") }}</h3>
      <div class="transfer-box">
        <ul class="form">
          <li>
            <h5>{{ $t("transfer.form.recipient") }}</h5>
            <div class="input-box">
              <input type="text" v-model="recipient" :placeholder="$t('transfer.form.recipientPlaceholder')"/>
              <span v-show="recipientErr"><img src="/static/img/login-error.png" alt="">{{ $t("transfer.form.recipientErr") }}</span>
            </div>
          </li>
          <li>
            <h5>{{ $t("transfer.form.amount") }}</h5>
            <div class="input-box">
              <input type="text" id="amount" v-model="amount" :placeholder="$t('transfer.form.amountPlaceholder')"/>
              <span v-show="amountErr"><img src="/static/img/login-error.png" alt="">{{ $t("transfer.form.amountErr") }}</span>
              <label for="amount">HTC</label>
            </div>
          </li>
          <li>
            <h5>{{ $t("transfer.form.fee") }}</h5>
            <div class="input-box">
              <input type="text" value="0.01" disabled/>
              <label>HTC</label>
            </div>
          </li>
        </ul>
        <p>{{ $t("transfer.prompt") }}</p>
        <button @click="send">{{ $t("transfer.send") }}</button>
      </div>
    </div>
</template>

<script>
export default {
  name: "transfer",
  data(){
    return {
      recipient: '', //接收者input
      recipientErr: false, //接收者填写错误提示
      amount: '', //数量input
      amountErr: false, //数量填写错误提示
    }
  },
  methods: {
    send(){
      this.recipientErr = false;
      this.amountErr = false;
      if(this.recipient === ''){
        this.recipientErr = true;
      }else if(this.amount === ''){
        this.amountErr = true;
      }else{
        //发送
      }
    }
  }
}
</script>

<style scoped>

</style>
