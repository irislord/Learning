<template>
  <div>
    <itemcontainer father-component="home"></itemcontainer>
  </div>
</template>

<script>
import itemcontainer from "../components/itemcontainer";
export default {
  name: "HomeView",

  data() {
    return {};
  },
  components: {
    itemcontainer,
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
