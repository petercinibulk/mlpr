import Chart from "react-apexcharts";
import React, { Component } from "react";

function createHeatMapSeries(heatMapData) {
    var data_series = [];
    for (var i = 0; i < heatMapData['labels'].length; i++) {
        var x = []
        for (var j = heatMapData['labels'].length - 1; j >= 0; j--) {
            x.push({
                x: heatMapData['labels'][j],
                y: heatMapData['data'][i][j]
            });
        }
        data_series.push({
            name: heatMapData['labels'][i],
            data: x,
        })
    }
    return data_series
}

function createHeatMapOptions(heatMapData) {
    return {
        chart: {
            height: 350,
            type: 'heatmap',
        },
        dataLabels: {
            enabled: true,
            style: {
                fontWeight: 'normal',
                colors: ['#000']
            },
        },
        legend: {
            show: false,
        },
        colors: ['#2196f3'],
        yaxis: {
            title: {
                text: heatMapData['yAxisLabel']
            },
        },
        xaxis: {
            categories: heatMapData['labels'],
            title: {
                text: heatMapData['xAxisLabel']
            },
        },
        title: {
            text: heatMapData['title']
        },
    };
}

class HeatMap extends Component {
    render() {
        var series = createHeatMapSeries(this.props.heatMapData);
        var options = createHeatMapOptions(this.props.heatMapData);
        return <Chart
            options={options}
            series={series}
            type="heatmap"
            width="500"
        />
    }
}

export default HeatMap