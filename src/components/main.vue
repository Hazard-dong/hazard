<template>
  <el-row class="main-info" :gutter="20">
    <el-col :span="18">
      <div class="grid-content bg-purple left">
        <div>
          <p class="join"><span>我参与的</span></p>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="box" style="background-color: blueviolet">
                <p class="title">8月"战狼"行动</p>
                <p class="content">超级日租卡用户获取行动，超级日租卡用户获取行动，超级日租卡用户获取行动，超级日租卡用户获取行动</p>
                <el-slider v-model="value" :format-tooltip="formatTooltip"></el-slider>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="box" style="background-color: pink">
                <p class="title">8月"战狼"行动</p>
                <p class="content">超级日租卡用户获取行动，超级日租卡用户获取行动，超级日租卡用户获取行动，超级日租卡用户获取行动</p>
                <el-slider v-model="value" :format-tooltip="formatTooltip"></el-slider>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="box" style="background-color: darkseagreen">
                <p class="title">8月"战狼"行动</p>
                <p class="content">超级日租卡用户获取行动，超级日租卡用户获取行动，超级日租卡用户获取行动，超级日租卡用户获取行动</p>
                <el-slider v-model="value" :format-tooltip="formatTooltip"></el-slider>
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="margin-top: 20px">
          <div class="chart">
            <p class="join"><span>统计概览</span></p>
            <div id="main" style="height:400px;width: 80%"></div>
            <div id="chart" style="height:400px;width: 80%"></div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">
        <div class="more">
          <img class="more-pic" src="../assets/Shape1.png" alt="">
          <span style="margin-left: 8px"><span style="margin-right: 8px">我的消息</span><span class="circle">12</span></span>
          <span style="float: right">更多>></span>
        </div>
        <div class="todo">
          <h3>我的待办</h3>
          <hr>
          <div class="block">
            <div class="item" v-for="(item, index) in todoList" :key="index">
              <span class="title">{{item.title}}</span><br/>
              <span class="time">{{item.time}}</span>
            </div>
          </div>
        </div>
        <div style="margin-top: 50px">
          <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="公告" name="first">
              <ul>
                <li>
                  <span>红红火火恍恍惚惚</span>
                  <span>8-10</span>
                </li>
                <li>
                  <span>红红火火恍恍惚惚</span>
                  <span>8-10</span>
                </li>
                <li>
                  <span>红红火火恍恍惚惚</span>
                  <span>8-10</span>
                </li>
                <li>
                  <span>红红火火恍恍惚惚</span>
                  <span>8-10</span>
                </li>
                <li>
                  <span>红红火火恍恍惚惚</span>
                  <span>8-10</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="动态" name="second">
              <ul>
                <li>
                  <span>哈哈哈哈哈哈哈哈哈</span>
                  <span>8-11</span>
                </li>
                <li>
                  <span>哈哈哈哈哈哈哈哈哈</span>
                  <span>8-11</span>
                </li>
                <li>
                  <span>哈哈哈哈哈哈哈哈哈</span>
                  <span>8-11</span>
                </li>
                <li>
                  <span>哈哈哈哈哈哈哈哈哈</span>
                  <span>8-11</span>
                </li>
                <li>
                  <span>哈哈哈哈哈哈哈哈哈</span>
                  <span>8-11</span>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "main",
    data () {
      return {
        value: 55,
        activeName: 'first',
        todoList: [
          {
            title: '地市乐坛：工作室电信分公司工作室电信分公司工作室电信分公司工作室电信分公司',
            time: '2018-04-04 00:00:00'
          },
          {
            title: '地市乐坛：工作室电信分公司工作室电信分公司工作室电信分公司工作室电信分公司',
            time: '2018-04-04 00:00:00'
          },
          {
            title: '地市乐坛：工作室电信分公司工作室电信分公司工作室电信分公司工作室电信分公司',
            time: '2018-04-04 00:00:00'
          },
          {
            title: '地市乐坛：工作室电信分公司工作室电信分公司工作室电信分公司工作室电信分公司',
            time: '2018-04-04 00:00:00'
          },
          {
            title: '地市乐坛：工作室电信分公司工作室电信分公司工作室电信分公司工作室电信分公司',
            time: '2018-04-04 00:00:00'
          }
        ],
        options: {}
      }
    },
    mounted () {
      this.init()
      this.initchart()
    },
    methods: {
      init () {
        let myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        let option = {
          title: {text: '销售目标完成情况'},
          legend: {},
          tooltip: {},
          dataset: {
            dimensions: ['product', '目标销售额', '当前销售额'],
            source: [
              {product: '1月', '目标销售额': 93.3, '当前销售额': 85.8},
              {product: '2月', '目标销售额': 83.3, '当前销售额': 85.8},
              {product: '3月', '目标销售额': 93.3, '当前销售额': 85.8},
              {product: '4月', '目标销售额': 73.3, '当前销售额': 85.8},
              {product: '5月', '目标销售额': 63.3, '当前销售额': 85.8},
              {product: '6月', '目标销售额': 93.3, '当前销售额': 85.8},
              {product: '7月', '目标销售额': 83.3, '当前销售额': 85.8},
              {product: '8月', '目标销售额': 63.3, '当前销售额': 85.8},
              {product: '9月', '目标销售额': 63.3, '当前销售额': 85.8},
              {product: '10月', '目标销售额': 83.3, '当前销售额': 85.8},
              {product: '11月', '目标销售额': 93.3, '当前销售额': 85.8},
              {product: '12月', '目标销售额': 88.3, '当前销售额': 85.8},
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            {type: 'bar'},
            {type: 'bar'},
          ]
        };

        myChart.setOption(option);
      },
      initchart () {
        let myChart = echarts.init(document.getElementById('chart'));
        let option = {
          title: {
            text: '全省地市累计销售情况'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['目标销售额', '当前销售额']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['广州', '深圳', '上海', '北京', '天津', '洛阳', '杭州']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '目标销售额',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '当前销售额',
              type: 'line',
              stack: '总量',
              areaStyle: {},
              data: [220, 182, 191, 234, 290, 330, 310]
            }
          ]
        };
        myChart.setOption(option);
      },
      formatTooltip(val) {
        return val + '%';
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getPage() {
        this.chart = echarts.init(this.$refs.echarts);
        // 使用刚指定的配置项和数据显示图表。
        this.chart.setOption(this.option);
      }
    }
  }
