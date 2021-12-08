import React from "react";
import "./Table.elements.css";

const Table = () => {
    return <div className="app-container">
        <table>
            <tbody>
            <tr>
                    <th>State</th>
                    <th>Total Cases</th>
                    <th>Total Deaths</th>
                    <th>Total Tests</th>
            </tr>
                <tr>
                    <td>California</td>
                    <td>5,005,507</td>
                    <td>75,256</td>
                    <td>113,539,006</td>
                </tr>
            </tbody>
        </table>
    </div>
};

export default Table;
