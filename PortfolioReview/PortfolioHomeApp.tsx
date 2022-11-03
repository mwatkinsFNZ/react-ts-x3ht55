import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { ChangeAppType, PassedDownData } from '../CommonComponentCode/Types';
import { PrintLocalStorage } from '../PrintLocalStorage';

export const PortfolioHomeApp: FC<{
  changeApp: ChangeAppType;
  localStorage: PassedDownData;
}> = ({ changeApp, localStorage }) => {
  const [state, setState] = useState(new Date());

  useEffect(() => {
    if (localStorage.path === 'buySellMode') {
      window.localStorage.setItem('portfolio-review-buy-sell', 'true');
    } else if (localStorage.path === 'ReviewOnly') {
      window.localStorage.removeItem('portfolio-review-buy-sell');
    }

    setState(new Date()); // used to trigger a re-render for the local-storage updates to take effect
  }, [history]);

  return (
    <div>
      <PrintLocalStorage />
      <button onClick={() => changeApp('/portfolios/123/orders', 'orders')}>
        Orders
      </button>
    </div>
  );
};
