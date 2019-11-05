import React from 'react';
import style from '../CreditSimulator/CreditSimulator.scss';
import SliderTest from '../SliderTest';

export default class TotalAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = e => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
      console.log(this.state.value);
      this.props.handleSubmitButton(this.state.value);
    }
  };

  handleSubmit = e => {
    console.log(this.state.value);
    e.preventDefault();
  };

  render() {
    return (
      <div className={style.totalAmount}>
        <span>Monto Total</span>
        <SliderTest />
      </div>
    );
  }
}
