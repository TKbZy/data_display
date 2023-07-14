import * as echarts from 'echarts';
import $ from "jquery";

export default function handle6() {
    let show_picture = document.getElementById('show_picture');

    let myChart = echarts.init(show_picture);
    let option;

    let d1 = [], d2 = [];

    const url = "http://127.0.0.1:8080/house/region/average_area"
    
    $.get(url, (r, _)=> {
        let v = r.region_info;
        for (let p of v) {
            d1.push(p.name);  d2.push(p.areas);
        }

        option = {
            title: {
                text: '各区域平均面积',
                left: 'center',
                textStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'bolder',
                    fontSize: 36
                },
            },
            textStyle: {
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'bolder',
                fontSize: 30
            },
            xAxis: {
                axisLabel: { interval: 0, rotate: 30 },
                type: 'category',
                data: d1
            },
            yAxis: {
                type: 'value',
                name: "建筑面积（平米）",
                nameLocation: "middle",
                nameTextStyle: { fontSize: 20 },
                nameGap: 60
            },
            series: [
                {
                    data: d2,
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    },
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F'];
                                return colorList[params.dataIndex % colorList.length]
                            }
                        },
                    }
                }
            ]
        };
    
        option && myChart.setOption(option);
    });
}
