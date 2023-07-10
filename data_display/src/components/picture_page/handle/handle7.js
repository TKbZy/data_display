import * as echarts from 'echarts';
import $ from "jquery";

export default async function handle7() {
    let show_picture = document.getElementById("show_picture");
    let str = `
        <div id="p1" style="width: 50%; height: 75%;"></div>
        <div id="p2" style="width: 50%; height: 75%;"></div>
    `;
    show_picture.innerHTML = str;

    $.get("http://127.0.0.1:8080/house/statistics/unit_price_areas", (r, _) => {
        let d = [];
        let v = r.data;
        for (let p of v) {
            d.push([p.area, p.unit_price]);
        }
        let myChart1 = echarts.init(show_picture.querySelector("#p1"));
        let option1 = {
            title: {
                text: '单价与面积',
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
                scale: true
            },
            yAxis: {
                scale: true,
                name: "单价（元/平米）",
                nameTextStyle: { fontSize: 12 },
                nameGap: 30
            },
            series: [
                {
                    type: 'effectScatter',
                    symbolSize: 5,
                },
                {
                    type: 'scatter',
                    data: d
                }
            ]
        };
        option1 && myChart1.setOption(option1);

        $.get("http://127.0.0.1:8080/house/statistics/total_price_areas", (r, _) => {
            let d = [];
            let v = r.data;
            for (let p of v) {
                d.push([p.area, p.total_price]);
            }
            let myChart2 = echarts.init(show_picture.querySelector("#p2"));
            let option2 = {
                title: {
                    text: '总价与面积',
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
                    scale: true
                },
                yAxis: {
                    scale: true,
                    name: "总价（万元）",
                    nameTextStyle: { fontSize: 12 },
                    nameGap: 30
                },
                series: [
                    {
                        type: 'effectScatter',
                        symbolSize: 5,
                    },
                    {
                        type: 'scatter',
                        data: d
                    }
                ]
            };
            option2 && myChart2.setOption(option2);
        });
    });
}



