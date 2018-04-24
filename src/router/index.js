import Vue from 'vue';
import Router from 'vue-router';

const login = r => require.ensure([], (require) => { r(require('@/page/login')); }, 'login');
const agencymgtlist = r => require.ensure([], (require) => { r(require('@/page/agencymgt/list')); }, 'agencymgtlist');
const agencymgtdetail = r => require.ensure([], (require) => { r(require('@/page/agencymgt/detail')); }, 'agencymgtdetail');
const entmgtlist = r => require.ensure([], (require) => { r(require('@/page/entmgt/list')); }, 'entmgtlist');
const entmgtdetail = r => require.ensure([], (require) => { r(require('@/page/entmgt/detail')); }, 'entmgtdetail');
const officermgtlist = r => require.ensure([], (require) => { r(require('@/page/officermgt/list')); }, 'officermgtlist');
const officermgtdetail = r => require.ensure([], (require) => { r(require('@/page/officermgt/detail')); }, 'officermgtdetail');
const examEdit = r => require.ensure([], (require) => { r(require('@/page/exam/edit')); }, 'examEdit');
const examView = r => require.ensure([], (require) => { r(require('@/page/exam/view')); }, 'examView');
const examList = r => require.ensure([], (require) => { r(require('@/page/exam/list')); }, 'examList');
const examNew = r => require.ensure([], (require) => { r(require('@/page/exam/new')); }, 'examNew');
const examDetail = r => require.ensure([], (require) => { r(require('@/page/exam/detail')); }, 'examDetail');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/agencymgt/list',
      name: 'agencymgtlist',
      component: agencymgtlist,
    },
    {
      path: '/agencymgt/detail/:id',
      name: 'agencymgtdetail',
      component: agencymgtdetail,
    },
    {
      path: '/entmgt/list',
      name: 'entmgtlist',
      component: entmgtlist,
    },
    {
      path: '/entmgt/detail/:id',
      name: 'entmgt',
      component: entmgtdetail,
    },
    {
      path: '/officermgt/list',
      name: 'officermgtlist',
      component: officermgtlist,
    },
    {
      path: '/officermgt/detail/:id',
      name: 'officermgtdetail',
      component: officermgtdetail,
    },
    {
      path: '/exam/edit/:id',
      name: 'examEdit',
      component: examEdit,
    },
    {
      path: '/exam/view/:id',
      name: 'examView',
      component: examView,
    },
    {
      path: '/exam/list',
      name: 'examList',
      component: examList,
    },
    {
      path: '/exam/new',
      name: 'examNew',
      component: examNew,
    },
    {
      path: '/exam/detail/:id',
      name: 'examDetail',
      component: examDetail,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
  ],
});
