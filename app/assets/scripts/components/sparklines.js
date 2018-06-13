'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line } from 'recharts';

class Sparklines extends React.Component {
  componentDidMount () {}

  setRef (el) {
    this._wrapper = el;
  }

  render () {
    const {
      data
    } = this.props;

    return (
      <div ref={this.setRef.bind(this)}>
        <LineChart
          width={165}
          height={50}
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <Line type="linear" dot={false} dataKey="modelEstimate" stroke="#ff7300" yAxisId={0} />
          <Line type="linear" dot={false} dataKey="groundStation" stroke="#387908" yAxisId={1} />
        </LineChart>
      </div>
    );
  }
}

Sparklines.defaultProps = {
  data: [
    {
      modelEstimate: 5,
      groundStation: 6
    },
    {
      modelEstimate: 10,
      groundStation: 7
    },
    {
      modelEstimate: 4,
      groundStation: 4
    },
    {
      modelEstimate: 20,
      groundStation: 15
    },
    {
      modelEstimate: 21,
      groundStation: 20
    }
  ]
};

Sparklines.propTypes = {
  data: PropTypes.array
};

export default Sparklines;
