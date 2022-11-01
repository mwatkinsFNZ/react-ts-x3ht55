import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Route, useHistory } from 'react-router-dom';
import { OverviewApp } from '../Breaches/Overview/OverviewApp';
import { ReportsApp } from '../Breaches/ReportsPage/ReportsApp';
import { updateLocalStorage } from '../CommonComponentCode/LocalStorageUtils';
import { NewLocalStorage } from '../CommonComponentCode/Types';
import { ChangeAppType } from '../Dock/ChangeApp';

const baseName = '/breaches';

export const BreachesApp: FC<{
  changeApp: ChangeAppType;
  localStorage: NewLocalStorage;
}> = ({ changeApp, localStorage }) => {
  const [state, setState] = useState(new Date());
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const [, basePage, subPage] = pathname.split('/');
  useEffect(() => {
    if (!subPage) {
      const url = window.localStorage['breaches-url'];

      console.log(`url: ${url}`);
      history.push(url);
    }

    updateLocalStorage({ key: 'breaches-url', value: pathname });
    setState(new Date()); // used to trigger a re-render for the local-storage updates to take effect
  }, [history]);
  console.log(new Date());
  return (
    <div>
      <h1>{basePage + ' - ' + subPage}</h1>
      <BrowserRouter basename={baseName}>
        <Route path={'/reportsPage'}>
          <ReportsApp changeApp={changeApp} localStorage={localStorage} />
        </Route>
        <Route path={'/overview'}>
          <OverviewApp changeApp={changeApp} localStorage={localStorage} />
        </Route>
        <Route path={'/'}>hi</Route>
      </BrowserRouter>
      <button onClick={() => changeApp('/portfolios/123', 'ReviewOnly')}>
        Review Only
      </button>
      <button onClick={() => changeApp('/portfolios/123', 'buySellMode')}>
        Buy Sell
      </button>
    </div>
  );
};
