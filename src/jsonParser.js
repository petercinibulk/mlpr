import React from 'react';
import Plot from 'react-plotly.js';
import { Paper } from '@material-ui/core';

export const parse = () => {
    var data = require('./data.json');

    console.log(data);

    var plot_data = []
    for (var i = 0; i < data['boxplot_data'][0].length; i++) {
        plot_data.push({
            y: data['boxplot_data'][1][i],
            name: data['boxplot_data'][0][i],
            type: 'box'
        })
    }

    return <Paper elevation={3} style={{width: 'auto', height: 'auto', padding: '16px',
    margin: '16px'}}>
        <Plot
            data={plot_data}
            layout={{ width: 600, title: 'A Fancy Plot' }} />
    </Paper>


}
