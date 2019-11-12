import React from 'react';

import style from './CreditSimulator.scss';
import Title from '../Title/Title';
import TotalAmount from '../TotalAmount/TotalAmount';
import Term from '../Term/Term';
import FixedFee from '../FixedFee/FixedFee';
import CreditButton from '../Buttons/GetCredit/CreditButton';
import Instalment from '../Buttons/GetCredit/Instalment';
import { numberWithCommas } from "./../../utils/utils.js"

export default class CreditSimulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountValue: 0,
      termValue: 0,
    };
  }

  handleAmount = key => e => {
    this.setState({
      [key]: e,
    });
  };

  calculate = () => {
    if (this.state.amountValue > 0 || this.state.termValue > 0) {
      const value = (this.state.amountValue / this.state.termValue).toFixed(2);
      return numberWithCommas(value);
    }
  };

  render() {
    return (
      <div className={style.main}>
        <Title title="Simulá tu crédito" />
        <div className={style.container}>
          <div className={style.sliders}>
            <TotalAmount onHandleSliderText={this.handleAmount("amountValue")} />
            <Term onHandleSliderText={this.handleAmount("termValue")} />
          </div>
          <FixedFee feeValue={this.calculate()} />
        </div>
        <div className={style.buttonsContainer}>
          <CreditButton /> <Instalment />
        </div>
      </div>
    );
  }
}
