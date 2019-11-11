import React from 'react';

import style from './CreditSimulator.scss';
import Title from '../Title/Title';
import TotalAmount from '../TotalAmount/TotalAmount';
import Term from '../Term/Term';
import FixedFee from '../FixedFee/FixedFee';
import CreditButton from '../Buttons/GetCredit/CreditButton';
import Instalment from '../Buttons/GetCredit/Instalment';

export default class CreditSimulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amountValue: 0,
      termValue: 0,
    };
  }

  handleAmount = value => {
    this.setState({
      amountValue: value,
    });
  };

  handleTerm = value => {
    this.setState({
      termValue: value,
    });
  };

  numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  calculate = () => {
    if (this.state.amountValue > 0 || this.state.termValue > 0) {
      const value = (this.state.amountValue / this.state.termValue).toFixed(2);
      return this.numberWithCommas(value);
    }
  };

  render() {
    return (
      <div className={style.main}>
        <Title title="Simulá tu crédito" />
        <div className={style.container}>
          <div className={style.sliders}>
            <TotalAmount onHandleSliderText={this.handleAmount} />
            <Term onHandleSliderText={this.handleTerm} />
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
