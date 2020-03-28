import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class MetricTable extends Component {

    render() {
        var headerLabels = [];
        for (var i = 1; i < this.props.tableData.header.length; i++) {
            headerLabels.push(<TableCell align="right" style={{fontWeight: 'bold'}}>{this.props.tableData.header[i]}</TableCell>);
        }
        var rowEntries = [];
        for (i = 0; i < this.props.tableData.rows.length; i++) {
            var rowEntry = [<TableCell component="th" scope="row">
                {this.props.tableData.rows[i][0]}
            </TableCell>];
            for (var j = 1; j < this.props.tableData.rows[i].length; j++) {
                rowEntry.push(<TableCell align="right" >{this.props.tableData.rows[i][j].toFixed(4)}</TableCell>);
            }
            rowEntries.push(<TableRow key={this.props.tableData.rows[i][0]}>{rowEntry}</TableRow>);
        }

        return (
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow >

                            <TableCell style={{fontWeight: 'bold'}}>{this.props.tableData.header[0]}</TableCell>
                            {headerLabels}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowEntries}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default MetricTable;
