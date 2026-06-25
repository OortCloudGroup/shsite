<template>
  <div class="home_page vls">
    <div class="top">
      <div class="title1 ">
        借用开发者
      </div>
      <div class="title2 m30">
        由 OortCloud 提供予 OortCloud 合作伙伴的服务
      </div>
      <div class="developerBox m30">
        <div class="left">
          <div class="title1" style="font-size: 32px;">
            ¥ 2500 / 天
          </div>
          <div class="title3">
            经验丰富的开发人员
          </div>
        </div>
        <div class="line" />
        <div class="right">
          <div class="title1" style="font-size: 32px;">
            ¥ 3000 / 天
          </div>
          <div class="title3">
            项目经理
          </div>
        </div>
      </div>
      <div class="button_list">
        <div class="buttom m30">
          免费试用
        </div>
        <div class="buttom m30" style="background-color: #eb691c;">
          预约咨询
        </div>
      </div>
    </div>
    <div class="main">
      <div class="box1">
        <div class="title1 ">
          按月收费：用多少，付多少
        </div>
        <div class="title2 m30">
          享用经验丰富的 OortCloud 开发人员服务
        </div>
        <div class="title3 m30">
          享用最有经验的 OortCloud 开发者。我们的开发者来自 OortCloud 研发部门。您日常使用的 OortCloud 软件，就是他们努力的成果！<br />
          每个项目都将包括一名 OortCloud 项目经理，帮助您从头到尾完成所有工作。
        </div>
        <div class="title2 m30">
          根据实际需要，一人开发团队可轻松扩展至 20 名开发人员，<br />
          无需承担长期承诺。
        </div>
      </div>
      <div class="box2">
        <div class="box2_left">
          <div class="title1">
            有兴趣吗？
          </div>
          <div class="title2">
            欢迎测试此服务，完全免费！
          </div>
          <div class="title3 m30" style="color: #9ea3aa;">
            需要开发特定功能？只需发送一份说明书,<br />
            即可免费测试我们的服务。无需承诺，3个<br />
            开放日内即可获得反馈：
          </div>
          <div class="title3 m30" style="color: #9ea3aa;">
            <div class="title3 pf30" style="color: #9ea3aa;">
              1、提交技术规格<br />
              2、我们进行技术评估<br />
              3、我们会在 2-3 天内回复以下资料：
              <div class="title3 pf60">
                <div class="flexRow">
                  <span class="point" /> 技术反馈<br />
                </div>
                <div class="flexRow">
                  <span class="point" />报价<br />
                </div>
                <div class="flexRow">
                  <span class="point" />提议见面/视频会议安排
                </div>
              </div>
            </div>
          </div>
          <div class="title3 m30" style="color: #9ea3aa;">
            如果暂无写好的技术规范，欢迎安排会议，我们将为您撰写规格详情。
          </div>
        </div>
        <div class="box2_right">
          <el-form :model="form" label-width="auto">
            <el-form-item label="公司">
              <el-input v-model="form.company" />
            </el-form-item>
            <el-form-item label="名字">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="电子邮件">
              <el-input v-model="form.email" />
            </el-form-item>
            <el-form-item label="电话">
              <el-input v-model="form.telephone" />
            </el-form-item>
            <el-form-item label="简短标题" class="longer">
              <el-input v-model="form.title" />
            </el-form-item>
            <el-form-item label="规格" class="longer">
              <el-input v-model="form.specification" />
            </el-form-item>
            <el-form-item label="额外说明" class="longer">
              <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
          </el-form>
          <el-button type="primary" size="large" style="font-size: 20px;">
            提交
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ElForm, ElFormItem, ElInput } from 'element-plus'
const form = reactive({
  name: '',
  company: '',
  email: '',
  telephone: '',
  specification: '',
  title: '',
  desc: ''
})
definePageMeta({
  layout: 'site-new'
})

</script>

<style scoped lang="scss">
.home_page {
  position: relative;
}

.home_page.vls {
  background-color: #fff;
}

.w1380 {
  width: 1380px;
  margin: 0 auto;
}
.top{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  background: url('@/assets/img/custom_img1.png');
  background-size: cover;
}

.title1{
  font-size: 56px;
  font-weight: 700;
}
.title2{
  font-size: 24px;
  font-weight: 700;
}
.title3{
  font-size: 20px;
  font-weight: 400;
}
.m30{
  margin-top: 30px;
}
.pf30{
 padding-left: 30px;
}
.pf60{
 padding-left: 60px;
 margin-top: 10px;
}
.developerBox{
  display: flex;
  justify-content: space-between;
  width: 500px;
  .line{
    width: 1px;
    height: 100px;
    background-color: black;
  }
}
.button_list{
  display: flex;
}
.buttom{
  cursor: pointer;
  // height: 24px;
  padding: 12px 24px;
  margin-left: 20px;
  background-color: #2278ff;
  border-radius: 8px;
  color: #fff;
}
.box1{
  margin-top: 100px;
  margin-bottom: 160px;
  text-align: center;
}
.box2{
    display: flex;
  .box2_left{
    width: 500px;
    padding: 60px;
  }
  .box2_right{
    width: calc(100% - 700px);
    padding: 60px 100px;
    background-color: #f9f9f9;
  }
}
.point{
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #9ea3aa;
  margin-right: 10px;
}

.flexRow{
  display: flex;
  align-items: center;
}
.el-form{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .el-form-item{
    width: 450px;
    margin-bottom: 30px;
  }
  .longer{
    width: 1010px;
  }
}

:deep(.el-input__wrapper){
  height: 40px;
  padding: 5px 11px;
}
:deep(.el-form-item__label){
  font-size: 20px;
  margin-right: 20px;
  color: #3c3c3c;
}
:deep(.el-textarea__inner){
  height: 200px;
}
.el-button{
  margin-left: 170px;
  margin-top: 30px;
  padding: 20px 40px;
}
:deep(.el-input__inner){
    font-size: 20px;
}
:deep(.el-form-item__label-wrap){
  align-items: center;
}
</style>
