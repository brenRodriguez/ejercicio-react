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
      <div className={style.term}>
        <span>Plazo</span>
        <SliderTest onHandleSliderText={onHandleSliderText} min={1} max={24} />
      </div>
    );
  }
}

Term.propTypes = {
  onHandleSliderText: PropTypes.func,
  handleSubmitButton: PropTypes.func,
};
