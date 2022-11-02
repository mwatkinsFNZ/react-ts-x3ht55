import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import {
  removeLocalStorage,
  updateLocalStorage,
} from '../CommonComponentCode/LocalStorageUtils';
import { PassedDownData } from '../CommonComponentCode/Types';
import { ChangeAppType } from '../Dock/ChangeApp';

export const PortfolioHomeApp: FC<{
  changeApp: ChangeAppType;
  localStorage: PassedDownData;
}> = ({ changeApp, localStorage }) => {
  const [state, setState] = useState(new Date());

  useEffect(() => {
    if (localStorage.path === 'buySellMode') {
      updateLocalStorage({ key: 'portfolio-review-buy-sell', value: true });
    } else if (localStorage.path === 'ReviewOnly') {
      removeLocalStorage('portfolio-review-buy-sell');
    }

    setState(new Date()); // used to trigger a re-render for the local-storage updates to take effect
  }, [history]);

  return (
    <div>
      <button onClick={() => changeApp('/portfolios/123/orders', 'orders')}>
        Orders
      </button>
    </div>
  );
};
