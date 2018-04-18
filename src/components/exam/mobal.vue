<template>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> 
      <div class="modal-dialog" role="document"> 
        <div class="modal-content"> 
          <div class="modal-header clearfix"> 
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> 
          </div> 
          <div class="modal-body wzys"> 
            <div class="clearfix txxz"> 
              <div class="col-md-4">
                当前题型： 
                <span class="size_color">单选题</span> 
              </div> 
              <div class="col-md-4">
                转换题型： 
                <select v-model="type">
                  <option v-for="(v, k) of subjectType" :value="k">{{v}}</option>
                </select> 
              </div> 
            </div> 
            <div class="row clearfix"> 
              <div class="col-md-9"> 
                <div class="bjst"> 
                  <div class="bjst_tit clearfix"> 
                    <a class="pull-right">插入图片或视频</a> 
                  </div> 
                  <textarea title="" v-model="title" class="inputtext" placeholder="请选择您认为正确的答案"></textarea> 
                </div> 
              </div> 
            </div> 
            <div class="stnr"> 
              <div class="row clearfix"> 
                <table class="table"> 
                  <thead> 
                    <tr class="table_tit"> 
                      <th>提示文字</th> 
                      <th>图片</th> 
                      <th>说明</th> 
                      <th>正确答案</th> 
                      <th>操作</th> 
                    </tr> 
                  </thead> 
                  <tbody> 
                    <tr> 
                      <td><input type="text" value="选项A" /></td> 
                      <td><img :src="tp" /></td> 
                      <td><img :src="sm" /></td> 
                      <td><label class="checkbox-inline"><input type="checkbox" id="inlineCheckbox1" value="option1" /></label></td> 
                      <td class="gc_list"><a href="#"><img :src="tj" /></a><a href="#"><img :src="jy" /></a><a href="#"><img :src="sy" /></a><a href="#"><img :src="xy" /></a></td> 
                    </tr> 
                    <tr> 
                      <td><input type="text" value="选项B" /></td> 
                      <td><img :src="tp" /></td> 
                      <td><img :src="sm" /></td> 
                      <td><label class="checkbox-inline"><input type="checkbox" id="inlineCheckbox2" value="option2" /></label></td> 
                      <td class="gc_list"><a href="#"><img :src="tj" /></a><a href="#"><img :src="jy" /></a><a href="#"><img :src="sy" /></a><a href="#"><img :src="xy" /></a></td> 
                    </tr> 
                  </tbody> 
                </table> 
                <div class="clearfix dajx"> 
                  <div class="col-md-4"> 
                    <label for="">题目分数</label> 
                    <select><option>5</option><option>8</option><option>10</option></select> 
                  </div> 
                  <div class="col-md-8"> 
                    <div class="text-right"> 
                      <a class="green" role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">设置答案解析 </a> 
                      <div class="collapse" id="collapseExample"> 
                        <textarea title="" class="inputtext" placeholder="设置答案解析"></textarea> 
                      </div>
                    </div>
                  </div> 
                </div> 
              </div> 
            </div> 
            <button class="btn wcbj">完成编辑</button> 
          </div> 
        </div> 
      </div> 
    </div>
</template>

<script>
import bj from '@/assets/img/bj.png';
import cz from '@/assets/img/cz.png';
import sc from '@/assets/img/sc.png';
import sy from '@/assets/img/sy.png';
import xy from '@/assets/img/xy.png';
import zq from '@/assets/img/zq.png';
import sm from '@/assets/img/sm.png';
import tp from '@/assets/img/tp.png';
import tj from '@/assets/img/tj.png';
import jy from '@/assets/img/jy.png';
import zh from '@/assets/img/zh.png';

export default {
  name: 'mobal',
  data() {
    return {
      bj,
      cz,
      sc,
      sy,
      xy,
      zq,
      sm,
      tp,
      tj,
      jy,
      zh,
      type: '1',
      subjectType: {
        1: '单选题',
        2: '多选题',
        3: '简答题',
        4: '填空题',
        5: '判断题',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';

.btn:hover {
  color: #fff !important;
}
.req {
  color: #f0820c;
  margin-right: 30px;
}
.red {
  color: red;
}
.color_qf {
  color: #4786ff !important;
}
.green {
  color: #01c853 !important;
}
.tgsh {
  color: #828282;
}
.size_color {
  color: #888888;
}
.tsy {
  padding: 1px 6px;
  border-radius: 180px;
  background: #4786ff;
  color: #fff;
  font-size: 0.1em;
  margin-left: 5px;
}
.btn_sure, .btn_waive {
  padding: 6px 30px;
  margin: 0 5px;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  min-width: 130px;
}
.btn_dc {
  background: #DBE7FF;
  padding: 3px 30px;
  margin: 0 5px;
  font-size: 12px;
  border-radius: 20px;
  color: #4344fe !important;
}
.btn_dc:hover {
  color: #4344fe !important;
}
.btn_sure {
  background: #4344fe;
  color: #fff !important;
}
.glyphicon-chevron-down {
  color: #fff;
}
.btn_waive {
  background: #555555;
}
.btn_gg {
  background: #dbe7ff;
  color: #4344fe;
  margin-left: 30px;
  border-radius: 20px;
  width: 130px;
}
.btn_gg:hover {
  background: #c4d7ff;
  color: #4344fe !important;
}
.btn_fz {
  background: #01c853;
  color: #fff;
  width: 152px;
  border-radius: 18px;
}
.index_header {
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
  margin-left: 15px;
}
.back_icon:hover{ color:#ababab !important;}
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
  color: #fff !important;
}
.scsz .form-group label {
  margin-right: 30px;
}
.scsz .form-group input {
  width: 180px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-bottom: 20px;
}
.scsz .mrts {
  margin-left: 90px;
  color: #a7a7a7;
}
.scsz button {
  display: block;
  width: 280px;
  margin: 20px auto;
}
.inputtext_ck {
  background: #f6f6f6 !important;
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
.txxz select{  border:1px solid #ddd; padding:0 5px; border-radius:4px;}
.dajx{ line-height:30px;}
.dajx a{ color:#01c853 !important; border-bottom:1px solid #01c853; padding-bottom:2px;}
.bjst {
  border: 1px solid #ddd;
}
.bjst .inputtext {
  background: #fff;
}
label{ margin-bottom:0 !important;}
.txsz {
  margin-top: 40px;
}
.stnr {
  padding: 15px;
}
.stnr input,.stnr select{
  border:1px solid #ddd; border-radius:4px;padding:3px;
}
.stnr select{ margin-left:10px;}
.wcbj {
  background: #01c853;
  width: 100%;
  border-radius: 20px;
  color: #fff;
}
.btgyy {
  padding: 15px 0 25px 0;
}
.yz_correct {
  width: 360px;
  margin: auto;
}
.yz_correct button {
  background: #01c853;
  width: 240px;
  margin: auto;
  color: #fff;
  letter-spacing: 5px;
  border-radius: 18px;
}
</style>