</script>

<style scoped lang="scss">
  li {
    display: flex;
    padding: 0 3px;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .tab {
    color: #333333;
  }
  .block {
    height: 300px;
    overflow-y: auto;
    .item {
      padding: 10px;
      font-size: 12px;
      background-color: white;
      position: relative;
      margin-bottom: 10px;

      .time {
        display: inline-block;
        margin-top: 10px;
        color: #ccc;
      }
    }
    .item::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-color: yellow;
      width: 3px;
      height: 100%;
    }
  }
  .todo {
    margin-top: 20px;
    padding: 0 10px;
    color: #333333;
    /*background-color: #ccc;*/
  }
  .more {
    box-sizing: border-box;
    height: 50px;
    line-height: 50px;
    background-color: #ffffff;
    color: #333;
    vertical-align:middle;
    padding: 0px 10px;
  }
  .more-pic img {
    width: 36px;
    height: 36px;
  }
  .circle {
    border: 1px red solid;
    padding: 6px;
    border-radius: 50%;
  }
  .main-info {
    margin-right: 0!important;
    margin-left: 0;
    background-color: #f4f4f5;
  }
  .box {
    padding: 10px;
    .title {
      font-weight: 700;
      margin-bottom: 8px;
    }
    .content {
      margin-bottom: 8px;
    }
  }
  .el-row {
    color: #ffffff;
    &:last-child {
       margin-bottom: 0;
     }
  }
  .el-col {
    .left {
      padding: 20px 30px;
    }
  }

  .grid-content {
    min-height: 36px;
    border-radius: 4px;
  }
  .join {
    color: blueviolet;
    padding-left: 10px;
    height: 36px;
    position: relative;
    line-height: 36px;
    span::before {
      position: absolute;
      content: '';
      top: 5px;
      left: 3px;
      width: 5px;
      height: 24px;
      background-color: blueviolet;
    }
  }
</style>
