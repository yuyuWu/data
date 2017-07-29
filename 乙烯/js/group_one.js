/**
 * Created by Administrator on 2017/7/18.
 */
    // 路径配置
require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist',
    },
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/line', // 使用柱状图就加载line模块，按需加载
        'echarts/chart/bar',// 使用柱状图就加载bar模块，按需加载
    ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var myChart = ec.init(document.getElementById('main'));//第一组数据
        var Chart1 = ec.init(document.getElementById("group_two"));//第二组数据
        var Chart2 = ec.init(document.getElementById("group_three"));//第三组数据
        var Chart3 = ec.init(document.getElementById("group_four"));//第四组数据
        /*  myChart.showLoading({
         text : "图表数据正在努力加载..."
         });*/
        //第一组数据图表
        option = {
            title: {
                text: '',
                subtext: ''
            },
            tooltip: {
                trigger: 'axis', /*显示该点的所有数据*/
                axisPointer: {
                    type: 'none'//坐标显示器设置为没有
                }
            },
            legend: {
                data: ['入管温度', '出管温度', 'COT温度']
            },
            toolbox: {
                right: 600,
                itemSize: 25,//工具栏 icon 的大小
                itemGap: 15,//默认10，工具栏 icon
                show: true,
                feature: {
                    /*动态类型切换*/
                    magicType: {
                        show: true, title: {
                            line: '折线图切换',
                            bar: '柱形图切换',
                        }, type: ['line', 'bar'],
                    },
                    //restore，还原，复位原始图表
                    restore: {show: true},
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            grid: {borderWidth: '0px'},//去掉外面的整个矩形边框
            xAxis: [
                { //设置轴线的属性
                    axisLine: {
                        show: true, // 控制x轴线是否显示
                        lineStyle: {
                            color: '#c4c4c4',
                            width: 1,//这里是为了突出显示加上的
                        }
                    },
                    splitLine: {show: false},//去除网格线
                    axisTick: {
                        show: false
                    },//去除x轴的刻度线
                    type: 'category',
                    boundaryGap: true,
                    axisLabel: {
                        show: true,
                        interval: 0,
                        textStyle: {
                            fontSize: 16,
                            color: '#000'
                        }
                    },
                    data: ['1', '2', '3', '4', '5', '6', '7', '9', '10', '11', '12']
                }
            ],
            yAxis: [
                {//去除y轴刻度线
                    axisTick: {
                        show: false
                    },
                    //去除网格线
                    splitLine: {
                        show: true
                    },
                    // 控制y轴线是否显示
                    axisLine: {show: false},
                    boundaryGap: false,//不从x轴0刻度开始
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    },
                    interval: 600,
                    splitNumber: 4,
                    min: 700,
                    max: 1100
                }
            ],
            series: [
                /*入管温度*/
                {
                    hoverAnimation: true,
                    smooth: true,//折线圆滑
                    name: '入管温度',
                    type: 'line',
                    barCategoryGap: '50%',//柱形图之间距离
                    barGap: 5,//柱形图之间距离
                    /*  data:[900,980,860,790,790,878,800,778,779,789,757,908],*/
                    //随机数
                    data: function () {
                        var list = [];
                        for (var i = 1; i <= 12; i++) {
                            list.push(Math.round(Math.random() * 1200));
                        }
                        return list;
                    }(),
                    itemStyle: {
                        normal: {
                            color: '#5197f8',
                            lineStyle: {
                                color: '#5197f8'
                            }
                        },
                        //鼠标高亮状态
                        emphasis: {
                            label: {
                                color: '#5298f8',
                                show: false,
                            }
                        }
                    },
                    symbolSize: 4, // 图表的点的大小
                    symbol: 'emptyCircle'//折线点的圆点为空心
                },

                /*出管温度*/
                {
                    smooth: true,
                    name: '出管温度',
                    type: 'line',
                    barCategoryGap: '50%',//类目间柱形距离
                    barGap: 5,//柱形图之间距离
                    data: [980, 950, 890, 790, 730, 898, 1000, 778, 879, 709, 797, 978],
                    symbolSize: 4, // 图表的点的大小
                    symbol: 'emptyCircle',//折线点的圆点为空心
                    itemStyle: {
                        normal: {
                            color: '#ffc869',
                            lineStyle: {
                                color: '#ffc869'
                            }
                        },
                        emphasis: {
                            label: {
                                show: false,
                                color: '#5298f8'
                            }

                        }
                    }

                },
                /*COT温度*/
                {
                    smooth: true,
                    name: 'COT温度',
                    type: 'line',
                    barGap: 5,//柱形图之间距离
                    barCategoryGap: '50%',//类目间柱形距离
                    data: [970, 920, 800, 890, 780, 798, 810, 788, 809, 709, 797, 978],
                    symbolSize: 4, // 图表的点的大小
                    symbol: 'emptyCircle',//折线点的圆点为空心
                    itemStyle: {
                        normal: {
                            color: '#ff696a',//折线点的颜色
                            lineStyle: {
                                color: '#ff696a'//折线颜色
                            }
                        }
                    },

                },

            ]
        };
        //第二组数据图表
        option1 = {
            scale: true,
            title: {
                text: '',
                subtext: ''
            },
            tooltip: {
                trigger: 'axis', /*显示该点的所有数据*/
                axisPointer: {
                    type: 'none'//坐标显示器设置为没有
                }
            },
            legend: {
                data: ['入管温度', '出管温度', 'COT温度']
            },
            toolbox: {
                itemSize: 25,//工具栏 icon 的大小
                itemGap: 15,//默认10，工具栏 icon
                show: true,
                feature: {
                    /*动态类型切换*/
                    magicType: {
                        show: true, title: {
                            line: '折线图切换',
                            bar: '柱形图切换',
                        }, type: ['line', 'bar'],
                    },
                    //restore，还原，复位原始图表
                    restore: {show: true},
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            grid: {borderWidth: '0px'},//去掉外面的整个矩形边框
            xAxis: [
                { //设置轴线的属性
                    axisLine: {
                        show: true, // 控制x轴线是否显示
                        lineStyle: {
                            color: '#c4c4c4',
                            width: 1,//这里是为了突出显示加上的
                        }
                    },
                    splitLine: {show: false},//去除网格线
                    axisTick: {
                        show: false
                    },//去除x轴的刻度线
                    type: 'category',
                    boundaryGap: true,
                    axisLabel: {
                        show: true,
                        interval: 0,
                        textStyle: {
                            fontSize: 16,
                            color: '#000'
                        }
                    },
                    data: ['1', '2', '3', '4', '5', '6', '7', '9', '10', '11', '12']
                }
            ],
            yAxis: [
                {//去除y轴刻度线
                    axisTick: {
                        show: false
                    },
                    //去除网格线
                    splitLine: {
                        show: true
                    },
                    // 控制y轴线是否显示
                    axisLine: {show: false},
                    boundaryGap: false,
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    },
                    interval: 600,
                    splitNumber: 4,
                    min: 700,
                    max: 1100
                }
            ],
            series: [
                /*入管温度*/
                {
                    hoverAnimation: true,
                    smooth: true,//折线圆滑
                    name: '入管温度',
                    type: 'line',
                    barCategoryGap: '50%',//柱形图之间距离
                    barGap: 5,//柱形图之间距离
                    data: [900, 980, 860, 790, 790, 978, 800, 778, 979, 789, 857, 908],
                    itemStyle: {
                        normal: {
                            color: '#5197f8',
                            lineStyle: {
                                color: '#5197f8'
                            }
                        },
                        //鼠标高亮状态
                        emphasis: {
                            label: {
                                color: '#5298f8',
                                show: false,
                            }
                        }
                    },
                    symbolSize: 4, // 图表的点的大小
                    symbol: 'emptyCircle'//折线点的圆点为空心
                },
                /*出管温度*/
                {
                    smooth: true,
                    name: '出管温度',
                    type: 'line',
                    barCategoryGap: '50%',//柱形图之间距离
                    barGap: 5,//柱形图之间距离
                    data: [980, 950, 890, 890, 730, 898, 1000, 778, 879, 709, 797, 978],
                    symbolSize: 4, // 图表的点的大小
                    symbol: 'emptyCircle',//折线点的圆点为空心
                    itemStyle: {
                        normal: {
                            color: '#ffc869',
                            lineStyle: {
                                color: '#ffc869'
                            }
                        },
                        emphasis: {
                            label: {
                                show: false,
                                color: '#5298f8'
                            }

                        }
                    }

                },
                /*COT温度*/
                {
                    smooth: true,
                    name: 'COT温度',
                    type: 'line',
                    barCategoryGap: '50%',//柱形图之间距离
                    barGap: 5,//柱形图之间距离
                    data: [970, 920, 800, 890, 780, 798, 810, 788, 809, 709, 897, 978],
                    symbolSize: 4, // 图表的点的大小
                    symbol: 'emptyCircle',//折线点的圆点为空心
                    itemStyle: {
                        normal: {
                            color: '#ff696a',//折线点的颜色
                            lineStyle: {
                                color: '#ff696a'//折线颜色
                            }
                        }
                    },

                },

            ]
        };
        //第三组数据图表
        option2 = {
            scale: true,
            title: {
                text: '',
                subtext: ''
            },
            tooltip: {
                trigger: 'axis', /*显示该点的所有数据*/
                axisPointer: {
                    type: 'none'//坐标显示器设置为没有
                }
            },
            legend: {
                data: ['入管温度', '出管温度', 'COT温度']
            },
            toolbox: {
                itemSize: 25,//工具栏 icon 的大小
                itemGap: 15,//默认10，工具栏 icon
                show: true,
                feature: {
                    /*动态类型切换*/
                    magicType: {
                        show: true, title: {
                            line: '折线图切换',
                            bar: '柱形图切换',
                        }, type: ['line', 'bar'],
                    },
                    //restore，还原，复位原始图表
                    restore: {show: true},
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: true,
            grid: {borderWidth: '0px'},//去掉外面的整个矩形边框
            xAxis: [
                { //设置轴线的属性
                    axisLine: {
                        show: true, // 控制x轴线是否显示
                        lineStyle: {
                            color: '#c4c4c4',
                            width: 1,//这里是为了突出显示加上的
                        }
                    },
                    splitLine: {show: false},//去除网格线
                    //去除x轴的刻度线
                    axisTick: {
                        show: false
                    },
                    type: 'category',
                    boundaryGap: true,
                    axisLabel: {
                        show: true,
                        interval: 0,
                        textStyle: {
                            fontSize: 16,
                            color: '#000'
                        }
                    },
                    data: ['1', '2', '3', '4', '5', '6', '7', '9', '10', '11', '12']
                }
            ],
            yAxis: [
                {//去除y轴刻度线
                    axisTick: {
                        show: false
                    },
                    //去除网格线
                    splitLine: {
                        show: true
                    },
                    // 控制y轴线是否显示
                    axisLine: {show: false},
                    boundaryGap: false,
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    },
                    interval: 600,
                    splitNumber: 4,
                    min: 700,
                    max: 1100
                }
            ],
            series: [
                /*入管温度*/
                {
                    hoverAnimation: true,
                    smooth: true,//折线圆滑
                    name: '入管温度',
                    type: 'line',
                    barCategoryGap: '50%',//柱形图之间距离
                    barGap: 5,//柱形图之间距离
                    data: [900, 980, 860, 790, 790, 978, 800, 778, 979, 789, 857, 908],
                    itemStyle: {
                        normal: {
                            color: '#5197f8',
                            lineStyle: {
                                color: '#5197f8'
                            }
                        },
                        //鼠标高亮状态
                        emphasis: {
                            label: {
                                color: '#5298f8',
                                show: false,
                            }
                        }
                    },
                    symbolSize: 4, // 图表的点的大小
                    symbol: 'emptyCircle'//折线点的圆点为空心
                },
                /*出管温度*/
                {
                    smooth: true,
                    name: '出管温度',
                    type: 'line',
                    barCategoryGap: '50%',//柱形图之间距离
                    barGap: 5,//柱形图之间距离
                    data: [980, 950, 890, 890, 730, 898, 1000, 778, 879, 709, 797, 978],
                    symbolSize: 4, // 图表的点的大小
                    symbol: 'emptyCircle',//折线点的圆点为空心
                    itemStyle: {
                        normal: {
                            color: '#ffc869',
                            lineStyle: {
                                color: '#ffc869'
                            }
                        },
                        emphasis: {
                            label: {
                                show: false,
                                color: '#5298f8'
                            }

                        }
                    }

                },
                /*COT温度*/
                {
                    smooth: true,
                    name: 'COT温度',
                    type: 'line',
                    barCategoryGap: '50%',//柱形图之间距离
                    barGap: 5,//柱形图之间距离
                    data: [970, 920, 800, 890, 780, 798, 810, 788, 809, 709, 897, 978],
                    symbolSize: 4, // 图表的点的大小
                    symbol: 'emptyCircle',//折线点的圆点为空心
                    itemStyle: {
                        normal: {
                            color: '#ff696a',//折线点的颜色
                            lineStyle: {
                                color: '#ff696a'//折线颜色
                            }
                        }
                    },

                },

            ]
        };
        //第四组数据图表
        option3 = {
            scale: true,
            title: {
                text: '',
                subtext: ''
            },
            tooltip: {
                trigger: 'axis', /*显示该点的所有数据*/
                axisPointer: {
                    type: 'none'//坐标显示器设置为没有
                }
            },
            legend: {
                data: ['入管温度', '出管温度', 'COT温度']
            },
            toolbox: {
                itemSize: 25,//工具栏 icon 的大小
                itemGap: 15,//默认10，工具栏 icon
                show: true,
                feature: {
                    /*动态类型切换*/
                    magicType: {
                        show: true, title: {
                            line: '折线图切换',
                            bar: '柱形图切换',
                        }, type: ['line', 'bar'],
                    },
                    //restore，还原，复位原始图表
                    restore: {show: true},
                    saveAsImage: {
                        show: true,
                    }
                }
            },
            calculable: true,
            grid: {borderWidth: '0px'},//去掉外面的整个矩形边框
            xAxis: [
                { //设置轴线的属性
                    axisLine: {
                        show: true, // 控制x轴线是否显示
                        lineStyle: {
                            color: '#c4c4c4',
                            width: 1,//这里是为了突出显示加上的
                        }
                    },
                    splitLine: {show: false},//去除网格线
                    axisTick: {
                        show: false
                    },//去除x轴的刻度线
                    type: 'category',
                    boundaryGap: true,
                    axisLabel: {
                        show: true,
                        interval: 0,
                        textStyle: {
                            fontSize: 16,
                            color: '#000'
                        }
                    },
                    data: ['1', '2', '3', '4', '5', '6', '7', '9', '10', '11', '12']
                }
            ],
            yAxis: [
                {//去除y轴刻度线
                    axisTick: {
                        show: false
                    },
                    //去除网格线
                    splitLine: {
                        show: true
                    },
                    // 控制y轴线是否显示
                    axisLine: {show: false},
                    boundaryGap: false,
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    },
                    interval: 600,
                    splitNumber: 4,
                    min: 700,
                    max: 1100
                }
            ],
            series: [
                /*入管温度*/
                {
                    hoverAnimation: true,
                    smooth: true,//折线圆滑
                    name: '入管温度',
                    type: 'line',
                    barCategoryGap: '50%',//柱形图之间距离
                    barGap: 5,//柱形图之间距离
                    data: [900, 980, 860, 790, 790, 978, 800, 778, 979, 789, 857, 908],
                    itemStyle: {
                        normal: {
                            color: '#5197f8',
                            lineStyle: {
                                color: '#5197f8'
                            }
                        },
                        //鼠标高亮状态
                        emphasis: {
                            /* background: '#000',*/
                            /*symbol: 'start',*/
                            label: {
                                color: '#5298f8',
                                show: false,
                            }
                        }
                    },
                    symbolSize: 4, // 图表的点的大小
                    symbol: 'emptyCircle'//折线点的圆点为空心
                },
                /*出管温度*/
                {
                    smooth: true,
                    name: '出管温度',
                    type: 'line',
                    barCategoryGap: '50%',//柱形图之间距离
                    barGap: 5,//柱形图之间距离
                    data: [980, 950, 890, 890, 730, 898, 1000, 778, 879, 709, 797, 978],
                    symbolSize: 4, // 图表的点的大小
                    symbol: 'emptyCircle',//折线点的圆点为空心
                    itemStyle: {
                        normal: {
                            color: '#ffc869',
                            lineStyle: {
                                color: '#ffc869'
                            }
                        },
                        emphasis: {
                            label: {
                                show: false,
                                color: '#5298f8'
                            }

                        }
                    }

                },
                /*COT温度*/
                {
                    smooth: true,
                    name: 'COT温度',
                    type: 'line',
                    barCategoryGap: '50%',//柱形图之间距离

                    barGap: 5,//柱形图之间距离
                    data: [970, 920, 800, 890, 780, 798, 810, 788, 809, 709, 897, 978],
                    symbolSize: 4, // 图表的点的大小
                    symbol: 'emptyCircle',//折线点的圆点为空心
                    itemStyle: {
                        normal: {
                            color: '#ff696a',//折线点的颜色
                            lineStyle: {
                                color: '#ff696a'//折线颜色
                            }
                        }
                    },

                },

            ]
        };

        //当屏幕窗口改变时，图表也会发生改变，响应式
        //第一组数据
        window.onresize = myChart.resize;
        $("#main").resize(myChart.resize);
        myChart.setOption(option); // 为echarts对象加载数据
        //第二组数据
        window.onresize = Chart1.resize,
            $("#group_two").resize(Chart1.resize);
        Chart1.setOption(option1),
            //第三组数据
            window.onresize = Chart2.resize;
        $("#group_three").resize(Chart2.resize)
        Chart2.setOption(option2);
        //第四组数据
        window.onresize = Chart3.resize;
        $("#group_four").resize(Chart3.resize)
        Chart3.setOption(option3)
    }
);



