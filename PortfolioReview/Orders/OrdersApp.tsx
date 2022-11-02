import * as React from 'react';
import { FC } from 'react';
import { NewLocalStorage } from '../../CommonComponentCode/Types';
import { ChangeAppType } from '../../Dock/ChangeApp';

export const OrdersApp: FC<{
  changeApp: ChangeAppType;
  localStorage: NewLocalStorage;
}> = ({ changeApp, localStorage }) => {
  return (
    <div>
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
