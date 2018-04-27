<template>
  <section class="index_content clearfix">
    <div class="col-md-10 col-md-offset-1">
      <div class="index_table">
        <div class="index_table_search">
          <form class="form-inline">
            <div class="form-group">
              <label for="">企业名称</label>           
              <div style="width: 180px;display: inline-block;"><el-input v-model="name" placeholder="请输入企业名称"></el-input></div>
            </div>
            <div class="form-group">
              <label for="">机构名称</label>
              <div style="width: 180px;display: inline-block;"><el-input v-model="organizName" placeholder="请输入机构名称"></el-input></div>
            </div>
            <div class="form-group">
              <label for="">时间</label>
              <el-date-picker
                v-model="startTime"
                type="date"
                placeholder="起始时间">
              </el-date-picker>
              <span class="text-center">至</span>
              <el-date-picker
                v-model="endTime"
                type="date"
                placeholder="结束时间">
              </el-date-picker>
            </div>
            <div class="form-group">
              <label for="">状态</label>
              <el-select v-model="state" placeholder="请选择">
                <el-option
                  v-for="(k, v) of status"
                  :key="v"
                  :label="k"
                  :value="v">
                </el-option>
              </el-select>
            </div>
            <el-button type="primary" @click="search(1, 2)">搜索</el-button>
          </form>
        </div>
        <span v-if="lists.length === 0">无数据</span>
        <div v-show="lists.length > 0">
          <table class="table table-hover">
            <thead>
              <tr class="table_tit">
                <th>序号</th>
                <th>企业名称</th>
                <th>申报机构</th>
                <th>申报官</th>
                <th>状态</th>
                <th>申报时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) of lists">
                <td><b>{{item.id}}</b></td>
                <td>{{item.name}}</td>
                <td>{{item.organizName}}</td>
                <td>{{item.declarerName}}</td>
                <td>{{item.state}}</td>
                <td>{{item.createTime}}</td>
                <td class="gc_list">
                  <router-link :to="'/entmgt/detail/' + item.id">查看详情</router-link>
                </td>
              </tr>
            </tbody>
          </table>
          <v-pagination :page="pages" @nextPage="search"></v-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import pagination from '@/components/pagination';
import { PLATFORM_GET_DECLARER_ENTERPRISE_QUERY, PLATFORM_GET_DECLARER_ENTERPRISE_COUNT } from '@/config/env';
import { formatDate } from '@/config/utils';
import { DatePicker, Input, Select, Option, Button } from 'element-ui';

export default {
  name: 'list',
  data() {
    return {
      lists: [],
      page: 1,
      rows: 10,
      pages: 0,
      name: '',
      organizName: '',
      startTime: '',
      endTime: '',
      state: '',
      status: {
        '': '请选择',
        waitPending: '申报材料待初审',
        waitUnPending: '申报材料初审未通过',
        waitPended: '申报材料初审通过',
        waitAudit: '申报材料待复审',
        unPass: '申报材料复审未通过',
        pass: '申报材料复审已通过',
        wait: '系统服务费待支付',
        pending: '入库材料待初审',
        collectting: '待认证官上门采集',
        confirmFailed: '入库材料初审未通过',
        reject2: '认证官采集未完成',
        pending2: '认证材料待复审',
        confirm2Failed: '认证材料复审未通过',
        passed: '认证材料复审已通过',
      },
    };
  },
  methods: {
    async search(page, type) {
      const param = {};
      param.name = this.name;
      param.organizName = this.organizName;
      param.state = this.state;
      if (this.startTime) {
        param.startTime = new Date(this.startTime).getTime();
      }
      if (this.endTime) {
        param.endTime = new Date(this.endTime).getTime();
      }
      param.page = page;
      param.rows = this.rows;
      const res = await this.$xhr('get', PLATFORM_GET_DECLARER_ENTERPRISE_QUERY, param);
      if (res.data.code === 0) {
        this.lists = res.data.data;
        this.lists.forEach((o) => {
          o.state = this.status[o.state];
          o.createTime = formatDate(new Date(o.createTime), 'yyyy-MM-dd');
        });
      }
      const param2 = {};
      param2.name = this.name;
      param2.organizName = this.organizName;
      if (this.startTime) {
        param2.startTime = new Date(this.startTime).getTime();
      }
      if (this.endTime) {
        param2.endTime = new Date(this.endTime).getTime();
      }
      param2.state = this.state;
      if (type === 2) {
        this.pages = 0;
      }
      const res2 = await this.$xhr('get', PLATFORM_GET_DECLARER_ENTERPRISE_COUNT, param2);
      if (res2.data.success) {
        this.pages = Math.ceil(res2.data.data / param.rows);
      }
    },
  },
  components: {
    'v-pagination': pagination,
    'el-date-picker': DatePicker,
    'el-input': Input,
    'el-select': Select,
    'el-option': Option,
    'el-button': Button,
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