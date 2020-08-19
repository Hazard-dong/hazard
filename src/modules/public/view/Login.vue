<!--Created by Hazard on 2018/4/24.-->
<template>
  <div class="login" data-flex="main:center cross:center" v-if="!isRedirect">
    <el-card class="card">
      <div slot="header" data-flex="cross:center box:last">
        <span>用户登录</span>
      </div>
      <el-form label-width="60px" class="m-h-20 full-width">
        <el-form-item label="用户名">
          <el-input type="text" v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
      </el-form>
      <div data-flex="main:right">
        <el-button type="primary" @click="login">登录</el-button>
      </div>
      <div class="c-info">测试账号：admin/test  密码：123456</div>
    </el-card>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

export default @Component class Login extends Vue {
  /* vue-props */
  /* vue-vuex */
  /* vue-data */
  user = {
    name: 'admin',
    password: '123456'
  }
  isRedirect = true
  /* vue-compute */
  /* vue-watch */

  /* vue-lifecycle */
  created () {
  }

  /* vue-method */

  // 用户登录
  async login () {
    console.log(111)
  }
}
</script>
<style lang="scss" scoped>
  @import "../../../assets/css/vars.scss";
  .login{
    background-color: $bg0;
  }
</style>
