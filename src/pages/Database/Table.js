import React, { useState } from "react";
import "./Table.elements.css";
import data from "./covid.json"

const Table = () => {

    const [covidData, setcovidData] = useState(data);

    return <div className="app-container">
        <table>
            <tbody>
            <tr>
                    <th>State</th>
                    <th>Total Cases</th>
                    <th>Total Deaths</th>
                    <th>Total Tests</th>
            </tr>
            {covidData.map((tableData)=> <tr>
                    <td>{tableData.state}</td>
                    <td>{tableData.totalCase}</td>
                    <td>{tableData.totalDeath}</td>
                    <td>{tableData.totalTest}</td>
                </tr>)}
                <tr>
                    
                </tr>
            </tbody>
        </table>
    </div>
};

export default Table;
