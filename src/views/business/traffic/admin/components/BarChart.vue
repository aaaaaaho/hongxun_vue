<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import { business_traffic } from '@/api/business'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chartData: null,
      list: [],
      barChartData: {
        testData: [10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        testData_2: [10,20,30,0,0,0,0,0,0,0,0,0,0]
      },
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  created() {
    this.getListData()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.barChartData)
    },

    getListData(){
      business_traffic().then(res => {
        this.list = res.data.list
        for(let i= 0; i<this.list.length; i++){
          let x1 = Number(this.list[i].time.split("-")[2]) - 1
          if(x1 !== 0){
            this.barChartData.testData[x1]= this.barChartData.testData[x1] + 1
          }
        }
      })
    },

    setOptions({testData,testData_2}={}) {
      this.chart.setOption({
        title: {
          text: '车流量分析',
          left: 'center',
          y: 'bottom',
          padding: 10
        },
        xAxis: {
          data: ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日',
            '10日','11日','12日','13日','14日','15日', '16日','17日','18日','19日','20日'
            ,'21日','22日','23日','24日','25日','26日','27日','28日','29日','30日', '31日'],
          // boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 40,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['入场数', '出场数']
        },
        series: [{
          name: '入场数', itemStyle: {
            normal: {
              color: '#40c9c6',
            }
          },
          // smooth: true,
          type: 'bar',
          data:testData,
          barWidth :'20%',
          stack:'amount',
          animationDuration: 1500,
          animationEasing: 'cubicInOut'
           },
          {
            name: '出场数',
            // smooth: true,
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#36a3f7',
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: testData_2,
            animationDuration: 1500,
            barWidth :'20%',
            stack:'amount',
            animationEasing: 'quadraticOut'
          }
        ]
      })

    }
  }
}
</script>
