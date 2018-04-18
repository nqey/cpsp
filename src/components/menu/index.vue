<template>
  <nav class="index_nav clearfix">
    <div class="col-md-10 col-md-offset-1">
      <ul class="clearfix nav_nav">
        <li @click="setActive1"><router-link :class="{cur: active1}" to="/agencymgt/list"><img class="xzyc" :src="icon1" /><img class="xzcx" :src="icon11" />申报机构管理</router-link></li>
        <li @click="setActive2"><router-link :class="{cur: active2}" to="/officermgt/list"><img class="xzyc" :src="icon2" /><img class="xzcx" :src="icon22" />申报官管理</router-link></li>
        <li @click="setActive3"><router-link :class="{cur: active3}" to="/entmgt/list"><img class="xzyc" :src="icon3" /><img class="xzcx" :src="icon33" />申报企业管理</router-link></li>
        <li @click="setActive4"><router-link :class="{cur: active4}" to="/xxx"><img class="xzyc" :src="icon4" /><img class="xzcx" :src="icon44" />网站管理</router-link></li>
        <li @click="setActive5"><router-link :class="{cur: active5}" to="/exam/list"><img class="xzyc" :src="icon5" /><img class="xzcx" :src="icon55" />考试系统</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import icon1 from '@/assets/img/icon1.png';
import icon11 from '@/assets/img/icon1-1.png';
import icon2 from '@/assets/img/icon2.png';
import icon22 from '@/assets/img/icon2-2.png';
import icon3 from '@/assets/img/icon3.png';
import icon33 from '@/assets/img/icon3-3.png';
import icon4 from '@/assets/img/icon4.png';
import icon44 from '@/assets/img/icon4-4.png';
import icon5 from '@/assets/img/icon5.png';
import icon55 from '@/assets/img/icon5-5.png';
import { getCookie, setCookie } from '@/config/cookie';

export default {
  name: 'lmenu',
  data() {
    return {
      active1: true,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      icon1,
      icon11,
      icon2,
      icon22,
      icon3,
      icon33,
      icon4,
      icon44,
      icon5,
      icon55,
    };
  },
  methods: {
    setActive1() {
      this.active1 = true;
      this.active2 = false;
      this.active3 = false;
      this.active4 = false;
      this.active5 = false;
      setCookie('active', 1);
    },
    setActive2() {
      this.active1 = false;
      this.active2 = true;
      this.active3 = false;
      this.active4 = false;
      this.active5 = false;
      setCookie('active', 2);
    },
    setActive3() {
      this.active1 = false;
      this.active2 = false;
      this.active3 = true;
      this.active4 = false;
      this.active5 = false;
      setCookie('active', 3);
    },
    setActive4() {
      this.active1 = false;
      this.active2 = false;
      this.active3 = false;
      this.active4 = true;
      this.active5 = false;
      setCookie('active', 4);
    },
    setActive5() {
      this.active1 = false;
      this.active2 = false;
      this.active3 = false;
      this.active4 = false;
      this.active5 = true;
      setCookie('active', 5);
    },
  },
  mounted() {
    const active = getCookie('active');
    if (active === '1') {
      this.setActive1();
    }
    if (active === '2') {
      this.setActive2();
    }
    if (active === '3') {
      this.setActive3();
    }
    if (active === '4') {
      this.setActive4();
    }
    if (active === '5') {
      this.setActive5();
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';

.index_nav {
  background: #fff;
}
.nav_nav {
  margin-bottom: 0;
}
.nav_nav li {
  float: left;
  width: 20%;
  text-align: center;
}
.nav_nav li a {
  display: block;
  width: 125px;
  color: #6f6868;
  margin: auto;
  text-align: center;
  padding: 15px 0;
  font-weight: bold;
  border-bottom: 3px solid #fff;
}
.xzcx {
  display: none;
}
.nav_nav li:hover .xzcx {
  display: inline-block;
}
.nav_nav li:hover .xzyc {
  display: none;
}
.nav_nav .cur {
  color: #4786ff !important;
  border-bottom: 3px solid #4786ff;
}
.nav_nav a img {
  padding-right: 5px;
}
.nav_nav .cur > .xzyc {
  display: none;
}
.nav_nav .cur > .xzcx {
  display: inline-block;
}
.nav_nav li:hover a {
  color: #4786ff !important;
  border-bottom: 3px solid #4786ff;
}
.nav_nav li:hover .cur {
  color: #4786ff !important;
}

a.router-link-active {
  color: #4786ff !important;
  border-bottom: 3px solid #4786ff;
}
li.router-link-active a {
  color: #4786ff !important;
  border-bottom: 3px solid #4786ff;
}
</style>