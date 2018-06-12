<template>
    <div class="error">

    </div>
</template>

<script>
export default {
  name: "error",
  data(){
    return {

    }
  },
  beforeCreate () {

  },
  created() {

  },
  methods:{

  }
}
</script>

<style scoped>
.error{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(/static/img/404.jpg);
  background-size: cover;
  background-position: center;
}
</style>
