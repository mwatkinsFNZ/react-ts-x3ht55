import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateLocalStorage } from '../CommonComponentCode/UpdateLocalStorage';
import { ChangeAppType } from '../Dock/ChangeApp';
import { Path } from '../Dock/Types';
import { PrintLocalStorage } from '../PrintLocalStorage';

export const BreachesApp: FC<{ changeApp: ChangeAppType; path: Path }> = ({
  changeApp,
  path,
}) => {
  const history = useHistory();
  const [state, setState] = useState(new Date());

  useEffect(() => {
    if (path === 'breachSummary') {
      updateLocalStorage({ key: 'breaches-reports-modal-open', value: 'true' });
    } else if (path === 'overview') {
      updateLocalStorage({
        key: 'breaches-reports-modal-open',
        value: 'false',
      });
    }

    setState(new Date()); // used to trigger re-render
  }, [history]);

  return (
    <div>
      <h1>Breaches</h1>
      <PrintLocalStorage />
      <button onClick={() => changeApp('/portfolios', 'ReviewOnly')}>
        Review Only
      </button>
      <button onClick={() => changeApp('/portfolios', 'buySellMode')}>
        Buy Sell
      </button>
    </div>
  );
};
