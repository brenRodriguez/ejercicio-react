import React from 'react';
import PropTypes from 'prop-types';

import style from './FixedFee.scss';

export default function FixedFee({ feeValue }) {
  return (
    <div className={style.containerFee}>
      <span>Cuota fija por mes</span>
      <span className={style.feeVal}>{feeValue}</span>
    </div>
  );
}

FixedFee.propTypes = {
  feeValue: PropTypes.number,
};
