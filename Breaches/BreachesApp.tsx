import * as React from 'react';
import { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { OverviewApp } from '../Breaches/Overview/OverviewApp';
import { ReportsApp } from '../Breaches/ReportsPage/ReportsApp';
import { ChangeAppType, PassedDownData } from '../CommonComponentCode/Types';

type Props = {
  changeApp: ChangeAppType;
  changeAppData: PassedDownData;
};
export const BreachesApp = ({ changeApp, changeAppData }: Props) => {
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
      window.localStorage.setItem('breaches-url', pathname);
    }
    setState(new Date()); // used to trigger a re-render for the local-storage updates to take effect
  }, [pathname]);

  return (
    <div>
      <h1>{basePage + ' - ' + subPage}</h1>
      <Switch>
        <Route path={`${path}/reportsPage`}>
          <ReportsApp changeApp={changeApp} passedDownData={changeAppData} />
        </Route>
        <Route path={`${path}/overview`}>
          <OverviewApp changeApp={changeApp} localStorage={changeAppData} />
        </Route>
      </Switch>
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
