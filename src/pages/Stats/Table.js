import React, { useState } from "react";
import "./Table.elements.css";
import data from "./Stats.json"

const Table = () => {

    const [covidData, setcovidData] = useState(data);

    return <div className="app-container">
        <table>
            <tbody>
            <tr>
                    <th>Virus</th>
                    <th>Total Cases</th>
                    <th>Total Deaths</th>
            </tr>
            {covidData.map((tableData)=> <tr>
                    <td>{tableData.virus}</td>
                    <td>{tableData.totalCase}</td>
                    <td>{tableData.totalDeath}</td>
                </tr>)}
                <tr>
                    
                </tr>
            </tbody>
        </table>
    </div>
};

export default Table;