<template>
  <div>
    <div class="your_score">
      <span>{{ this.$store.state.score*20 + "分" }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueDemoScore",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.your_score {
  background: url("../assets/img/4-2.png") no-repeat;
  background-size: 100% 100%;
  width: 15rem;
  height: 15rem;
  position: absolute;
  left: 50%;
  /* margin-left: -7.5rem; */
  transform: translateX(-50%);
  top: 5rem;
}
.your_score span{
    font-size: 2rem;
    color: brown;
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translateX(-50%);
}

</style>