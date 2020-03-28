import React from 'react';
import LineChart from './components/lineChart';
import BoxPlot from './components/boxPlot';
import MetricTable from './components/table';
import HeatMap from './components/heatMap';

export const parse = (data) => {
    // var data = require(data.json);

    var components = [];
    if (data != null) {
        data['tables'].forEach((table) => {
            components.push(<MetricTable tableData={table} />);
        });

        data['lineCharts'].forEach((lineChart) => {
            components.push(<LineChart lineChartData={lineChart} />);
        });

        data['heatMaps'].forEach((heatMap) => {
            components.push(<HeatMap heatMapData={heatMap} />);
        });

        data['boxPlots'].forEach((boxPlot) => {
            components.push(<BoxPlot boxPlotData={boxPlot} />);
        });
    }

    return components



}
