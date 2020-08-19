<!--Created by Hazard on 2020/4/26.-->
<template>
  <div data-flex="dir:top">
    <vue-progress-bar></vue-progress-bar>
    <div data-flex="box:first" data-flex-box="1">
      <div data-flex=""><menu-view/></div>
      <div data-flex="dir:top">
        <nav-view data-flex-box="0"></nav-view>
        <tabs-view data-flex-box="0"></tabs-view>
        <div class="main-view" data-flex-box="1">
          <keep-alive>
            <router-view class="content-view"/>
          </keep-alive>
        </div>
      </div>
    </div>
    <cc-dialog></cc-dialog>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import MenuView from './MenuView.vue'
import NavView from '../../common/view/NavView.vue'
import TabsView from '../../common/view/TabsView.vue'
import CcDialog from '../../../baseComponent/CcDialog.vue'

export default @Component({
  components: { MenuView, NavView, TabsView, CcDialog }
})
class MainLayout extends Vue {
  /* vue-props */
  /* vue-vuex */
  /* vue-data */
  /* vue-compute */
  /* vue-watch */
  /* 监听路由变化 */
  /* vue-lifecycle */
  async created () {
  }
  /* vue-method */
}
</script>
<style lang="scss" scoped>
</style>
