<template>
  <div>
    <itemcontainer father-component="item"></itemcontainer>
  </div>
</template>

<script>
import itemcontainer from "../components/itemcontainer";
import { mapMutations, mapState } from "vuex";
export default {
  name: "ItemView",

  data() {
    return {};
  },
  computed: {
    ...mapState(["itemDetail"]),
  },
  components: {
    itemcontainer,
  },
  mounted() {
    this.initList();Item
  },

  methods: {
    ...mapMutations(["getItemList"]),
    initItemList() {
      this.$ajax.get("./list.json").then(
        (response) => {
          this.getItemList(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },initItemList1() {
      this.$ajax.get("./list.json").then(
        (response) => {
          this.getItemList(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },initItemList2() {
      this.$ajax.get("./list.json").then(
        (response) => {
          this.getItemList(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },initItemList3() {
      this.$ajax.get("./list.json").then(
        (response) => {
          this.getItemList(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>