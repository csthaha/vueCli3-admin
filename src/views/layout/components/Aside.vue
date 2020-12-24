<template>
  <div class="aside">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      @select="selectMenu"
    >
      <el-submenu index="nav1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ $t("message.nav1") }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="op1">选项1</el-menu-item>
          <el-menu-item index="op2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="op3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="op4">
          <span slot="title">选项4</span>
          <el-menu-item index="op4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <div v-if="asideList.length === 0">
        <el-menu-item index="nav2" @click="go2Nav(2)">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="nav4" @click="go2Nav(4)">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </div>

      <el-menu-item
        v-else
        :index="aside.nameEn"
        @click="go2Nav(aside.nameEn.slice(-1))"
        v-for="(aside, index) in asideList"
        :key="index"
      >
        <i :class="aside.className"></i>
        <span slot="title">{{ lang == "en" ? aside.nameEn : aside.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      // isCollapse: false
      asideList: []
    };
  },
  components: {},
  computed: {
    ...mapState(["isCollapse"]),
    lang() {
      return this.$store.state.lang;
    }
  },
  created() {
    this.getAsideList();
  },
  methods: {
    // 获取侧边栏
    getAsideList() {
      console.log("获取侧边栏", this.$api);
      this.$api.aside.getAsideList().then(
        res => {
          console.log("aside is", res);
          if (res.code === 0) {
            this.asideList = res.data;
            console.log("-----", this.asideList);
          }
      }).catch(err => {
        this.asideList = []
        console.log('err', this.asideList)
      });
      console.log(this.asideList)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 菜单激活回调
    selectMenu(key, keyPath) {
      console.log(key, keyPath);
      if (keyPath.indexOf("home") > -1) return;
      if (key !== null) {
        let breadList = ["home"];
        breadList.push(...keyPath);
        console.log(breadList);
        this.$store.commit("SET_BREAD", breadList);
      }
    },
    go2Nav(index) {
      console.log("go to nav", index);
      let path = `/nav${index}`;
      this.$router.push({ path });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.aside {
  /* position: fixed;
    height: 100%;
    width: 200px;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1001; */
  .el-menu-vertical-demo {
    min-height: 100vh;
  }
}
</style>