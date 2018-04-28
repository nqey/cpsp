<template>
  <section class="index_content clearfix">
    <div class="col-md-10 col-md-offset-1">
      <div class="index_table">
        <div class="index_table_search">
          <form class="form-inline">
            <div class="form-group">
              <label for="">姓名</label>           
              <div style="width: 180px;display: inline-block;"><el-input v-model="name" placeholder="请输入姓名"></el-input></div>
            </div>
            <div class="form-group">
              <label for="">手机号码</label>
              <div style="width: 180px;display: inline-block;"><el-input v-model="cellphone" placeholder="请输入手机号码"></el-input></div>
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
            <div class="form-group">
            <el-button type="primary" @click="search(1, 2)">搜索</el-button>
          </div>
          </form>
        </div>
        <span v-if="lists.length === 0">无数据</span>
        <div v-show="lists.length > 0">
          <table class="table table-hover">
            <thead>
              <tr class="table_tit">
                <th>序号</th>
                <th>姓名</th>
                <th>手机号码</th>
                <th>提交机构</th>
                <th>申请项</th>
                <th>提交时间</th>
                <th>状态</th>
                <th>考试分数</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) of lists">
                <td><b>{{item.snId}}</b></td>
                <td>{{item.name}}</td>
                <td>{{item.cellphone}}</td>
                <td>{{item.organizName}}</td>
                <td>{{declareProduct[item.product]}}</td>
                <td>{{item.createTime}}</td>
                <td>
                  <span :style="trafficLight[item.state]">{{status[item.state]}}</span>
                </td>
                <td>{{item.score === -1 ? '未考试' : item.score}}</td>
                <td class="gc_list">
                  <router-link :to="'/officermgt/detail/' + item.id">查看详情</router-link>
                  <a v-if="item.state === '删除中'" @click="deleteOfficer(item.id)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
          <v-pagination :page="pages" :total="count" @nextPage="search"></v-pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import pagination from '@/components/pagination';
import { PLATFORM_GET_DECLARER_QUERY, PLATFORM_GET_DECLARER_COUNT, PLATFORM_DELETE_DECLARER, TRAFFIC_LIGHT } from '@/config/env';
import { formatDate } from '@/config/utils';
import { DatePicker, Input, Select, Option, Button, MessageBox } from 'element-ui';

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
      endTime: '',
      state: '',
      count: 0,
      status: {
        '': '请选择',
        waitPending: '待初审',
        waitAudit: '待审核',
        unpass: '未通过',
        passed: '已通过',
        delete: '删除中',
        deleted: '已删除',
      },
      trafficLight: {
        waitPending: TRAFFIC_LIGHT.yellow,
        waitAudit: TRAFFIC_LIGHT.yellow,
        unpass: TRAFFIC_LIGHT.red,
        passed: TRAFFIC_LIGHT.green,
        delete: TRAFFIC_LIGHT.red,
        deleted: TRAFFIC_LIGHT.red,
      },
      declareProduct: {
        create: '创建',
        delete: '删除',
      },
    };
  },
  methods: {
    async deleteOfficer(id) {
      MessageBox({
        title: '提示',
        message: '此操作将永久删除该数据, 是否继续?',
        showCancelButton: true,
        showConfirmButton: true,
        type: 'warning',
      }).then(async () => {
        const param = {};
        param.reason = '无';
        const res = await this.$xhr('post', `${PLATFORM_DELETE_DECLARER}${id}`, param);
        if (res.data.code === 0) {
          this.search(this.page);
        }
      }).catch(() => {
      });
    },
    async search(page, type) {
      const param = {};
      param.name = this.name;
      param.cellphone = this.cellphone;
      if (this.startTime) {
        param.startTime = new Date(this.startTime).getTime();
      }
      if (this.endTime) {
        param.endTime = new Date(this.endTime).getTime();
      }
      param.state = this.state;
      param.page = page;
      param.rows = this.rows;
      const res = await this.$xhr('get', PLATFORM_GET_DECLARER_QUERY, param);
      if (res.data.code === 0) {
        this.lists = res.data.data;
        this.lists.forEach((o) => {
          o.createTime = formatDate(new Date(o.createTime), 'yyyy-MM-dd hh:mm:ss');
        });
      }
      const param2 = {};
      param2.name = this.name;
      param2.cellphone = this.cellphone;
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
      const res2 = await this.$xhr('get', PLATFORM_GET_DECLARER_COUNT, param2);
      if (res2.data.success) {
        this.pages = Math.ceil(res2.data.data / param.rows);
        this.count = res2.data.data;
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
 margin-right:20px;
  margin-bottom: 15px;
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