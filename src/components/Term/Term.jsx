import React from 'react';
import PropTypes from 'prop-types';

import style from '../CreditSimulator/CreditSimulator.scss';
import SliderTest from '../SliderTest';

export default class Term extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = e => {
    const re = /^[0-9\b]+$/;
    const { handleSubmitButton } = this.props;
    const { value } = this.state;
    const currentValue = e.target.value;
    if (currentValue === '' || re.test(currentValue)) {
      this.setState({ value: currentValue });
      handleSubmitButton(value);
    }
  };

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
