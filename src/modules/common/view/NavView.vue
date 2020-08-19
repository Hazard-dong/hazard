<!--Created by Hazard on 2020/4/25.-->
<template>
  <div data-flex="cross:center box:justify" class="nav p-h-10">
    <cc-icon name="menu" :rotate="menuExpand? 0 : 90" @click="toggleMenu" class="cp"/>
    <el-breadcrumb separator="/" class="m-l-10">
      <el-breadcrumb-item v-for="menu in nav" :key="menu.id">{{menu.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div data-flex="cross:center">
      <cc-theme-picker class="m-r-16"></cc-theme-picker>
      <cc-icon name="user" size="18" class="m-r-5"/>
      <span>{{user.name}}</span>
      <span class="m-h-5">|</span>
      <span>{{user.roleString}}</span>
      <cc-icon name="logout" size="18" class="m-l-16 cp" @click="onLogout"/>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { State, Mutation, Getter } from 'vuex-class'
import CcThemePicker from '../../../baseComponent/CcThemePicker'

export default @Component({components: {CcThemePicker}}) class NavView extends Vue {
  /* vue-props */
  /* vue-vuex */
  @State((state) => state.common.menuExpand) menuExpand
  @State((state) => state.common.menuTabs) menuTabs
  @State((state) => state.common.selectedTab) selectedTab
  @State((state) => state.common.user) user
  @Getter nav
  @Mutation toggleMenu
  /* vue-data */
  /* vue-compute */
  /* vue-watch */
  /* vue-lifecycle */
  /* vue-method */
  // 退出登录
  async onLogout () {
    // this.$ls.remove('token')
    // sessionStorage.removeItem('token')
    // this.$utils.message('退出登录成功')
    // // 清除store里面缓存的数据
    // this.$store.commit('clearStore')
    // this.$nextTick(() => this.$router.push('/login'))
  }
}

</script>

<style lang="scss" scoped>
  @import "../../../assets/css/vars";
  .nav{
    background-color: $color-primary;
    height: 50px;
    color: $color-white;

    /deep/ .el-breadcrumb{
      font-size: 12px;
      .el-breadcrumb__inner{
        color: $color-white;
      }
      .el-breadcrumb__item:last-child .el-breadcrumb__inner{
        color: rgba($color-white, 0.6);
      }
    }
  }
</style>
