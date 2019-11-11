import React from 'react';
import PropTypes from 'prop-types';

import Slider from 'rc-slider';

import '!style-loader!css-loader!rc-slider/assets/index.css';
import style from './SliderTest.scss';

export default class SliderTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onSliderChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  onSliderChange2 = value => {
    this.setState({
      value,
    });
    this.props.onHandleSliderText(value);
  };

  render() {
    return (
      <div style={{ margin: 0 }}>
        <input value={this.state.value} onChange={this.onSliderChange} />
        <div className={style.sliderContainer}>
          <Slider
            min={this.props.min}
            max={this.props.max}
            value={this.state.value}
            onChange={this.onSliderChange2}
            railStyle={{
              height: 5,
            }}
            handleStyle={{
              height: 16,
              width: 16,
              marginLeft: 4,
              marginTop: -6,
              backgroundColor: '#fff',
              border: 0,
            }}
            trackStyle={{
              background: 'none',
            }}
          />
        </div>
      </div>
    );
  }
}

SliderTest.propTypes = {
  onSliderChange: PropTypes.func,
  onSliderChange2: PropTypes.func,
  onHandleSliderText: PropTypes.func,
};
