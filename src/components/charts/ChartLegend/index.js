/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class ChartLegend extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul className="legends">
        {items.map(item => (
          <li key={item.key}>
            <a
              id={item.key}
              className="legends__item"
            >
              <span className="legends__item__color" style={{ backgroundColor: item.color }}>&nbsp;</span>
              <span className="legends__item__label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

ChartLegend.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      key: PropTypes.string,
      color: PropTypes.string
    })
  ).isRequired
};

export default ChartLegend;
