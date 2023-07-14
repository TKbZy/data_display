import * as echarts from 'echarts';
import $ from "jquery";

export default function handle9() {
    let show_picture = document.getElementById('show_picture');

    let myChart = echarts.init(show_picture);
    let option;
    let d = [];

    const url = "http://127.0.0.1:8080/house/statistics/decoration"

    $.get(url, (r, _) => {
        //console.log(r)
        let v = r.decoration;
        for (let p of v) {
            d.push({ value: p.percentage, name: p.name });
        }
        option = {
            textStyle: {
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'bolder',
                fontSize: 20
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    itemStyle: {
                        borderRadius: 10,
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    label: {
                        normal: {
                            formatter: '{b}:{d}%'
                        },
                        show: true,
                        position: 'middle'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 40,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: d
                }
            ]
        };

        option && myChart.setOption(option);
    });
}
