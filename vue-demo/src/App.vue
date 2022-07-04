<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  watch: {
    $route(newVal) {
      const body = document.body;
      if (newVal.path === "/score") {
        body.style.backgroundImage = `url(${require("./assets/img/4-1.jpg")})`;
      } else {
        body.style.backgroundImage = `url(${require("./assets/img/1-1.jpg")})`;
      }
    },
  },
  created() {},
};
</script>

<style>
#app {
  width: 100%;
  height: calc(100vh);
  font-size: 10px;
}
body {
  background-image: url("./assets/img/1-1.jpg");
  background-size: 100% 100%;
}
</style>
