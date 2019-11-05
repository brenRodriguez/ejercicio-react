import React from 'react';

import Slider from 'rc-slider';

import '!style-loader!css-loader!rc-slider/assets/index.css';
import style from "./SliderTest.scss";

export default class SliderTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onSliderChange = e => {
    this.setState(
      {
        value: e.target.value,
      },
      () => {
        console.log(this.state.value);
      },
    );
  };

  onSliderChange2 = value => {
    this.setState(
      {
        value,
      },
      () => {
        console.log(this.state.value);
      },
    );
  };

  render() {
    return (
      <div style={{ margin: 0 }}>
        <input value={this.state.value} onChange={this.onSliderChange} />
        <div className={style.sliderContainer}>
        <Slider
          min={5000}
          max={50000}
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
