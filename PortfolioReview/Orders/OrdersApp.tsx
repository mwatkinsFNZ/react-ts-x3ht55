import * as React from 'react';
import { FC } from 'react';
import { ChangeAppType, PassedDownData } from '../../CommonComponentCode/Types';
import { PrintLocalStorage } from '../../PrintLocalStorage';

export const OrdersApp: FC<{
  changeApp: ChangeAppType;
  localStorage: PassedDownData;
}> = ({ changeApp, localStorage }) => {
  return (
    <div>
      <PrintLocalStorage />
      <div>
        <button onClick={() => changeApp('/portfolios/123', 'ReviewOnly')}>
          Portfolios Review Only
        </button>
      </div>
      <div>
        <button onClick={() => changeApp('/portfolios/123', 'buySellMode')}>
          Portfolios Edit
        </button>
      </div>
    </div>
  );
};
