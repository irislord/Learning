<template>
  <div class="container">
    <el-form style="width: 20%">
      <h1>V CRM</h1>
      <el-form-item>
        <el-input placeholder="请输入账号" v-model="account" clearable>
          <template slot="prepend"
            ><i class="el-icon-mobile-phone"></i
          ></template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="请输入密码"
          type="password"
          v-model="password"
          clearable
          show-password
        >
          <template slot="prepend"><i class="el-icon-info"></i></template
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary" @click="checkAccount"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "loginView",

  data() {
    return {
      account: "",
      password: "",
    };
  },

  mounted() {},

  methods: {
    checkAccount() {
      if (this.account === "root" || this.account === "vii") {
        this.$router.push({ name: "error" });
      } else {
        alert("error");
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
