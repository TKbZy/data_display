import * as echarts from 'echarts';
import $ from "jquery";


export default function handle3() {
    let show_picture = document.getElementById('show_picture');

    let myChart = echarts.init(show_picture);
    let option;


    let d = [];

    const url = "http://127.0.0.1:8080/house/location/total_price"

    $.get(url, (r, _) => {
        let v = r.community;
        for (let p of v) {
            d.push([p.name, p.top_price]);
        }
        option = {
            title: {
                text: '总价最高TOP20',
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
            dataset: [
                {
                    dimensions: ['name', 'price'],
                    source: d
                },
                {
                    transform: {
                        type: 'sort',
                        config: { dimension: 'price', order: 'desc' }
                    }
                }
            ],
            xAxis: {
                type: 'category',
                axisLabel: { interval: 0, rotate: 30 }
            },
            yAxis: {
                name: "价格（万元）",
                nameLocation: "middle",
                nameTextStyle: { fontSize: 20 },
                nameGap: 60
            },
            series: {
                type: 'bar',
                encode: { x: 'name', y: 'price' },
                datasetIndex: 1,
                showBackground: false,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F'];
                            return colorList[params.dataIndex % colorList.length]
                        }
                    },
                }
            }
        };

        option && myChart.setOption(option);
    });
}
