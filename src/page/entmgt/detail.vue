<template>
  <section class="index_content clearfix">
    <div class="col-md-10 col-md-offset-1">
      <div class="index_table_tit clearfix">
        <router-link class="btn back_icon" to="/entmgt/list"><img :src="backicon" />返回</router-link>
      </div>
      <div v-if="reason" style="text-align: center;color: red;">
        <span class="glyphicon glyphicon-exclamation-sign"></span> <span style="position: relative;top:-1px;">{{reason}}</span>
      </div> 
      <div class="index_table index_table_con clearfix">
        <div class="col-md-10 col-md-offset-1">
          <div class="form-group clearfix">
            <div class="content_left"><b>企业名称</b></div>
            <div class="content_right clearfix">
              <p>{{name}}<span class="pull-right red"><b>{{statusNm}}</b></span></p>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="content_left"><b>企业负责人</b></div>
            <div class="content_right clearfix">
              <p>{{charger}}</p>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="content_left"><b>手机号码</b></div>
            <div class="content_right clearfix">
              <p>{{cellphone}}</p>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="content_left"><b>身份证号</b></div>
            <div class="content_right clearfix">
              <p>{{idNumber}}</p>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="content_left"><b>身份证照片</b></div>
            <div class="content_right">
              <div class="pull-left" v-if="idFrontUrl">
                <v-img :imgSrc="idFrontUrl"></v-img>
              </div>
              <div class="pull-left" v-if="idBackUrl">
                <v-img :imgSrc="idBackUrl"></v-img>
              </div>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="content_left"><b>营业执照</b></div>
            <div class="content_right">
              <div class="pull-left" v-for="url of licenseImageUrl">
                <v-img :imgSrc="url"></v-img>
              </div>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="content_left"><b>生产许可证</b></div>
            <div class="content_right">
              <div class="pull-left" v-for="url of productionImageUrl">
                <v-img :imgSrc="url"></v-img>
              </div>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="content_left"><b>资金补贴申请表</b></div>
            <div class="content_right">
              <div class="pull-left" v-for="url of capitalImageUrl">
                <v-img :imgSrc="url"></v-img>
              </div>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="content_left"><b>企业尽职调查表</b></div>
            <div class="content_right">
              <div class="pull-left" v-for="url of enterpriseSurveyImageUrl">
                <v-img :imgSrc="url"></v-img>
              </div>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="content_left"><b>企业负责人尽职调查表</b></div>
            <div class="content_right">
              <div class="pull-left" v-for="url of enterpriseChargerSurveyImageUrl">
                <v-img :imgSrc="url"></v-img>
              </div>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="content_left"><b>企业入库申请函</b></div>
            <div class="content_right">
              <div class="pull-left" v-for="url of enterpriseShindImageUrl">
                <v-img :imgSrc="url"></v-img>
              </div>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="content_left"><b>授权委托书</b></div>
            <div class="content_right">
              <div class="pull-left" v-for="url of authorizationImageUrl">
                <v-img :imgSrc="url"></v-img>
              </div>
            </div>
          </div>
          <div class="form-group clearfix">
            <div class="content_left"><b>其他补充材料</b></div>
            <div class="content_right">
              <div class="pull-left" v-for="url of otherImageUrl">
                <v-img :imgSrc="url"></v-img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="index_sh clearfix" v-if="isShowStatus">
        <div class="col-md-10 col-md-offset-1">
          <div class="form-group clearfix">
            <div class="content_left"><b>审核操作</b></div>
            <div class="content_right">
              <button v-show="isShowSubmit" class="btn btn_sure" data-event="pass" @click="submit(true)">通过</button>
              <button v-show="!isShowSubmit" class="btn btn_sure" data-event="pass" disabled>通过</button>
              <button class="btn btn_waive" data-event="reject" data-toggle="modal" data-target="#myModal">不通过</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel"><b>不通过原因</b></h4>
          </div>
          <div class="modal-body">
            <textarea title="" class="inputtext btg" placeholder="请输入不通过原因" v-model="reason"></textarea>
          </div>
          <div class="text-center btgyy">
            <button class="btn btn_sure" v-show="isShowSubmit" data-event="pass" data-toggle="modal" data-target="#myModal" @click="submit(false)">确认</button>
            <button class="btn btn_sure" v-show="!isShowSubmit" data-event="pass" data-toggle="modal" data-target="#myModal"  disabled>确认</button>
            <button class="btn btn_waive" data-event="reject" data-toggle="modal" data-target="#myModal">取消</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import backicon from '@/assets/img/back_icon.png';
