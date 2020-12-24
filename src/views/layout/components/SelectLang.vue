<template>
  <div>
    <el-dropdown trigger="click" @command="handleSetLanguage">
      <span class="el-dropdown-link">
        {{lang === 'cn' ? '语言切换' : 'Change Lang'}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="dropMenu">
        <el-dropdown-item :disabled="lang === 'cn'" command="cn"
          >中文</el-dropdown-item
        >
        <el-dropdown-item :disabled="lang === 'en'" command="en"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  computed: {
    lang() {
      return this.$store.state.lang;
    }
  },
  methods: {
    handleSetLanguage(command) {
      console.log(command);
      this.$i18n.locale = command;
      this.$store.commit("GET_LANGUAGE", command);
      console.log(this.$store.state.lang)
    }
  }
};
</script>
<style lang="scss" scoped>
.icon-font {
  width: 28px;
  height: 28px;
  margin-top: 22px;
  margin-right: 6px;
  cursor: pointer;
}
.el-dropdown-link {
  cursor: pointer;
  margin-right: 10px;
}
</style>

