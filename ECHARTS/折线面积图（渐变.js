1.折线图（区域）

var myChartLine = echarts.init(document.getElementById('chart1'));
optionLine = {
    tooltip: {
        trigger: 'axis'
    },
    lineStyle:{
        normal:{
            color:'#32A8FF'
        }
    },
    areaStyle:{
        normal:{
           //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{

                offset: 0,
                color: 'rgba(80,141,255,0.39)'
            }, {
                offset: .34,
                color: 'rgba(56,155,255,0.25)'
            },{
                offset: 1,
                color: 'rgba(38,197,254,0.00)'
            }])

        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '9%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}//将统计图保存为
        }
        ,right:100
        ,top:0
    },
    xAxis: {
        type: 'category',
        boundaryGap:false,
        data:['11.07','11.08','11.09','11.10','11.11','11.12','11.13','11.14','11.15','11.16']
    },
    yAxis: {
        type: 'value'
        /*min:0,
         max:60,
         splitNumber:6*/
    },
    series: [
        {
            name:'浏览次数',
            type:'line',
            stack: '总量1',
            areaStyle: {normal: {}},
            data:['10','22','10','50','13','31','15','10','22','10'],
            itemStyle : {normal : {color:'#32A8FF'}}
        }
    ]
};
//为echarts对象加载数据
myChartLine.setOption(optionLine);
