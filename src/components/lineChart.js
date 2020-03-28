import Chart from "react-apexcharts";
import React, { Component } from "react";

function createLineChartSeries(lineChartData) {
    var series = []
    for (var i = 0; i < lineChartData['series'].length; i++){
        series.push({
            name: lineChartData['seriesLabels'][i],
            data: lineChartData['series'][i]
        });
    }
    return series;
}

function createLineChartOptions(lineChartData) {
    return {
        chart: {
            type: 'line',
            // height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                autoSelected: 'zoom'
            }
        },
        colors: ['#2196f3', '#f44336'],
        dataLabels: {
            enabled: false
        },
        title: {
            text: lineChartData['title'],
            align: 'left'
        },
        yaxis: {
            title: {
                text: lineChartData['yAxisLabel']
            },
            labels: {
                formatter: function (value) {
                  return value.toFixed(4);
                }
              }
        },
        xaxis: {
            categories: lineChartData['catagories'],
            title: {
                text: lineChartData['xAxisLabel']
            },
        },
    };
}

class LineChart extends Component {
    render() {
        var series = createLineChartSeries(this.props.lineChartData);
        var options = createLineChartOptions(this.props.lineChartData);
        return <Chart
            options={options}
            series={series}
            type="line"
            width="500"
        />
    };
}

export default LineChart;