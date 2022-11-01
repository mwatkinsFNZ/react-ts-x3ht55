import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  removeLocalStorage,
  updateLocalStorage,
} from '../CommonComponentCode/LocalStorageUtils';
import { NewLocalStorage } from '../CommonComponentCode/Types';
import { ChangeAppType } from '../Dock/ChangeApp';
import { PrintLocalStorage } from '../PrintLocalStorage';

export const PortfoliosApp: FC<{
  changeApp: ChangeAppType;
  localStorage: NewLocalStorage;
}> = ({ changeApp, localStorage }) => {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const [, basePage] = pathname.split('/');
  const [state, setState] = useState(new Date());

  useEffect(() => {
    if (localStorage.path === 'buySellMode') {
      updateLocalStorage({ key: 'portfolio-review-buy-sell', value: 'true' });
    } else if (localStorage.path === 'ReviewOnly') {
      removeLocalStorage('portfolio-review-buy-sell');
    }

    setState(new Date()); // used to trigger a re-render for the local-storage updates to take effect
  }, [history]);

  return (
    <div>
      <h1>{basePage}</h1>
      <PrintLocalStorage />
      <button onClick={() => changeApp('/breaches/overview', 'overview')}>
        Breach Overview
      </button>
      <button
        onClick={() =>
          changeApp(
            '/breaches/reportsPage',
            'breachSummary',
            new Map([['breaches-reports-breaches-id', '123']])
          )
        }
      >
        Breach Summary
      </button>
    </div>
  );
};
