import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { ChangeAppType, PassedDownData } from '../CommonComponentCode/Types';
import { PrintLocalStorage } from '../PrintLocalStorage';

export const PortfolioHomeApp: FC<{
  changeApp: ChangeAppType;
  changeAppData: PassedDownData;
}> = ({ changeApp, changeAppData }) => {
  const [state, setState] = useState(new Date());

  useEffect(() => {
    if (
      changeAppData.path === 'buySellMode'
      /* CAN ADD ADDITIONAL CHECKS HERE - E.G. PERMISSION CHECK */
    ) {
      window.localStorage.setItem('portfolio-review-buy-sell', 'true');
    } else if (changeAppData.path === 'ReviewOnly') {
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
