import * as echarts from 'echarts';
import $ from "jquery";

export default function handle5() {
    let show_picture = document.getElementById('show_picture');

    let myChart = echarts.init(show_picture);

    let d = [['area1', 'area2', 'name']];
    let max = 0, min = 100000000;

    let option;

    const url = "http://127.0.0.1:8080/house/statistics/areas"
    
    $.get(url, (r, _)=> {
        //console.log(r)
        let v = r.area_info;
        for (let p of v) {
            d.push([p.nums, p.name, p.name]);
            min = Math.min(min, p.nums);
            max = Math.max(max, p.nums);
        }

        option = {
            title: {
                text: '面积分布区间',
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
            dataset: {
                source: d
            },
            grid: { containLabel: true },
            xAxis: { },
            yAxis: { 
                type: 'category',
                name: "建筑面积（平米）",
                nameLocation: "middle",
                nameTextStyle: { fontSize: 20 },
                nameGap: 60
            },
            visualMap: {
                orient: 'horizontal',
                left: 'center',
                min: min,
                max: max,
                text: ['High', 'Low'],
                // Map the score column to color
                dimension: 0,
                inRange: {
                    color: ['#65B581', '#FFCE34', '#FD665F']
                }
            },
            series: [
                {
                    type: 'bar',
                    encode: {
                        // Map the "area" column to X axis.
                        x: 'area',
                        // Map the "name" column to Y axis
                        y: 'name'
                    }
                }
            ]
        };
    
        option && myChart.setOption(option);
    });
}
