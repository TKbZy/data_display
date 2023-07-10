import * as echarts from 'echarts';
import $ from "jquery";

export default function handle8() {
    let show_picture = document.getElementById('show_picture');

    let myChart = echarts.init(show_picture);

    let option;

    let d = [];

    const url = "http://127.0.0.1:8080/house/statistics/house_type"

    $.get(url, (r, _) => {
        let v = r.house_type;
        for (let p of v) {
            d.push({value: p.percentage / 100, name: p.type_name + ": " + String(p.percentage) + "%"});
        }
        option = {
            title: {
                text: '房屋户型占比情况',
                left: 'center',
                textStyle: {
                    color: '#333',
                    fontStyle: 'normal',
                    fontWeight: 'bolder',
                    fontSize: 36
                },
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    type: 'pie',
                    radius: '50%',
                    data: d,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    
        option && myChart.setOption(option);
    });
}
