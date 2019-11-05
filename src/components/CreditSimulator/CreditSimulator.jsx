import React from 'react';
// import Slider, { createSliderWithTooltip } from 'rc-slider';
// import 'rc-slider/assets/index.css';

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
export default class CreditSimulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

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

  /*
  handleAmount = value => {
    console.log(value)
  }
  handleTerm = value => {
    console.log(value)
  }
*/
  render() {
    return (
      <div className={style.main}>
        <Title title="Simulá tu crédito" />
        <div className={style.container}>
          <div className={style.sliders}>
            <TotalAmount handleSubmitButton={this.handleAmount} />
            <Term handleSubmitButton={this.handleTerm} />
          </div>
          <FixedFee />
        </div>
        <div className={style.buttonsContainer}>
          <CreditButton /> <Instalment />
        </div>
      </div>
    );
  }
}
