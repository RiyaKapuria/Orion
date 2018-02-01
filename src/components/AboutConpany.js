import React, { Component } from 'react';
import Chartjs from 'chart.js';
var LineChart = require("react-chartjs").Line;

export class AboutConpany extends Component {
  render() {
    var chartOptions: {
      showScale: true,
      pointDot: true,
      showLines: false,
      title: {
        display: true,
        text: 'Company Progress Chart'
      },
      legend: {
        display: true,
        labels: {
           boxWidth: 50,
           fontSize: 10,
           fontColor: '#bbb',
           padding: 5,

        }
      }
    }

    var chartData= {
      labels: ['2006', '2007','2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      datasets: [
        {
          label: 'Current lag',
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          data: [50, 55, 52, 48, 45, 60, 67, 73, 65, 63, 70, 75, 78]
        }
      ]
    }

    return (
      <div className="row">
        <h2 className="margin">&emsp;<b>Company Progress Chart</b></h2>
        <div className="col-md-3">
          <div className="box box-solid margin">
            <div className="box-header">
              <h3 className="box-title">Holiday List For This Year</h3>
            </div>
            <div className="box-body no-padding">
              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td><span className="badge bg-red">2017-12-25</span></td>
                    <td>Christmas</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-yellow">2017-10-18</span></td>
                    <td>Deepavalli</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-light-blue">2017-10-02</span></td>
                    <td>Gandhi Jayanthi</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-green">2017-09-28</span></td>
                    <td>Ayudha Pooja</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-red">2017-12-25</span></td>
                    <td>Christmas</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-yellow">2017-10-18</span></td>
                    <td>Deepavalli</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-light-blue">2017-10-02</span></td>
                    <td>Gandhi Jayanthi</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-green">2017-09-28</span></td>
                    <td>Ayudha Pooja</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <LineChart data={chartData} options={chartOptions} width="800" height="400"/>
        </div>
      </div>
    );
  }
}
