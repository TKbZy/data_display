import * as echarts from 'echarts';
import $ from "jquery";


export default function handle1() {
    let show_picture = document.getElementById("show_picture");

    let myChart = echarts.init(show_picture);
    let option;

    let d1 = [], d2 = [];

    const url = "http://127.0.0.1:8080/house/region/nums"

    $.get(url, (r, _) => {
        let v = r.region_info;
        for (let p of v) {
            d1.push(p.name); d2.push(p.nums);
        }
        option = {
            title: {
                text: '房源数量',
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
                type: 'category',
                data: d1,
                axisLabel: { interval: 0, rotate: 30 }
            },
            yAxis: {
                type: 'value',
                name: "房源数量（套）",
                nameLocation: "middle",
                nameTextStyle: { fontSize: 20 },
                nameGap: 60
            },
            series: [
                {
                    data: d2,
                    type: 'line',
                }
            ]
        };

        option && myChart.setOption(option);
    });
}