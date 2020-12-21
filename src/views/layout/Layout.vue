<template>
  <div class="layout">
    <Aside />
    <div
      class="main-container"
    >
      <Header />
      <!-- <Main /> -->
    </div>
  </div>
</template>

<script>
import Aside from "./components/Aside";
import Header from "./components/Header";
export default {
  data() {
    return {};
  },
  components: {
    Aside,
    Header
  }
};
</script>

<style scoped>
.layout {
    display: flex;
}
.layout .main-container {
    min-height: 100%;
    flex: 1;
    position: relative;
    top: 0;
}
</style>