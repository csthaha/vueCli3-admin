<template>
  <div class="layout">
    <Aside />
    <div
      class="main-container"
    >
      <Header />
      <Main />
    </div>
  </div>
</template>

<script>
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main"
export default {
  data() {
    return {};
  },
  components: {
    Aside,
    Header,
    Main
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