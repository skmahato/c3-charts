import React from 'react';
import PropTypes from 'prop-types';
import C3Chart from 'react-c3js';

import CardView, { CardViewHeader, CardViewBody } from '../../CardView';
import ChartLegend from '../ChartLegend';
import { getColumnData } from '../../../helpers/donutChart';
import stats, { DONUT_CHART_LEGEND } from '../../../fixtures/donutChart';

import './index.scss';

const DonutChart = () => {
  const chartData = {
    columns: getColumnData(stats, DONUT_CHART_LEGEND),
    type: 'donut'
  };

  return (
    <CardView className="card donut-chart">
      <CardViewHeader title="Devices" noBorder={true}/>
      <CardViewBody>
        <section className="donut-chart__content">
          <section className="donut-chart__content__diagram">
            <C3Chart
              key="donut-chart-key"
              data={chartData}
              color={{ pattern: DONUT_CHART_LEGEND.map(legend => legend.color) }}
              donut={{ width: 40, expand: false, title: `${DONUT_CHART_LEGEND.length} Total Users`, label: {show: false}}}
              size={{ width: 250, height: 250 }}
              legend={{ show: false }}
              tooltip={{ show: false }}
              className="c3-chart"
            />
          </section>
          <section className="donut-chart__content__legend">
            <ChartLegend
              key="donut-chart-key"
              items={DONUT_CHART_LEGEND}
            />
          </section>
        </section>
      </CardViewBody>
    </CardView>
  );
};

export default DonutChart;
