<template>
  <div>
    <div id="chinamap"></div>
  </div>
</template>


<script>
import jiangsu from "echarts/map/js/province/jiangsu";
// import china from 'echarts/map/js/china';
import jiangsu2 from "../../../../static/jiangsu.json";
// import $ from 'jquery'
import echarts from "echarts";
import homeApi from "@/api/index/index";
export default {
  data() {
    return {
      companyCode: "1",
      companyName: {},
      companyList: [],
      goDataList: [],
      tempList: {}
    };
  },

  created() {
    // console.log(obj)
    homeApi.getMapIndex({}).then(res => {
      let comListMap = res.data;

      console.log(comListMap, "comListMapcomListMapcomListMapcomListMap");
      for (let i = 0; i < comListMap.length; i++) {
        let name = comListMap[i].companyName;
        let coord = comListMap[i].companyDesc;
        let coordList = coord.split(",");
        this.tempList[name] = coordList;

        let d = {};
        d.name = comListMap[i].companyName;
        d.value = 20;
        d.key = i + 1;
        this.goDataList.push(d);
      }
      console.log(this.tempList, "地图坐标");
      console.log(this.goDataList, "地图数据");
    });
  },

  mounted() {
    this.getMessage(this.companyCode);
    this.getMapIndex();
  },
  methods: {
    async getMessage(code) {
      const { data } = await homeApi.company(code);
      this.init2();
      this.$emit("message", data);
    },
    getMapIndex() {},
    init2() {
      //var jiangsu = "/asset/get/s/data-1545717074162-HoS4KynOn.json";
      // var jiangsu2 = "/static/jiangsu.json";
      // console.log(jiangsu2)
      // $(function() {
      // console.log(jiangsu)
      let that = this;
      var myChart = echarts.init(document.getElementById("chinamap"));

      echarts.registerMap("jiangsu", jiangsu2);
      myChart.setOption({
        series: [
          {
            type: "map",
            map: "jiangsu"
          }
        ]
      });

      //地图坐标数据
      var geoCoordMap = this.tempList;

      var goData = this.goDataList;

      var goTotal = 0; //计算总人数
      goData.forEach(function(item, i) {
        goTotal += item.value;
      });
      //值控制圆点大小
      var backData = [
        {
          name: "常州",
          value: 75
        },
        {
          name: "南通",
          value: 95
        }
      ];

      var planePath = "arrow";

      var convertData = function(name, data) {
        var res = [];
        console.log(name, "namename");
        console.log(data, "datadatadatadata");
        for (var i = 0; i < data.length; i++) {
          var fromCoord = geoCoordMap[name];
          var toCoord = geoCoordMap[data[i].name];
          if (fromCoord && toCoord) {
            res.push({
              //对换即可调整方向
              coords: [fromCoord, toCoord]
            });
          }
        }
        console.log(fromCoord, "fromcoord");
        console.log(toCoord, "tocoord");
        return res;
      };
      var series = [];
      [
        ["苏垦农服", goData]
        // ['徐州', backData],
      ].forEach(function(item, i) {
        series.push(
          {
            name: item[0],
            type: "lines",
            zlevel: 2,

            //线特效配置
            effect: {
              show: true,
              period: 6,
              trailLength: 0.1,
              symbol: planePath, //标记类型
              symbolSize: 8
            },
            lineStyle: {
              normal: {
                width: 1,
                opacity: 0.4,
                curveness: 0.2, //弧线角度
                color: "rgba(255,168,0,0.5)"
              }
            },
            data: convertData(item[0], item[1])
          },
          {
            //终点
            name: item[0],
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke"
            },
            label: {
              normal: {
                show: true,
                color: "#fff",
                position: "right",
                formatter: "{b}",
                textShadowColor: "rgba(35,205,104,0.45)",
                textShadowBlur: 3,
                textShadowOffsetX: 0,
                textShadowOffsetY: 0
              }
            },
            symbol: "circle",
            //圆点大小
            symbolSize: function(val) {
              return (val[2] * 200) / goTotal;
            },
            itemStyle: {
              normal: {
                // show: true
                color: "#ffd800"
              }
            },
            data: item[1].map(function(dataItem) {
              // console.log(dataItem)
              return {
                name: dataItem.name,
                value: geoCoordMap[dataItem.name]
                  .concat([dataItem.value])
                  .concat([dataItem.key])
              };
            })
          },
          {
            //起点
            name: "item[0]",
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            label: {
              normal: {
                // show: true,
                position: "right",
                formatter: "{b}",
                textShadowColor: "rgba(35,205,104,0.45)",
                textShadowBlur: 3,
                textShadowOffsetX: 0,
                textShadowOffsetY: 0
              }
            },
            symbolSize: function(val) {
              return 15;
            },
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "#FF6000"
                // show: true,
                // backgroundColor: function(){
                // 	return "#FF6000"
                // }
              }
            },
            data: [
              {
                name: item[0],
                value: geoCoordMap[item[0]].concat([1]).concat([1])
              }
            ]
          }
        );
      });
      var option = {
        // backgroundColor: '#FDF7F2',
        // title: {
        // 	text: '江苏迁徙',
        // 	subtext: '',
        // 	left: 'center',
        // 	textStyle: {
        // 		color: '#9B2428'
        // 	}
        // },
        // toolbox: {
        //     show: true,
        //     feature: {
        //         dataZoom: {
        //             yAxisIndex: 'none'
        //         }, //区域缩放，区域缩放还原
        //         saveAsImage: {
        // 			backgroundColor:"transparent"
        // 		}   //保存为图片
        //     }
        // },
        legend: {
          orient: "vertical",
          top: "bottom",
          left: "right",
          data: ["南京", "徐州"],
          textStyle: {
            color: "#ffffff"
          },
          selectedMode: "single"
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}"
        },
        //线颜色及飞行轨道颜色
        // visualMap: {
        // 	show: false,
        // 	min: 0,
        // 	max: 100,
        // 	color: ['#ffd800']
        // },
        //地图相关设置
        geo: {
          map: "jiangsu",

          //视角缩放比例
          zoom: 1.1,
          //显示文本样式
          label: {
            normal: {
              show: false,
              textStyle: {
                color: "#ffffff"
              }
            },
            emphasis: {
              textStyle: {
                color: "#ffffff"
              }
            }
          },
          //鼠标缩放和平移
          roam: false,
          itemStyle: {
            normal: {
              //          	color: '#ddd',
              borderColor: "#007833",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0,164,70,0.5)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(0,164,70,0.5)" // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
              // shadowColor: '#ffffff',
              // shadowColor: 'rgba(255, 255, 255, 1)',
              // shadowOffsetX: -1,
              // shadowOffsetY: 1,
              // shadowBlur: 5
            },
            emphasis: {
              areaColor: "#D55E2C",
              borderWidth: 0
            }
          }
        },
        series: series
      };
      myChart.setOption(option);
      myChart.on("click", function(params) {
        console.log(params);
        let code = params.data.value[3];
        this.companyCode = code;
        console.log(this.companyCode);
        that.getMessage(this.companyCode);
      });
      // window.onresize = myChart.resize()
    }
  }
};
</script>

<style scoped>
#chinamap {
  width: 100%;
  height: 634px;
  transform: scale(1.1);
}
</style>
