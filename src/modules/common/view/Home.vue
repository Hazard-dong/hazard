<!--Created by Hazard on 2020/4/24.-->
<template>
  <div class="home">
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import VueGridLayout from 'vue-grid-layout'

export default @Component({ components: { GridLayout: VueGridLayout.GridLayout, GridItem: VueGridLayout.GridItem } })
class Home extends Vue {
  /* vue-props */
  /* vue-vuex */
  /* vue-data */
  /* vue-compute */
  /* vue-watch */
  /* vue-lifecycle */
  created () {
  }
  /* vue-method */
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/vars";
  .home.content-view{
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
  .home /deep/ .vue-grid-item{
    overflow: hidden;
    background-color: white;
    border-radius: 4px;
  }
  .home {
    background: url("../../../assets/imgs/home.png") no-repeat;
    background-size:100%;
  }
</style>
