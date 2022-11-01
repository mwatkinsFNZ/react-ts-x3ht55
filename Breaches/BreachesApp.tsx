import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';
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

  const { path } = useRouteMatch();

  useEffect(() => {
    if (!subPage) {
      const url = window.localStorage['breaches-url'];
      history.push(url ?? pathname + '/overview');
    } else {
      updateLocalStorage({ key: 'breaches-url', value: pathname });
    }
    setState(new Date()); // used to trigger a re-render for the local-storage updates to take effect
  }, [pathname]);

  return (
    <div>
      <h1>{basePage + ' - ' + subPage}</h1>
      <Route path={`${path}/reportsPage`}>
        <ReportsApp changeApp={changeApp} localStorage={localStorage} />
      </Route>
      <Route path={`${path}/overview`}>
        <OverviewApp changeApp={changeApp} localStorage={localStorage} />
      </Route>
      <div>
        <button onClick={() => changeApp('/portfolios/123', 'ReviewOnly')}>
          Review Only
        </button>
      </div>
      <div>
        <button onClick={() => changeApp('/portfolios/123', 'buySellMode')}>
          Buy Sell
        </button>
      </div>
    </div>
  );
};
