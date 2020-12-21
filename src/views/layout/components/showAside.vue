<template>
  <div class="clearfix">
    <div class="showAside pull-left" @click="toggleClick">
      <i class="el-icon-menu"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "showAside",
  props: {},
  computed: {
    isCollapse: {
      get: function() {
        return this.$store.state.isCollapse;
      },
      set: function(newValue) {
        this.$store.commit("IS_COLLAPSE", newValue);
      }
    }
  },
  methods: {
    toggleClick() {
      this.isCollapse = !this.isCollapse
    }
  }
};
</script>
<style lang="scss" scoped>
.clearfix {
  float: left;
}
.showAside {
  text-align: left;
  margin-left: 10px;
  cursor: pointer;
  i {
    font-size: 20px;
  }
}
</style>

