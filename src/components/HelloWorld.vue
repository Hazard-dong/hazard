<template>
  <div>
    <div class="top">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <el-menu  background-color="blueviolet"
                text-color="#fff"
                active-text-color="#ffd04b" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">工作台</el-menu-item>
        <el-menu-item index="2">标签管理</el-menu-item>
        <el-menu-item index="3">模型管理</el-menu-item>
        <el-menu-item index="4">活动管理</el-menu-item>
        <el-menu-item index="5">评估中心</el-menu-item>
        <el-menu-item index="6">劳动竞赛</el-menu-item>
        <el-menu-item index="7">系统管理</el-menu-item>
      </el-menu>
      <div class="person">
        <img src="../assets/nav-iconuser.png" alt="">
        <el-dropdown>
          <span class="el-dropdown-link">
            admin<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <hello-main v-if="activeIndex !== '4'" />
    <hello-content v-else />
  </div>
</template>

<script>
import HelloMain from './main.vue'
import HelloContent from './content'
export default {
  components: { HelloMain, HelloContent },
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = keyPath[0]
    }
  }
}
</script>

<style scoped lang="scss">
.top {
  display: flex;
  height: 60px;
  line-height: 60px;
  justify-content: space-between;
  background-color: blueviolet;
  padding: 0 50px;
  .logo img {
    margin-top: 10px;
  }
  .el-menu {
    background-color: blueviolet;
  }
}
/deep/.el-menu--horizontal>.el-menu-item {
  background-color: blueviolet;
  color: #fff!important;
}
/deep/.el-menu--horizontal>.el-menu-item:hover {
  background-color: lightpink!important;
}
.person {
  img {
    margin-right: 8px;
  }
  .el-dropdown {
    color: #fff;
  }
}
</style>
