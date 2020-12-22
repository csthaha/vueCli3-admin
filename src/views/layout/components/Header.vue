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
      </div>
    </div>
  </div>
</template>

<script>
import ShowAside from "./ShowAside";
import Breadcrumb from "./Breadcrumb";

export default {
  data() {
    return {
      fullscreen: false
    };
  },
  components: {
    ShowAside,
    Breadcrumb
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
    right: 0;
    .header-user-con {
      .btn-fullscreen {
        transform: rotate(45deg);
        font-size: 20px;
      }
    }
  }
}
</style>