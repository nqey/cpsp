<template>
  <header class="index_header clearfix">
    <div class="col-md-10 col-md-offset-1">
      <div class="pull-left">
        <h2 class="index_logo"><img :src="logo" />CPS申报机构公共业务管理后台</h2>
      </div>
      <div class="pull-right">
        <div class="dropdown index_user"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img :src="tx" /><span class="glyphicon glyphicon-chevron-down"></span></a>
          <div class="dropdown-menu">
            <div class="text-center"> <img :src="tx" />
              <h5><b>{{name}}</b></h5>
              <button class="btn" @click="logout">退出登录</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import tx from '@/assets/img/tx.png';
import logo from '@/assets/img/small_logo.png';
import { getCookie, delCookie } from '@/config/cookie';

export default {
  name: 'lheader',
  data() {
    return {
      tx,
      logo,
      name: getCookie('username'),
    };
  },
  methods: {
    logout() {
      delCookie('username');
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';

.index_header {
  background-image: linear-gradient(to right,  rgb(73,43,253) , rgb(51,141,255));
  height: 100px;
  background-size: cover;
}
.index_logo {
  line-height: 100px;
  color: #fff;
}
.index_logo img {
  padding-right: 30px;
}
.index_user .dropdown-toggle {
  color: #fff;
  padding-top: 25px;
  display: block;
}
.index_user .dropdown-toggle img {
  padding-right: 25px;
}
.index_user .dropdown-menu {
  padding: 20px;
}
.index_user .dropdown-menu img {
  padding-bottom: 20px;
}
.index_user .dropdown-menu h5 {
  margin-top: 0;
  margin-bottom: 20px;
}
.index_user .dropdown-menu .btn {
  background: #e2e2e2;
  color: #696868;
  padding: 4px 20px;
}
.index_user .dropdown-menu .btn:hover {
  color: #4e4c4c !important;
}
</style>