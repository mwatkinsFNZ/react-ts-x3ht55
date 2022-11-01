import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateLocalStorage } from '../CommonComponentCode/UpdateLocalStorage';
import { ChangeAppType } from '../Dock/ChangeApp';
import { Path } from '../Dock/Types';
import { PrintLocalStorage } from '../PrintLocalStorage';

export const PortfoliosApp: FC<{ changeApp: ChangeAppType; path: Path }> = ({
  changeApp,
  path,
}) => {
  const history = useHistory();
  const [state, setState] = useState(new Date());

  useEffect(() => {
    if (path === 'buySellMode') {
      updateLocalStorage({ key: 'portfolio-review-buy-sell', value: 'true' });
    } else if (path === 'ReviewOnly') {
      updateLocalStorage({ key: 'portfolio-review-buy-sell', value: 'false' });
    }

    setState(new Date()); // used to trigger a re-render for the local-storage updates to take effect
  }, [history]);

  return (
    <div>
      <h1>Portfolio Review</h1>
      <PrintLocalStorage />
      <button onClick={() => changeApp('/breaches', 'breachSummary')}>
        Breach Summary
      </button>
      <button onClick={() => changeApp('/breaches', 'overview')}>
        Breach Overview
      </button>
    </div>
  );
};
