<template>
  <div class="about">
    <h1>This is an about page</h1>
     <el-button type="primary" @click="switchChinese()">切换中文</el-button>
     <el-button type="primary" @click="switchEnlish()">切换英文</el-button>
     <p>{{$t('message.hello')}}</p> 
     <p>{{$t('message.msg')}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "About",
  components: {
    // HelloWorld
  },
  methods: {
    switchChinese() {
      this.$i18n.locale = 'cn'; 
      console.log(this.$i18n.locale);
      localStorage.setItem('lang', 'cn')
    },
    switchEnlish() {
       this.$i18n.locale = 'en'; 
       localStorage.setItem('lang', 'en')
    }
  }
};
</script>