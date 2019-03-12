import React, { Component } from 'react';

import DonutChart from '../components/charts/DonutChart';
import './index.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="charts">
          <section className="charts__donut">
            <DonutChart />
          </section>

          <section className="charts__bar">
            <DonutChart />
          </section>

          <section className="charts__gauge">
            <DonutChart />
          </section>
        </div>
      </div>
    )
  }
}
