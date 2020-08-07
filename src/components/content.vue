<template>
  <el-row class="main-info" :gutter="20">
    <el-col :span="4">
      <div class="grid-content bg-purple">
      <el-menu
          background-color="#fff"
          text-color="#333"
          active-text-color="#ffd04b" :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect">
        <el-menu-item index="1">活动列表</el-menu-item>
        <el-menu-item index="2">标签库管理</el-menu-item>
        <el-menu-item index="3">用户群管理</el-menu-item>
        </el-menu>
      </div>
    </el-col>
    <el-col :span="20">
      <div class="grid-content bg-purple">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>活动列表</span>
        </div>
        <div>
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="活动时间">
              <el-date-picker
                  v-model="form.startTime"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
              <span style="margin: 0 2px">-</span>
              <el-date-picker
                  v-model="form.endTime"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="活动名称">
              <el-input v-model="form.name" placeholder="活动名称"></el-input>
            </el-form-item>
            <el-form-item label="业务场景">
              <el-select v-model="form.region" placeholder="业务场景">
                <el-option label="3G用4G" value="3G用4G"></el-option>
                <el-option label="用户换机" value="用户换机"></el-option>
                <el-option label="信用租机" value="信用租机"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动状态">
              <el-select v-model="form.status" placeholder="活动状态">
                <el-option label="运行中" value="运行中"></el-option>
                <el-option label="已结束" value="已结束"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="search">查询</el-button>
              <el-button @click="reset">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我创建的模型" name="first"></el-tab-pane>
          <el-tab-pane label="上架模型" name="second"></el-tab-pane>
          <el-tab-pane label="未上架模型" name="third"></el-tab-pane>
          <el-tab-pane label="最新模型" name="fourth"></el-tab-pane>
          <el-tab-pane label="最热模型" name="fifth"></el-tab-pane>
        </el-tabs>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
          <el-table-column
              prop="date"
              label="活动编码"
              width="180">
          </el-table-column>
          <el-table-column
              prop="name"
              label="活动名称"
              width="180">
          </el-table-column>
          <el-table-column
              prop="region"
              label="业务场景">
          </el-table-column>
          <el-table-column
              prop="status"
              label="活动状态">
          </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="100">
        </el-pagination>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "content",
    data () {
      return {
        activeIndex: '1',
        activeName: 'first',
        form: {},
        tableData: [{
          date: '20160502',
          name: '战狼',
          region: '3G用4G',
          status: '运行中'
        }, {
          date: '20160504',
          name: '移动',
          region: '3G用4G',
          status: '运行中'
        }, {
          date: '20160501',
          name: '超级日租卡',
          region: '用户换机',
          status: '运行中'
        }, {
          date: '20160503',
          name: '宽带新装',
          region: '信用租机',
          status: '已结束'
        }, {
          date: '20160504',
          name: '移动1',
          region: '用户换机',
          status: '运行中'
        }, {
          date: '20160504',
          name: '移动2',
          region: '信用租机',
          status: '运行中'
        }, {
          date: '20160504',
          name: '移动3',
          region: '3G用4G',
          status: '已结束'
        }, ]
      }
    },
    methods: {
      reset () {
        this.form = {}
      },
      handleClick () {},
      search () {

      },
    }
  }
</script>

<style scoped lang="scss">
  .main-info {
    margin-right: 0!important;
  }
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .el-pagination {
    text-align: right;
    margin-top: 20px;
  }
</style>
