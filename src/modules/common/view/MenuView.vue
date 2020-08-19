<!--Created by Hazard on 2020/4/24.-->
<template>
  <div class="left" data-flex="dir:top" tabindex="1">
    <div class="logo" data-flex-box="0" data-flex="cross:center main:center">
      <span v-if="menuExpand" class="f-24">iFace-Admin</span>
      <span v-else class="f-18">iFace</span>
    </div>
    <el-menu ref="menu" :default-active="selectedTab"
         :collapse="!menuExpand"
         @select="selectMenu" data-flex-box="1">
      <el-menu-item :index="'0'" key="0" v-show="false">
        <!--这个隐藏的菜单为了解决首页的时候，高亮的菜单项不挣钱-->
      </el-menu-item>
      <template v-for="menu in menus">
        <el-submenu :index="menu.id" v-if="menu.children" :key="menu.id">
          <template slot="title">
            <cc-icon :name="menu.icon" size="18"></cc-icon>
            <span slot="title" class="m-l-5">{{menu.name}}</span>
          </template>
          <el-menu-item v-for="menu2 in menu.children" :index="menu2.id" :key="menu2.id" :route="{path: menu2.url}">
            <template slot="title">
              <cc-icon name="ring" size="14"></cc-icon>
              <span slot="title" class="m-l-5">{{menu2.name}}</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="menu.id" v-else :route="{path: menu.url}" :key="menu.id">
          <cc-icon :name="menu.icon" size="18"></cc-icon>
          <span slot="title" class="m-l-5">{{menu.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

export default @Component class MenuView extends Vue {
  /* vue-props */
  /* vue-vuex */
  // @State((state) => state.common.menus) menus
  menus = [
    {'id': '11',
      'name': '业务表单',
      'icon': 'table',
      'parentId': '0',
      'sortNo': 0,
      'menuType': 1,
      'children': [
        {'id': '101', 'name': '起草工作', 'icon': '', 'url': '/system/test', 'parentId': '11', 'sortNo': 1, 'menuType': 0, 'children': null}]
    },
    {'id': '22',
      'name': '流程表单管理',
      'icon': 'menu',
      'url': '/system/demo',
      'parentId': '0',
      'sortNo': 0,
      'menuType': 1,
      'children': null
    },
  ]
  @State((state) => state.common.menuExpand) menuExpand
  /* vue-data */
  flatMenu = []
  perIndex = '0'
  selectedTab = null
  /* vue-lifecycle */
  created () {
    this.flatMenu = this.$utils.flatObject(this.menus)
  }
  /* vue-method */
  // 菜单选择的回调
  selectMenu (index) {
    this.$nextTick(() => {
      this.selectedTab = index
      this.$el.focus()
      const menu = this.flatMenu.find((m) => m.id === index)
      if (menu) {
        this.$utils.toTab(encodeURI(menu.url), menu.name)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/vars.scss";
  .left{
    .logo{
      height: 50px;
      color: $color-white;
      background-color: mix($color-black, $color-primary, 10%);
    }
    .menu-wrap {
      height: calc(100% - 50px);
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .left:focus{
    outline: 0;
  }
  .left /deep/ {
    .el-menu:not(.el-menu--collapse) {
      width: 200px;
    }
    .el-menu::-webkit-scrollbar {
      display: none;
    }
  }
</style>
