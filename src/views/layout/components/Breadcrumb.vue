<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      <transition-group name="fade-transform" mode="out-in">
        <template v-for="(item, index) in $store.state.breadList">
          <el-breadcrumb-item
            :to="activeList.indexOf(item) == -1 ? '' : { path: '/' + item }"
            :key="index"
            >{{ $t("route." + item) }}</el-breadcrumb-item
          >
        </template>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeList: []
    };
  },
  mounted() {
    this.getBreadcrumb();
  },
  watch: {
    $route(n, o) {
      //获取即将进入的路由
      let route = n.fullPath.replace("/", "");
      console.log(n, o);
      this.getBreadcrumb(route);
    }
  },
  methods: {
    //获取面包屑
    getBreadcrumb(route) {
      console.log(route);
      this.activeList = [];
      this.activeList.push(this.$store.state.breadList[0]);
      console.log(this.$store.state.breadList);
      let breadList = this.$store.state.breadList;
      if (route !== "home") {
        if (breadList[breadList.length - 1] !== "home") {
          this.activeList.push(breadList[breadList.length - 1]);
        }
      } else {
        console.log(this.activeList);
        this.$store.commit("SET_BREAD", this.activeList);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-left: 35px;
  .el-breadcrumb {
    line-height: 46px;
  }
}
</style>