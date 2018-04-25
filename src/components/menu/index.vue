<template>
  <nav class="index_nav clearfix">
    <div class="col-md-10 col-md-offset-1">
      <ul class="clearfix nav_nav">
        <li v-for="(v, k) of menu" @click="toActive(v)">
          <router-link :class="{cur: v.active}"  :to="v.link">
            <img class="xzyc" :src="v.icon1" />
            <img class="xzcx" :src="v.icon2" />
            {{v.title}}
          </router-link>
        </li>
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

export default {
  name: 'lmenu',
  data() {
    return {
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
      menu: {
        agencymgt: {
          title: '申报机构管理',
          icon: icon1,
          icon2: icon11,
          link: '/agencymgt/list',
          active: true,
        },
        officermgt: {
          title: '申报官管理',
          icon: icon2,
          icon2: icon22,
          link: '/officermgt/list',
          active: false,
        },
        entmgt: {
          title: '申报企业管理',
          icon: icon3,
          icon2: icon33,
          link: '/entmgt/list',
          active: false,
        },
        XXXX: {
          title: '网站管理',
          icon: icon4,
          icon2: icon44,
          link: '/XXXX',
          active: false,
        },
        exam: {
          title: '考试系统',
          icon: icon5,
          icon2: icon55,
          link: '/exam/list',
          active: false,
        },
      },
    };
  },
  methods: {
    toActive(m) {
      Object.values(this.menu).forEach((o) => {
        o.active = false;
      });
      m.active = true;
    },
  },
  mounted() {
    if (location.hash.match('agencymgt')) {
      this.toActive(this.menu.agencymgt);
    } else if (location.hash.match('officermgt')) {
      this.toActive(this.menu.officermgt);
    } else if (location.hash.match('entmgt')) {
      this.toActive(this.menu.entmgt);
    } else if (location.hash.match('XXXX')) {
      this.toActive(this.menu.XXXX);
    } else if (location.hash.match('exam')) {
      this.toActive(this.menu.exam);
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