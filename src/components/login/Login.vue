<template>
  <div class="login">
    <Header></Header>
    <van-form validate-first @failed="onFailed">
      <van-field
        v-model="value1"
        name="pattern"
        placeholder="账号(admin)"
        :rules="[{pattern,message:'4-12位，必须包含数字、字母'}]"
      />
      <van-field
        v-model="value2"
        name="validator"
        placeholder="密码(admin)"
        :rules="[{validator,message:'4-12位，必须包含数字、字母'}]"
      />
      <div style="margin: 16px;">
        <!-- native-type="submit" -->
        <van-button round block type="info" @click="checkUser">一键注册/登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import Header from "./Header";
import "vant/lib/index.css";
import Vue from "vue";
import { Form } from "vant";
Vue.use(Form);
import { Button } from "vant";
Vue.use(Button);
import { Field } from "vant";
Vue.use(Field);
export default {
  components: {
    Header
  },
  data() {
    return {
      value1: "",
      value2: "",
      pattern: /^\w{4,12}$/i
    };
  },
  methods: {
    validator(val) {
      // var reg = /^(?=.*\d)(?=.*[a-z])(?=.*\_)\w{4,20}$/;
      let reg = /^\w{4,12}$/i;
      return reg.test(val);
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    checkUser() {
      if (this.value1 == "admin" && this.value2 == "admin") {
        this.$router.push({ path: "/" });
        // 模拟后端验证登录情况
        sessionStorage.loginInfo = 1;
      } else {
        alert("账号或密码错误！");
      }
    }
  }
};
</script>

<style scpoed>
.van-field__body input {
  padding: 10px;
  font-size: 16px;
}
.van-button--info {
  color: #000;
  background: #ffed5c;
  border: 1px solid #ffed5c;
}
</style>