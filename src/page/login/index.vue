<template>
  <div :style="{ background: 'url(' + zhs + ') no-repeat center / cover ' }">
      <v-error-info :errMsg="errMsg"></v-error-info>
      <div class="wrap">
        <div style="text-align:center;"><img :src="logo" style="width:90%;margin-top: 5%;"> </div>
        <div class="js-ajax-form" id="login-form" style="margin-top: 10%;">
          <div style="background: #fff;height: 280px;width: 84%;border-radius: 12px; margin:auto;">
            <div class="login">
              <ul>
                <li>
                  <input class="input valid" name="username" type="text"  placeholder="用户名" title="用户名" v-model="username" @keypress="loginBefor($event)">
                </li>
                <li>
                  <input class="input valid" name="password" type="password" placeholder="密码" title="密码" v-model="password" @keypress="loginBefor($event)">
                </li>
                <li>
                  <ul class="logo_yzm">
                    <li>
                      <input class="input" type="text" v-model="checknumber" name="checknumber" placeholder="请输入验证码" @keypress="loginBefor($event)">
                    </li>
                    <li class="verifycode-wrapper txr"><img :src="yzx" alt="点击更换验证码" width="112" height="45" @click="yzm"> </li>
                  </ul>
                </li>
              </ul>
              <div id="login_btn_wraper">
                <button class="btn js-ajax-submit" @click="login">{{lo}}</button>
              </div>
            </div>
          </div>  
        </div>
      </div>
  </div>
</template>

<script>
import { setCookie } from '@/config/cookie';
import logo from '@/assets/img/ZHS-logo.png';
import zhs from '@/assets/img/ZHS.png';
import { CHECKNUMBER, DOMAIN, DECLARE_LOGIN_DO_ADDRESS } from '@/config/env';
import errInfo from '@/components/info/error';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      checknumber: '',
      lo: '登录',
      errMsg: [],
      logo,
      yzx: `${CHECKNUMBER}${new Date().getTime()}&domain=${DOMAIN}`,
      zhs,
      timer: null,
    };
  },
  components: {
    'v-error-info': errInfo,
  },
  methods: {
    loginBefor(e) {
      if (e.keyCode === 13) {
        this.login();
      }
    },
    validate() {
      this.errMsg = [];
      if (!this.username) {
        this.errMsg.push('请输入用户名！');
      }
      if (!this.password) {
        this.errMsg.push('请输入密码！');
      }
      if (!this.checknumber) {
        this.errMsg.push('请输入验证码！');
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(() => { this.errMsg = []; }, 2000);
    },
    async login() {
      this.validate();
      if (this.errMsg.length !== 0) return;
      const data = {
        username: this.username,
        password: this.password,
        checknumber: this.checknumber,
      };
      this.lo = '正在登录...';
      const res = await this.$xhr('post', DECLARE_LOGIN_DO_ADDRESS, data);
      if (res.data.code === 0) {
        window.sessionStorage.setItem('username', this.username);
        window.sessionStorage.setItem('avatar', res.data.data.logo);
        setCookie('platform_user', res.data.data.token, 1000 * 60);
        this.$router.push('/agencymgt/list');
      } else {
        this.lo = '登录';
      }
    },
    yzm() {
      this.yzx = `${CHECKNUMBER}${new Date().getTime()}&domain=${DOMAIN}`;
    },
  },
};
</script>

<style scoped>
/*登录相关*/
/*-----------------------------------------------------------------------*/
#login_btn_wraper .tips_error {
  display: block;
}
#login_btn_wraper .tips_success {
  display: block;
  color: #4fc1ad;
}
#login_btn_wraper {
  text-align: center;
}
.wrap {
  width: 550px;
  height: 974px;
  overflow: hidden;
  margin: 0 auto;
  padding-top: 130px;
  -webkit-animation: bounceIn 600ms linear;
  -moz-animation: bounceIn 600ms linear;
  -o-animation: bounceIn 600ms linear;
  animation: bounceIn 600ms linear;
}
h1 a {
  display: block;
  height: 50px;
  /* width: 398px; */
  margin: auto;
  overflow: hidden;
  color: #fff;
  font-size: 30px;
  /* font-weight: normal; */
  text-align: center;
  text-decoration: none; /* line-height: 50px; */
}
.login ul, .login li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.login ul {
  background: #fff;
  /*box-shadow:1px 1px 1px #ccc;*/
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 15px;
  width: 350px;
  margin: auto;
  overflow: hidden;
  padding: 25px 0;
}
.logo_yzm li {
  width: 50%;
  float: left;
  border: none !important;
}
.logo_yzm {
  border-bottom: 1px solid #d3d4d4;
  padding: 0 !important;
}
.login li {
  border-bottom: 1px solid #d3d4d4;
  height: 50px;
  line-height: 50px;
}
.login .verifycode-wrapper {
  padding: 0px;
}
.login li img {
  vertical-align: top;
  padding-top: 4px;
}
.login .input {
  width: 100%;
  padding: 7px;
  vertical-align: middle;
  border: 0 none;
  color: #000000;
  background: transparent;
  font-size: 17px; /* font-family: Arial,"Microsoft Yahei";*/
}
.login .input:focus {
  outline: 0 none;
}
.placeholder {
  color: #999;
}

.txr {
  text-align: right;
}

/*登录框动画*/
@-webkit-keyframes bounceIn {
 0% {
 opacity: 0;
 -webkit-transform: scale(.3);
}
 50% {
 opacity: 1;
 -webkit-transform: scale(1.05);
}
 70% {
 -webkit-transform: scale(.9);
}
 100% {
 -webkit-transform: scale(1);
}
}
 @-moz-keyframes bounceIn {
 0% {
 opacity: 0;
 -moz-transform: scale(.3);
}
 50% {
 opacity: 1;
 -moz-transform: scale(1.05);
}
 70% {
 -moz-transform: scale(.9);
}
 100% {
 -moz-transform: scale(1);
}
}
 @-o-keyframes bounceIn {
 0% {
 opacity: 0;
 -o-transform: scale(.3);
}
 50% {
 opacity: 1;
 -o-transform: scale(1.05);
}
 70% {
 -o-transform: scale(.9);
}
 100% {
 -o-transform: scale(1);
}
}
 @keyframes bounceIn {
 0% {
 opacity: 0;
 transform: scale(.3);
}
 50% {
 opacity: 1;
 transform: scale(1.05);
}
 70% {
 transform: scale(.9);
}
 100% {
 transform: scale(1);
}
}
.vt {
  vertical-align: top !important;
}
a:hover {
  color: #33a8ff;
}
.js-ajax-submit {
    width: 350px;
    margin: auto;
    color: #fff;
    background: #015FE5;
}
</style>