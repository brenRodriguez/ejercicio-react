import React from 'react';

import style from './Buttons.scss';

export default function CreditButton() {
  return (
    <div className={style.credit}>
      <button className={style.creditBtn} type="button">
        Obtené Crédito sisi
      </button>
    </div>
  );
}
