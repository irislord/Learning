<template>
  <div>
    <header class="top_tips">
      <span v-if="fatherComponent == 'home'" class="top_icon">{{ level }}</span>
      <span v-if="fatherComponent == 'item'" class="top_icon"
        >题目{{ itemNum }}</span
      >
    </header>
    <div v-if="fatherComponent == 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link to="/item" class="home_btn item_btn_style"></router-link>
    </div>
    <div v-if="fatherComponent == 'item'">
      <div class="item_logo item_container_style" v-if="itemDetail.length > 0">
        <div class="item_list_style">
          <header class="itemTitle">
            {{ itemDetail[itemNum - 1].topic_name }}
          </header>
          <ul
            :key="index"
            v-for="(item, index) in itemDetail[itemNum - 1].topic_answer"
            @click="choosed(item.topic_answer_id, item.is_standard_answer)"
          >
            <li class="item_list">
              <span :class="{ item_list_checked: choosedNum == index }">{{
                chooseType(index)
              }}</span>
              <span>{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span
        class="next_btn item_btn_style"
        v-if="itemNum < itemDetail.length"
        @click="nextItem(isRight)"
      ></span>
      <span class="finish_btn item_btn_style" v-else @click="finish()"></span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "VueDemoItemcontainer",

  props: ["fatherComponent"],
  data() {
    return {
      isRight: null,
    };
  },
  computed: {
    ...mapState(["level", "itemNum", "itemDetail", "score", "choosedNum"]),
  },

  mounted() {},

  methods: {
    ...mapMutations(["calculateScore", "nextItem", "itemChoosed"]),
    finish() {
      this.nextItem(this.isRight);
      this.$router.push("score");
    },
    choosed(num, isRight) {
      this.itemChoosed(num);
      this.isRight = isRight;
    },
    chooseType(num) {
      switch (num) {
        case 0:
          return "A";
        case 1:
          return "B";
        case 2:
          return "C";
        case 3:
          return "D";
        default:
          break;
      }
    },
  },
  created() {},
};
</script>

<style scoped>
.top_tips {
  background: url("../assets/img/WechatIMG2.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  width: 5rem;
  height: 10rem;
  top: -1rem;
  right: 2.5rem;
}
.top_tips .top_icon {
  position: absolute;
  color: rgb(179, 122, 47);
  font-size: 0.8rem;
  font-weight: bold;
  bottom: 1.4rem;
  right: 1.2rem;
}
.home_logo {
  background: url("../assets/img/1-2.png") no-repeat;
  background-size: 100% 100%;
  background-position: top center;
}
.item_logo {
  background: url("../assets/img/2-1.png") no-repeat;
  background-size: 100% 100%;
  background-position: top center;
}
.item_container_style {
  position: absolute;
  width: 20rem;
  height: 18rem;
  top: 6rem;
  left: 2rem;
}
.itemTitle {
  color: aliceblue;
  font-size: 1.2rem;
}
.item_list_style {
  width: 15rem;
  height: 12rem;
  position: absolute;
  left: 50%;
  margin-left: -5.5rem;
  top: 3rem;
}
.item_list_style ul {
  padding: 0;
  color: aliceblue;
}
.item_list {
  list-style-type: none;
}
.item_list span {
  display: inline-block;
  margin-right: 0.7rem;
  font-size: 1rem;
}
.item_list span:first-child {
  border: 0.1rem solid #fff;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
}
.item_list_checked {
  background-color: rgb(248, 209, 78);
  color: black;
}
.home_btn {
  background: url("../assets/img/1-4.png") no-repeat;
  background-size: 100% 100%;
  background-position: top center;
}
.item_btn_style {
  display: block;
  position: absolute;
  width: 6rem;
  height: 3rem;
  left: 50%;
  margin-left: -3rem;
  top: 25rem;
}
.next_btn {
  background: url("../assets/img/2-2.png") no-repeat;
  background-size: 100% 100%;
  background-position: top center;
}
.finish_btn {
  background: url("../assets/img/3-1.png") no-repeat;
  background-size: 100% 100%;
  background-position: top center;
}
</style>