import vimg from '@/components/img/img';
import { formatDate } from '@/config/utils';
import { PLATFORM_GET_DECLARER_ENTERPRISE_ID, PLATFORM_PUT_DECLARER_ENTERPRISE_AUDIT, PLATFORM_PUT_DECLARER_ENTERPRISE_WAITAUDIT, IMAGE_SERVER_URL } from '@/config/env';

export default {
  name: 'detail',
  data() {
    return {
      isShowSubmit: true,
      backicon,
      isShowStatus: true,
      authorizationImageUrl: '',
      capitalImageUrl: '',
      cellphone: '',
      charger: '',
      createTime: '',
      enterpriseChargerSurveyImageUrl: '',
      enterpriseShindImageUrl: '',
      enterpriseSurveyImageUrl: '',
      fkOrganizId: '',
      fkUserId: '',
      id: '',
      idBackUrl: '',
      idFrontUrl: '',
      idNumber: '',
      licenseImageUrl: '',
      modifyTime: '',
      name: '',
      otherImageUrl: '',
      productionImageUrl: '',
      state: '',
      reason: '',
      status: {
        waitPending: ['申报企业待初审', 'base'],
        waitUnPending: ['初审未通过', 'pass'],
        waitPended: ['初审通过', 'pass'],
        waitAudit: ['待审核', 'baseWait'],
        unPass: ['未通过', 'pass'],
        pass: ['已通过', 'pass'],
        wait: ['待支付', 'pass'],
        pending: ['企业入库待初审', 'pass'],
        collectting: ['待认证官上门采集', 'pass'],
        confirmFailed: ['初审未通过', 'pass'],
        reject2: ['认证官采集未通过', 'pass'],
        pending2: ['待复审', 'pass'],
        confirm2Failed: ['复审未通过', 'pass'],
        passed: ['通过审核', 'pass'],
      },
      statusNm: '',
      serverurl: IMAGE_SERVER_URL,
    };
  },
  methods: {
    async init() {
      const res = await this.$xhr('get', `${PLATFORM_GET_DECLARER_ENTERPRISE_ID}${this.$route.params.id}`);
      if (res.data.success) {
        this.cellphone = res.data.data.cellphone;
        this.charger = res.data.data.charger;
        this.fkOrganizId = res.data.data.fkOrganizId;
        this.fkUserId = res.data.data.fkUserId;
        this.id = res.data.data.id;
        this.idBackUrl = res.data.data.idBackUrl;
        this.idFrontUrl = res.data.data.idFrontUrl;
        this.idNumber = res.data.data.idNumber;
        this.modifyTime = res.data.data.modifyTime;
        this.name = res.data.data.name;
        if (res.data.data.capitalImageUrl) {
          this.capitalImageUrl = res.data.data.capitalImageUrl.split(',');
        }
        if (res.data.data.authorizationImageUrl) {
          this.authorizationImageUrl = res.data.data.authorizationImageUrl.split(',');
        }
        if (res.data.data.licenseImageUrl) {
          this.licenseImageUrl = res.data.data.licenseImageUrl.split(',');
        }
        if (res.data.data.productionImageUrl) {
          this.productionImageUrl = res.data.data.productionImageUrl.split(',');
        }
        if (res.data.data.enterpriseChargerSurveyImageUrl) {
          this.enterpriseChargerSurveyImageUrl = res.data.data.enterpriseChargerSurveyImageUrl.split(',');
        }
        if (res.data.data.enterpriseShindImageUrl) {
          this.enterpriseShindImageUrl = res.data.data.enterpriseShindImageUrl.split(',');
        }
        if (res.data.data.enterpriseSurveyImageUrl) {
          this.enterpriseSurveyImageUrl = res.data.data.enterpriseSurveyImageUrl.split(',');
        }
        if (res.data.data.otherImageUrl) {
          this.otherImageUrl = res.data.data.otherImageUrl.split(',');
        }
        this.createTime = formatDate(new Date(res.data.data.createTime), 'yyyy-MM-dd hh:mm:ss');
        this.registerTime = formatDate(new Date(res.data.data.registerTime), 'yyyy-MM-dd hh:mm:ss');
        this.state = res.data.data.state;
        this.reason = res.data.data.reason;
        this.statusNm = this.status[this.state][0];
        if (this.status[this.state][1] === 'pass') {
          this.isShowStatus = false;
        }
      }
    },
    async submit(state) {
      const param = {};
      param.state = state;
      param.reason = this.reason;
      let api;
      const status = this.status[this.state][1];
      if (status === 'base') {
        // 信息初审
        api = PLATFORM_PUT_DECLARER_ENTERPRISE_WAITAUDIT;
      } else if (status === 'baseWait') {
        // 信息复审
        api = PLATFORM_PUT_DECLARER_ENTERPRISE_AUDIT;
      }
      if (status !== 'pass') {
        this.isShowSubmit = !this.isShowSubmit;
        const res = await this.$xhr('post', `${api}${this.$route.params.id}`, param);
        if (res.data.code === 0) {
          this.$router.push('/entmgt/list');
        } else {
          this.isShowSubmit = !this.isShowSubmit;
        }
      }
    },
  },
  components: {
    'v-img': vimg,
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';

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
.index_sh {
  background: #f5f9fc;
  padding: 50px;
  margin-bottom: 80px;
}
.content_left {
  width: 16%;
  margin-right: 2%;
}
.content_right {
  width: 82%;
}
.content_right p {
  color: #6f6f6f;
}
.content_right img {
  padding-right: 20px;
}
.content_left, .content_right {
  float: left;
  line-height: 34px;
  letter-spacing: 2px;
}
.index_sh .btn {
  margin-right: 30px;
  width: 130px;
  outline: none;
  color: #fff;
  border-radius: 20px;
}
.content_right .zfzt {
  border: none;
}
.index_more {
  margin-bottom: 10px;
}
.index_more a {
  border-bottom: 1px solid #4344fe;
  color: #4344fe !important;
  line-height: 26px;
}
.index_more a:hover {
  color: #4344fe;
}
.wznr {
  margin-bottom: 0;
}
.wznr li {
  float: left;
  text-align: center;
  width: 16%;
  margin: 0 2%;
  border: 1px solid #ddd;
  height: 45px;
  line-height: 45px;
  border-radius: 4px;
}
.wznr .current {
  background: #fff;
  border: 1px solid #fff;
}
.wz_btn {
  width: 240px;
  padding: 10px;
  background: #4786ff;
}
.ks_search input {
  max-width: 220px !important;
  min-width: 220px;
  margin-bottom: 0;
}
.ks_search span {
  margin-left: -30px;
  top: 3px;
  color: #cacaca;
}
.index_table_btn .color_qf {
  width: 100px;
  text-align: center;
  border-radius: 20px;
  border: 1px solid #4786ff;
  background: none;
  margin-right: 15px;
}
.index_table_btn .color_qf:hover {
  color: #4786ff !important;
  background: #dbe7ff;
  border: 1px solid #dbe7ff;
}
.index_table_cont {
  margin: 40px;
}
.table_cont_top {
  position: relative;
  margin-bottom: 30px;
}
.table_cont_bottom {
  margin-top: 30px;
}
.table_cont_bottom input {
  border: none;
  width: 100%;
  background: none;
}
.fs_ewm {
  width: 50%;
  float: left;
  text-align: center;
}
.fs_ewm img {
  border: 1px solid #ddd;
  padding: 10px;
}
.fs_ewm a {
  position: absolute;
  bottom: 0;
  margin-bottom: 0;
  margin-left: -50px;
}
.table_cont_bottom span {
  background: #f0f5f8;
  padding: 10px;
  display: block;
  width: 60%;
  float: left;
  margin-right: 30px;
  color: #9c8f8f;
}
.ckkj_ks span {
  padding: 0 20px;
}
.ckkj_kt {
  background: #f8f8f8;
  padding: 40px 60px;
  margin-top: 40px;
}
.div_title_cut_question {
  font-size: 16px;
  padding: 2px 0;
  margin-bottom: 35px;
  line-height: 25px;
}
.div_title_question {
  overflow: hidden;
  zoom: 1;
  margin-bottom: 20px;
}
.div_table_radio_question {
  margin-bottom: 40px;
}
.div_title_question_all {
  padding-top: 2px;
  font-size: 14px;
  color: #444444;
  font-weight: bold;
  height: auto;
  line-height: 20px;
}
.div_table_radio_question li {
  margin: 10px 0;
  list-style-type: none;
  font-size: 14px;
}
.inputtext {
  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
  border: none;
  background: #fff;
  padding: 25px;
  line-height: 25px;
}
.btg {
  background: #f6f6f6 !important;
  min-height: 180px;
}
.inputtext_1 {
  border: 1px solid #ddd;
  min-height: 150px;
}
.ckkj_zq {
  margin-top: 30px;
}
.ht_cjks {
  padding-top: 10%;
}
.ht_cjks .btn {
  margin-top: 60px;
}
.tit_bjks {
  margin-bottom: 30px;
}
.tit_bjks img {
  margin-left: 20px;
}
.cjst_btn {
  margin: 25px 0 30px 0;
}
.cjst_btn ul li {
  width: 19%;
  float: left;
}
.cjst_btn ul li:nth-of-type(n+2) {
  margin-left: 1.25%;
}
.cjst_sttj .div_table_radio_question {
  border: 1px solid #ddd;
  border-radius: 4px;
}
.cjst_sttj .div_table_radio_question:hover {
  border: 1px solid #4786ff;
  cursor: pointer;
}
.cjst_sttj .div_title_question {
  padding: 15px 15px 0 15px;
}
.cjst_sttj .ulradiocheck {
  padding: 0 15px;
}
.cjst_sttj .inputtext {
  background: #f6f6f6;
}
.jdt_jj {
  padding: 0 15px 15px;
}
.cjks_txxg {
  padding: 18px;
  background: #f6fafc;
  color: #4786ff;
}
.div_table_radio_question:hover .cjks_txxg {
  display: block;
}
.crtx {
  border-bottom: 1px solid #4786ff;
  line-height: 32px;
}
.txxg_xx {
  margin-bottom: 0;
}
.txxg_xx li {
  float: left;
  width: 85px;
  margin: 0 5px;
  border: 1px solid #4786ff;
  border-radius: 20px;
  padding: 5px 2px;
}
.txxg_xx li a img {
  margin-right: 10px;
}
.wzys {
  color: #323232;
}
.bjst_tit {
  background: #f6fafc;
  padding: 10px;
}
.bjst_tit h5 {
  margin: 0;
  padding: 0;
  font-size: 16px;
}
.bjst_tit a {
  border-bottom: 1px solid #4786ff;
  color: #4786ff !important;
}
.txxz {
  margin-bottom: 15px;
}
.bjst {
  border: 1px solid #ddd;
}
.bjst .inputtext {
  background: #fff;
}
.txsz {
  margin-top: 40px;
}
.stnr {
  padding: 15px;
}
.wcbj {
  background: #01c853;
  width: 100%;
  border-radius: 20px;
  color: #fff;
}
.btgyy {
  padding: 15px 0 25px 0;
}
</style>