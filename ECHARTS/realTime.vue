<template>
    <div id="real-time-data" :style="{width: '500px', height: '200px'}">
    </div>
</template>

<script>
import echarts from 'echarts';

export default {
    data() {
        return {
            hour: '7'
        };
    },
    mounted() {
        this.com();
    },
    methods: {
        com() {
            let dateNow = new Date();
            let hourNow = dateNow.getHours();
            let myChart = echarts.init(document.getElementById('real-time-data'));
            // 绘制图表
            myChart.setOption({
                color: [
                    '#4c84ff'
                ],
                title: {
                    subtext: '单位(w)',
                    y: 'top',
                    subtextStyle: {
                        fontSize: 12,
                        fontFamily: 'Arial',
                        color: '#ECEBF0',
                        verticalAlign: 'bottom'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    formatter(params) {
                        let res = params[1].data * 10000 + '<br/>' + params[1].name + ':00';
                        // for (let i = 0, length = params[1].length; i < length; i++) {
                            // res += params[1].seriesName + '：' + params[1].data.originValue + '<br/>';
                        // }
                        return res;
                    },
                    axisPointer: {
                        label: {
                            // backgroundColor: '#fff',
                            // border: '1px solid yellow'
                        }
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
                        data: [hourNow - 8, hourNow - 7, hourNow - 6, hourNow - 5, hourNow - 4, hourNow - 3, hourNow - 2, hourNow - 1, hourNow],
                        axisLine: {
                            lineStyle: {
                                color: '#ECEBF0',
                                // color: '#fff',
                                width: '2' // 这里是为了突出显示加上的
                            },
                            interval: 0
                        },
                        splitLine: {
                            show: true, // 网格线是否显示
                            //  改变样式
                            lineStyle: {
                                color: '#ECEBF0',
                                type: 'dotted'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        data: [0, 50, 100, 150, 200],
                        axisLine: {
                            lineStyle: {
                                color: '#ECEBF0',
                                width: '1' // 这里是为了突出显示加上的
                            }
                        },
                        splitLine: {
                            show: true, // 网格线是否显示
                            //  改变样式
                            lineStyle: {
                                color: '#ECEBF0',
                                type: 'dotted' // 网格样式
                            }
                        }
                    }
                ],
                series: [
                    {
                        type: 'line',
                        smooth: true,
                        symbolSize: 0,
                        lineStyle: {
                            color: 'rgba(204,204,204,.2)',
                            width: '5'
                        },
                        data: [0, 20, 80, 110, 90, 35, 70, 90, 90]
                    },
                    {
                        name: '视频',
                        type: 'line',
                        smooth: true,
                        symbolSize: 1,
                        areaStyle: {normal: {
                            // color: 'rgba(76,132,255,.5)'
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(76,132,255,.5)'
                            }, {
                                offset: .34,
                                color: 'rgba(76,132,255,0.35)'
                            }, {
                                offset: 1,
                                color: 'rgba(76,132,255,0.00)'
                            }])
                        }},
                        itemStyle: {
                            normal: {
                                borderRadius: '50%'
                            }
                        },
                        data: [20, 5, 30, 90, 120, 100, 45, 80, 100]
                    }
                ]
            });
        }
    },
    computed: {
    }
};
</script>

<style lang="less" scoped>
</style>
