<template>
  <div id="app">
    <v-header v-if="showMenu"></v-header>
    <v-menu  v-if="showMenu"></v-menu>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header';
import menu from '@/components/menu';
import { getCookie } from '@/config/cookie';

export default {
  name: 'app',
  components: {
    'v-header': header,
    'v-menu': menu,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  watch: {
    $route: 'checkLogin',
  },
  methods: {
    checkLogin() {
      const arr = ['login'];
      this.match(arr);
      if (this.showMenu && !getCookie('platform_user')) {
        // 如果没有登录状态则跳转到登录页
        this.$router.push('/login');
      }
    },
    match(arr) {
      this.showMenu = arr.every((d) => {
        const r = !location.hash.match(d);
        return r;
      });
    },
  },
};
</script>

<style lang="scss">
  @import 'assets/css/common.scss';
</style>
