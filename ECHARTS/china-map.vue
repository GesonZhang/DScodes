<template>
    <div class="location-data">
        <div class="location-data-title c-font-medium">
            <span class="location-data-ranking-title-icon c-gap-right"></span>
            <span class="location-data-title-word">地图</span>
        </div>
        <div id="location-data-map" :style="{width: '256px', height: '200px'}"></div>
        <div class="location-data-ranking">
                <div class="location-data-ranking-item"
                    :style="{ 'margin-bottom':index===2 ? '0':'.3rem'}"
                    v-for="(item, index) in topLocation"
                    :key="index"
                    @mouseenter="enter(index)"
                    @mouseleave="leave(index)"
                    >
                    <span class="location-data-ranking-item-title c-font-small">TOP&nbsp{{index + 1}}</span>
                    <span class="location-data-ranking-item-title c-font-small"> &nbsp &nbsp {{item.city}}</span>
                    <span class="location-data-ranking-item-ratio" :style="{ 'color':index===0 ? '#fe5560':'#4c84ff'}">{{item.ratio}}</span>
                    <div class="location-data-ranking-localsearch" v-show="localHover[index]">
                        <span class="location-data-ranking-title-icon c-gap-right">
                        </span>
                        <span class="location-data-ranking-localsearch-title c-gap-bottom-large">{{item.city}}热搜榜</span>
                        <div class="location-data-ranking-localsearch-item c-gap-top-small"
                            v-for="(locationHot, index) in item.locationHot"
                            :class="[index !== 4 ? 'c-gap-bottom-large' : '']">
                            <a :href="locationHot.url" target="blank">{{locationHot.title|cutStr}}</a>
                        </div>
                        <div class="location-data-triangle-container">
                            <span v-if="index===0" style="top:.2rem" class="location-data-ranking-localsearch-triangle"></span>
                            <span v-else-if="index===1" style="top:.9rem" class="location-data-ranking-localsearch-triangle"></span>
                            <span v-else style="top:1.6rem" class="location-data-ranking-localsearch-triangle"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import echarts from 'echarts';
import 'echarts/map/js/china.js';

export default {
    data() {
       return {
           topLocation: '',
           localHover: [false, false, false],
           crowdIcon: false,
           crowdIconEnd: false
       };
   },
   mounted() {
       this.getData();
   },
   filters: {
       cutStr(item) {
           if (item.length > 8) {
               item = item.substring(0, 7) + '...';
               return item;
           }
           return item;
       }
   },
   methods: {
       getData() {
           this.$axios.get('/realtime/location').then(res => {
               this.topLocation = res.data.topLocation;
               this.mapshow();
               this.crowdshow();
           }).catch(err => {
               alert('网络请求失败');
           });
       },
        mapshow() {
            let myChart = echarts.init(document.getElementById('location-data-map'));
            let geoCoordMap = {
                '上海': [121.472644, 31.231706],
                '云南': [102.712251, 24.040609],
                '内蒙古': [111.670801, 40.818311],
                '北京': [116.405285, 39.904989],
                '台湾': [121.509062, 25.044332],
                '吉林': [125.3245, 43.886841],
                '四川': [103.065735, 30.659462],
                '天津': [119.190182, 39.125596],
                '宁夏': [106.278179, 38.46637],
                '安徽': [117.283042, 31.86119],
                '山东': [118.000923, 36.675807],
                '山西': [112.049248, 37.057014],
                '广东': [113.280637, 23.125178],
                '广西': [108.320004, 22.82402],
                '新疆': [87.617733, 43.792818],
                '江苏': [119.467413, 33.741544],
                '江西': [115.892151, 28.676493],
                '河北': [114.802461, 37.745474],
                '河南': [113.665412, 33.757975],
                '浙江': [120.153576, 29.287459],
                '海南': [110.33119, 20.031971],
                '湖北': [113.298572, 30.984355],
                '湖南': [112.12279, 28.19409],
                '澳门': [113.54909, 22.198951],
                '甘肃': [103.823557, 36.058039],
                '福建': [119.306239, 26.075302],
                '西藏': [91.132212, 29.660361],
                '贵州': [106.713478, 26.578343],
                '辽宁': [123.029096, 41.396767],
                '重庆': [106.504962, 29.933155],
                '陕西': [108.948024, 34.263161],
                '青海': [100.578916, 36.623178],
                '香港': [114.173355, 22.320048],
                '黑龙江': [126.642464, 46.756967]
            };
                let firstCity = this.topLocation[0].city;
                let secondCity = this.topLocation[1].city;
                let thirdCity = this.topLocation[2].city;

                let data = [
                    {name: firstCity, value: geoCoordMap[firstCity]},
                    {name: secondCity, value: geoCoordMap[secondCity]},
                    {name: thirdCity, value: geoCoordMap[thirdCity]}
                ];
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        show: false
                    },
                    geo: {
                        show: true,
                        map: 'china',
                        regions: [{name: '南海诸岛', value: 0, itemStyle: {normal: {opacity: 0, label: {show: false}}}}],
                        zoom: 1.2,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        roam: false, // 禁止地图缩放
                        itemStyle: {
                            normal: {
                                areaColor: 'rgba(256,256,256,.1)',
                                borderColor: '#ccc'
                            },
                            emphasis: {
                                areaColor: '#rgba(256,256,256,.1)' // hover时地图的颜色
                            }
                        }
                    },
                    series: [
                        {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            zlevel: 2,
                            data: data,
                            showEffectOn: 'render',
                            rippleEffect: {
                                period: 4,
                                scale: 10,
                                brushType: 'stroke'
                            },
                            symbolSize: 5,
                            itemStyle: {
                                normal: {
                                    color: '#4c84ff',
                                    shadowBlur: 10,
                                    shadowColor: '#4c84ff',
                                    borderColor: '#4c84ff'
                                }
                            }
                        }
                    ]
                });
            },
            enter(index) {
               this.localHover.splice(index, 1, true);
            },
            leave(index) {
               this.localHover.splice(index, 1, false);
            }
        }
    };
};
</script>
