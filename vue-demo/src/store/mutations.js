export default {
  getItemList(state, data) {
    state.itemDetail = data;
  },
  calculateScore(state, isRight) {
    if (isRight == 1) {
      state.score++;
      console.log(state.score);
    }
  },
  nextItem(state, isRight) {
    if (state.choosedNum == null) {
      alert("请选择答案");
    } else {
      if (state.itemNum <= 5) {
        state.itemNum++;
      }
      this.commit("calculateScore", isRight);
      state.choosedNum = null;
    }
  },
  itemChoosed(state, num) {
    state.choosedNum = num - 1;
  },
  clearNum(state) {
    state.itemNum = 1;
    state.score = 0;
  },
};
