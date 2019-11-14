import React from 'react';
import PropTypes from 'prop-types';

import style from '../CreditSimulator/CreditSimulator.scss';
import SliderTest from '../SliderTest';
import { regex } from "./../../utils/utils.js"

export default class Term extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    const { onHandleSliderText } = this.props;
    return (
      <React.Fragment>
        <div className={style.term}>
          <span>Plazo</span>
          <SliderTest onHandleSliderText={onHandleSliderText} min={3} max={24} />
        </div>
        <div className={style.terms}><span>3</span><span>24</span></div>
      </React.Fragment>
    );
  }
}

Term.propTypes = {
  onHandleSliderText: PropTypes.func,
  handleSubmitButton: PropTypes.func,
};
