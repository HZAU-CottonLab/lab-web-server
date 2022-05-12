<!--
 * @Descripttion: 
 * @version: 
 * @Author: zpliu
 * @Date: 2021-09-22 14:25:15
 * @LastEditors: zpliu
 * @LastEditTime: 2022-05-12 11:50:04
 * @@param: 
-->
<template>
  <el-container class="login-page">
    <headCom></headCom>
    <el-main class="login-main">
      <el-row>
        <el-col :md="12" :sm="24" :xs="24" style="margin-top: 5%">
          <div class="login-wrap">
            <div class="login-html">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                class="sign-in"
                checked
              /><label for="tab-1" class="tab">Sign In</label>
              <input id="tab-2" type="radio" name="tab" class="sign-up" /><label
                for="tab-2"
                class="tab"
                >Sign Up</label
              >
              <div class="login-form">
                <div class="sign-in-htm">
                  <el-form
                    label-width="100px"
                    :model="loginForm"
                    style="max-width: 460px"
                    :rules="login_rule"
                    ref="loginForm"
                  >
                    <el-form-item label="Account" prop="account">
                      <el-input v-model="loginForm.account" />
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                      <el-input v-model="loginForm.password" />
                    </el-form-item>
                    <el-form-item>
                      <el-button
                        type="primary"
                        @click="submitLogin('loginForm')"
                        >Login</el-button
                      >
                    </el-form-item>
                  </el-form>
                </div>
                <div class="sign-up-htm">
                  <el-form
                    label-width="100px"
                    :model="singupForm"
                    style="max-width: 460px"
                    :rules="siginup_rule"
                    ref="singupForm"
                  >
                    <el-form-item label="name" prop="username">
                      <el-input v-model="singupForm.username" />
                    </el-form-item>
                    <el-form-item label="email" prop="email">
                      <el-input v-model="singupForm.email" />
                    </el-form-item>
                    <el-form-item label="Password" prop="password">
                      <el-input v-model="singupForm.password" />
                    </el-form-item>
                    <el-form-item label="repeat" prop="repeatPassword">
                      <el-input v-model="singupForm.repeatPassword" />
                    </el-form-item>
                    <el-form-item>
                      <el-button
                        type="primary"
                        @click="submitSignup('singupForm')"
                        >Submit</el-button
                      >
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :md="12" :sm="0" :xs="0">
          <!-- //wave 自定义图标 -->
          <svg-icon :name="'cloudManage'" style="height:100%; width:100%;" />
        </el-col>
      </el-row>
    </el-main>
    <footerCom> </footerCom>
  </el-container>
</template>
<script>
import footerCom from "@/components/footer";
import headCom from "./home/layout/header/index.vue";
import { mapActions, mapState } from "vuex";
import { ElMessage } from "element-plus";
export default {
  name: "loginPage",
  data() {
    //表单验证规则
    var checkValue = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("值不能为空"));
      } else {
        callback();
      }
    };
    var validatePass_login = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.loginForm.password !== "") {
          this.$refs.loginForm.validateField("password");
        }
        callback();
      }
    };
    var validatePass_singup = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.singupForm.password !== "") {
          this.$refs.singupForm.validateField("password");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.singupForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    const siginup_rule = {
      username: [{ validator: checkValue, trigger: "blur" }],
      account: [{ validator: checkValue, trigger: "blur" }],
      password: [{ validator: validatePass_singup, trigger: "blur" }],
      email: [{ validator: checkValue, trigger: "blur" }],
      repeatPassword: [{ validator: validatePass2, trigger: "blur" }],
    };
    const login_rule = {
      account: [{ validator: checkValue, trigger: "blur" }],
      password: [{ validator: validatePass_login, trigger: "blur" }],
    };
    return {
      loginForm: {
        account: "",
        password: "",
      },
      singupForm: {
        username: "",
        account: "",
        password: "",
        email: "",
        repeatPassword: "",
      },
      login_rule,
      siginup_rule,
    };
  },
  components: {
    footerCom,
    headCom,
  },
  computed: {
    ...mapState({
      //获取登录状态
      // loginStatus: (store) => store.user.loginStatus,
    }),
  },
  methods: {
    ...mapActions({
      // 进行登录请求的API
      login: "user/authenticate",
      register: "user/siginup",
    }),
    //请求对应的API
    submitLogin(formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          //发起登录请求，请求参数为form表单；
          // 返回结果为promise对象，并携带请求结果
          //* API接口在store.user.action中
          this.login(this.loginForm).then((res) => {
            if (res) {
              console.log(res);
              /**
               * 登录成功后，进行路由重定向
               */
              this.$router.push({ path: "/dashboard/" });
            } else {
              ElMessage.error({
                message: "账号或密码错误",
              });
              //  重置表单项
              this.$refs[formname].resetFields();
            }
          });
        } else {
          //检测表单
          return;
        }
      });
    },
    submitSignup(formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          //发起注册请求
          this.register(this.singupForm).then((res) => {
            ElMessage.info({
              message: res.info.message,
            });
          });
          return;
        } else {
          //检测表单
          return;
        }
      });
    },
  },
  created() {
    // this.login()
  },
};
</script>
<style lang='scss' scoped>
.login-page {
  background: url("../assets/images/background.png");
  background-size: contain;
  background-repeat: repeat-y;
  display: flex;
  flex-direction: column;
}
.login-main {
  background: url("../assets/images/wave.svg");
  margin: 0;
  color: #6a6f8c;
  font: 600 16px/18px "Open Sans", sans-serif;
  // max-height: 800px;
  background-size: contain;
  background-repeat: no-repeat;
}
*,
:after,
:before {
  box-sizing: border-box;
}
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  display: block;
}
a {
  color: inherit;
  text-decoration: none;
}

.login-wrap {
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 670px;
  position: relative;
  background: url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg)
    no-repeat center;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.login-html {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgba(40, 57, 101, 0.9);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check {
  display: none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button {
  text-transform: uppercase;
}
.login-html .tab {
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab {
  color: #fff;
  border-color: #1161ee;
}
.login-form {
  min-height: 75%;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.login-form .group {
  margin-bottom: 15px;
}

.login-form {
  .sign-in-htm {
    display: flex;
    align-items: center;
  }
  .sign-up-htm {
    display: flex;
    align-items: center;
  }
}

.login-form .group .label,
.login-form .group .input,
.login-form .group .button {
  width: 100%;
  color: #fff;
  display: block;
}
.login-form .group .input,
.login-form .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group input[data-type="password"] {
  -webkit-text-security: circle;
}
.login-form .group .label {
  color: #aaa;
  font-size: 12px;
}
.login-form .group .button {
  background: #1161ee;
}
.login-form .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after {
  content: "";
  width: 10px;
  height: 2px;
  background: #fff;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
}
.login-form .group label .icon:before {
  left: 3px;
  width: 5px;
  bottom: 6px;
  transform: scale(0) rotate(0);
}
.login-form .group label .icon:after {
  top: 6px;
  right: 0;
  transform: scale(0) rotate(0);
}
.login-form .group .check:checked + label {
  color: #fff;
}
.login-form .group .check:checked + label .icon {
  background: #1161ee;
}
.login-form .group .check:checked + label .icon:before {
  transform: scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after {
  transform: scale(1) rotate(-45deg);
}
.login-html
  .sign-in:checked
  + .tab
  + .sign-up
  + .tab
  + .login-form
  .sign-in-htm {
  transform: rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm {
  transform: rotate(0);
}

.hr {
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, 0.2);
}
.foot-lnk {
  text-align: center;
}
</style>