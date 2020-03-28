import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class BoxPlot extends Component {
    render() {
        var plot_data = []
        for (var i = 0; i < this.props.boxPlotData['labels'].length; i++) {
            plot_data.push({
                y: this.props.boxPlotData['values'][i],
                name: this.props.boxPlotData['labels'][i],
                type: 'box'
            })
        }

        return <Plot data={plot_data} layout={{ width: 500, height:350, title: 'Cross-Correlation' }} />;
    }
}


export default BoxPlot;