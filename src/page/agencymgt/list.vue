<template>
  <section class="index_content clearfix">
    <div class="col-md-10 col-md-offset-1">
      <div class="index_table">
        <div class="index_table_search">
          <form class="form-inline">
            <div class="form-group">
              <label for="">姓名</label>           
              <input type="text" v-model="name">
            </div>
            <div class="form-group">
              <label for="">手机号码</label>
              <input type="text" v-model="cellphone">
            </div>
            <div class="form-group">
              <label for="">时间</label>
              <input name="" type="text" placeholder="起始时间" v-model="startTime"/>
              <span class="text-center">至</span>
              <input name="" type="text" placeholder="结束时间" v-model="endtime"/>
            </div>
            <div class="form-group">
              <label for="">状态</label>
              <select v-model="state">
                <option value="">请选择</option>
                <option v-for="(k, v) of status" :value="v">{{k}}</option>
              </select>
            </div>
            <button class="btn btn_search" @click="search(1, 2)">搜索</button>
          </form>
        </div>
        <table class="table table-hover">
          <thead>
            <tr class="table_tit">
              <th>序号</th>
              <th>姓名</th>
              <th>手机号码</th>
              <th>推荐机构</th>
              <th>企业名称</th>
              <th>提交时间</th>
              <th>审核状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) of lists">
              <td><b>{{index + 1}}</b></td>
              <td>{{item.name}}</td>
              <td>{{item.cellphone}}</td>
              <td>{{item.recommentName}}</td>
              <td>{{item.organizName}}</td>
              <td>{{item.createTime}}</td>
              <td>{{item.stateNm}}</td>
              <td class="gc_list">
                <router-link v-if="item.state !== 'baseWaitSubmit'" :to="'/agencymgt/detail/' + item.id">查看详情</router-link>
              </td>
            </tr>
          </tbody>
        </table>
        <v-pagination :page="pages" @nextPage="search"></v-pagination>
      </div>
    </div>
  </section>
</template>

<script>
import pagination from '@/components/pagination';
import { PLATFORM_GET_ORGANIZ_QUERY, PLATFORM_GET_ORGANIZ_COUNT } from '@/config/env';
import { formatDate } from '@/config/utils';

export default {
  name: 'list',
  data() {
    return {
      lists: [],
      page: 1,
      rows: 10,
      pages: 0,
      name: '',
      cellphone: '',
      startTime: '',
      endtime: '',
      state: '',
      status: {
        baseWaitSubmit: '基本信息待填写',
        baseWaitPending: '基本信息待初审',
        baseWaitUnPending: '基本信息初审未通过',
        baseWaitPended: '基本信息初审通过',
        baseWaitAudit: '基本信息待审核',
        baseUnPass: '基本信息未通过',
        basePass: '基本信息通过',
        registWaitSubmit: '登记信息待填写',
        registWaitPending: '登记信息待初审',
        registWaitUnPending: '登记信息初审未通过',
        registWaitPended: '登记信息初审通过',
        registWaitAudit: '登记信息待审核',
        registUnPass: '登记信息未通过',
        registPass: '登记信息审核通过',
        delete: '已删除',
        passed: '通过审核',
      },
    };
  },
  methods: {
    async search(page, type) {
      const param = {};
      param.name = this.name;
      param.cellphone = this.cellphone;
      param.startTime = this.startTime;
      param.endtime = this.endtime;
      param.state = this.state;
      param.page = page;
      param.rows = this.rows;
      const res = await this.$xhr('get', PLATFORM_GET_ORGANIZ_QUERY, param);
      if (res.data.code === 0) {
        this.lists = res.data.data;
        this.lists.forEach((o) => {
          o.state = o.state;
          o.stateNm = this.status[o.state];
          o.createTime = formatDate(new Date(o.createTime), 'yyyy-MM-dd');
        });
      }
      const param2 = {};
      param2.name = this.name;
      param2.cellphone = this.cellphone;
      param2.startTime = this.startTime;
      param2.endtime = this.endtime;
      param2.state = this.state;
      if (type === 2) {
        this.pages = 0;
      }
      const res2 = await this.$xhr('get', PLATFORM_GET_ORGANIZ_COUNT, param2);
      if (res2.data.success) {
        this.pages = Math.ceil(res2.data.data / param.rows);
      }
    },
  },
  components: {
    'v-pagination': pagination,
  },
  mounted() {
    this.search(this.page);
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';

.current a {
  color: #000 !important;
}
.index_content {
  margin-top: 50px;
}
.index_table {
  background: #fff;
  padding: 40px;
  border-radius: 4px 4px 0 0;
  min-height: 600px;
}
.index_table_search {
  margin-bottom: 40px;
}
.btn_search {
  padding: 6px 40px;
  background: #4786ff;
  border-radius: 20px;
  color: #fff;
  margin-bottom: 20px;
}
.index_table_search .form-group {
  margin-right: 30px;
}
.index_table_search input, .index_table_search select {
  padding: 5px 10px;
  border: 1px solid #ddd;
  max-width: 150px;
  margin-bottom: 20px;
}
table {
  border: 1px solid #ddd;
}
.index_table nav {
  margin-top: 80px;
}
.index_table .table>thead>tr>th {
  border-bottom: 0;
  padding: 15px 8px;
  min-width: 80px;
}
.index_table .table>tbody>tr>td {
  padding: 12px 8px;
}
.gc_list a {
  padding-right: 15px;
  color: #4786ff !important;
}
.back_icon {
  color: #ababab;
  padding: 5px 30px;
  border: 1px solid #d4d4d4;
  border-radius: 20px;
  letter-spacing: 5px;
  float: left;
  margin-top: 5px;
}
.back_icon img {
  padding-right: 10px;
}
.index_table_con .form-group {
  margin: 30px 0;
}
.index_table_con a:hover {
  color: #fff;
}
.index_table_tit {
  margin-bottom: 30px;
}
.index_table_tit .nav-tabs {
  border-bottom: 0;
  width: 280px;
  margin: auto;
}
.index_table_tit .nav-tabs li {
  width: 50%;
  text-align: center;
}
.index_table_tit .nav-tabs>li>a {
  margin-right: 0;
  border: 1px solid #efefef;
  border-radius: 0;
  font-size: 14px;
  font-weight: 600;
  background: #f9f9f9;
}
.index_table_tit .nav-tabs>li>a:hover {
  background: #fff;
  border: 1px solid #efefef;
}
.index_table_tit .nav-tabs>li.active>a {
  border: 1px solid #fff;
  border-radius: 0;
  background: #fff;
}
</style>