import React from 'react';
// import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

import style from './CreditSimulator.scss';
import Title from '../Title/Title';
import TotalAmount from '../TotalAmount/TotalAmount';
import Term from '../Term/Term';
import FixedFee from '../FixedFee/FixedFee';
import CreditButton from '../Buttons/GetCredit/CreditButton';
import Instalment from '../Buttons/GetCredit/Instalment';

/* const style = { width: 600, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}
*/
function CreditSimulator() {
  /* onSliderChange = value => {
    this.setState(
      {
        value,
      },
      () => {
        console.log(this.state.value);
      },
    );
  }; */
  // replace for loanCalculator

  // loanDuration
  // detail installments
  return (
    <div className={style.main}>
      <Title title="Simulá tu crédito" />
      <div className={style.container}>
        <div className={style.sliders}>
          <TotalAmount />
          <Term />
        </div>
        <FixedFee />
      </div>
      <div className={style.buttonsContainer}>
        <CreditButton /> <Instalment />
      </div>
    </div>
  );
}

export default CreditSimulator;

/*
<div style={{ margin: 50 }}>
          <p>{this.state.value}</p>
          <p>Basic Slider</p>
          <Slider
            min={0}
            max={120}
            value={this.state.value}
            onChange={this.onSliderChange}
            railStyle={{
              height: 2,
            }}
            handleStyle={{
              height: 28,
              width: 28,
              marginLeft: -14,
              marginTop: -14,
              backgroundColor: 'red',
              border: 0,
            }}
            trackStyle={{
              background: 'none',
            }}
          />
        </div> */
