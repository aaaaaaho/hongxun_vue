<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

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
      chart: null,
      // testData: [150, 50, 50, 50, 50, 50, 50, 50, 50, 50],
      // testData_2: [50, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      // testData_3: [70, 20, 20, 20, 20, 20, 20, 20, 20, 20],
      // testData_4: [60, 30, 30, 30, 30, 30, 30, 30, 30, 30]
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
      this.setOptions(this.chartData)
    },

    setOptions({testData,testData_2}={}) {
      this.chart.setOption({
        title: {
          text: '泊位分析',
          left: 'center',
          y: 'bottom',
          padding: 10
        },
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          boundaryGap: false,
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
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['泊位周转率(%)', '泊位占有率(%)']
        },
        series: [{
          name: '泊位周转率(%)', itemStyle: {
            normal: {
              color: '#40c9c6',
              lineStyle: {
                color: '#40c9c6',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data:testData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '泊位占有率(%)',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#36a3f7',
              lineStyle: {
                color: '#36a3f7',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: testData_2,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }
        ]
      })
    }
  }
}
</script>
