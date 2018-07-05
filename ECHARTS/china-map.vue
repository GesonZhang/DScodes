<template>
    <div id="location-data" :style="{width: '500px', height: '300px'}">
    </div>
</template>
<script>
import echarts from 'echarts';
import 'echarts/map/js/china.js';

export default {
    data() {
        return {
        };
    },
    mounted() {
        this.comm();
    },
    methods: {
        comm() {
            let myChart = echarts.init(document.getElementById('location-data'));
            let geoCoordMap = {
                '海南': [110.17, 19.92],
                '河南': [113.700339, 34.751827],
                '河北': [114.54095, 38.058913],
                '湖北': [114.289984, 30.5942],
                '广东': [113.293215, 23.102603],
                '湖南': [113.03042, 28.188898],
                '江西': [115.911671, 28.658012],
                '黑龙江': [126.629804, 45.774197],
                '四川': [104.112035, 30.630737],
                '安徽': [117.321109, 31.850184]
            };
            let data = [
                {name: '海南', value: geoCoordMap['海南']},
                {name: '河南', value: geoCoordMap['河南']},
                {name: '黑龙江', value: geoCoordMap['黑龙江']}
            ];
        //     // 绘制图表
            myChart.setOption({
                tooltip: {
                    show: false
                },
                geo: {
                    show: true,
                    map: 'china',
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
        }
    },
    computed: {
    }
};
</script>
