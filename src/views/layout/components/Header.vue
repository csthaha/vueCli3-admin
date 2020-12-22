<template>
  <div class="header">
    <div class="header-left">
      <ShowAside @toggleClick="toggleClick" />
      <Breadcrumb />
    </div>

    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen" @click="handleFullScreen">
          <el-tooltip
            effect="dark"
            :content="
              fullscreen
                ? $t('header.cancelFullScreen')
                : $t('header.fullScreen')
            "
            placement="bottom"
          >
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>

        <!-- 切换语言 -->
        <SelectLang />

        <!-- 用户名下拉菜单 -->
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img
              src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3266090804,66355162&fm=26&gp=0.jpg"
              class="user-avatar"
            />
            <span>{{ username || "哈喽" }}</span
            ><i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link class="inlineBlock" to="/home">
              <el-dropdown-item>{{ $t("header.home") }}</el-dropdown-item>
            </router-link>
            <el-dropdown-item>{{ $t("header.setting") }}</el-dropdown-item>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">{{
                $t("header.logout")
              }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import ShowAside from "./ShowAside";
import Breadcrumb from "./Breadcrumb";
import SelectLang from "./SelectLang";

export default {
  data() {
    return {
      fullscreen: false,
      username: ""
    };
  },
  components: {
    ShowAside,
    Breadcrumb,
    SelectLang
  },
  methods: {
    toggleClick(val) {
      console.log(val, "子组件");
    },

    //全屏
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },

    logout(command) {
      //   this.$store.commit("TAGES_LIST", []);
      //   this.$store.commit("SET_BREAD", ["home"]);
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 50px;
  line-height: 50px;
  /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04); */
  border-bottom: 2px solid #f0f0f0;
  display: flex;
  .header-right {
    position: absolute;
    right: 20px;
    .header-user-con {
      display: flex;
      .btn-fullscreen {
        transform: rotate(45deg);
        font-size: 20px;
        margin-right: 10px;
      }
    }
    .avatar-container {
      height: 50px;
      display: flex;
      margin-right: 10px;
      font-size: 0;
      .avatar-wrapper {
        cursor: pointer;
        display: flex;
        align-items: center;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        span {
          color: rgb(171, 128, 250);
          font-size: 12px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -15px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>