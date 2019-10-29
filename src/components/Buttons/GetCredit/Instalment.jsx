import React from 'react';

import style from './Buttons.scss';

export default function Instalment() {
  return (
    <div className={style.instalment}>
      <button type="button" className={style.instalmentBtn}>
        Ver detalle de <br /> cuotas
      </button>
    </div>
  );
}
