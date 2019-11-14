import React from 'react';
import PropTypes from 'prop-types';

import style from '../CreditSimulator/CreditSimulator.scss';
import SliderTest from '../SliderTest';
import { regex } from "./../../utils/utils.js"


export default class TotalAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    const { onHandleSliderText } = this.props;
    return (
      <React.Fragment>
        <div className={style.totalAmount}>
          <span>Monto Total</span>
          <SliderTest
            onHandleSliderText={onHandleSliderText}
            min={5000}
            max={50000}
          />
        </div>
        <div className={style.amount}><span>$5.000</span><span>$50.000</span></div>
      </React.Fragment>
    );
  }
}

TotalAmount.propTypes = {
  onHandleSliderText: PropTypes.func,
  handleSubmitButton: PropTypes.func,
};
