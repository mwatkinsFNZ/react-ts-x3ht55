import * as React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { BreachesApp } from '../Breaches/BreachesApp';
import { useChangeApp } from '../Dock/ChangeApp';
import { AppStateContext, useAppStateContext } from '../Dock/DockApp';
import { PortfoliosApp } from '../PortfolioReview/PortfolioApp';

export default function Routes() {
  const { change } = useChangeApp([
    { shortname: 'breaches' },
    { shortname: 'portfolios' },
  ]);
  const { state, setState } = useAppStateContext(AppStateContext);
  const defaultChangeAppData = {
    path: undefined,
    params: undefined,
  };
  return (
    <div>
      <p>Questions:</p>
      <ul>
        <li>
          Should the full url path be passed in from the source app? or should
          this be handled by the destination app as part of the "useEffect
          managing the path"?
        </li>
      </ul>
      <p>Using the simulation:</p>
      <ul>
        <li>
          Child apps will print the current local storage content - Chrome has
          some default local storage.
        </li>
        <li>
          You can manually clear this by opening the panel's console (bottom of
          the panel) and typing window.localStorage.clear() and hit the refresh
          button on the right-panel
        </li>
      </ul>
      <h1>Dock Navigation: </h1>
      <div>
        <NavLink to={'/Portfolios'} onClick={() => setState(undefined)}>
          Portfolios
        </NavLink>
      </div>
      <div>
        <NavLink to={'/Breaches'} onClick={() => setState(undefined)}>
          Breaches
        </NavLink>
      </div>
      <Route path={'/Breaches'}>
        <BreachesApp
          changeApp={change}
          localStorage={state?.changeAppData ?? defaultChangeAppData}
        />
      </Route>
      <Route path={'/Portfolios'}>
        <PortfoliosApp
          changeApp={change}
          localStorage={state?.changeAppData ?? defaultChangeAppData}
        />
      </Route>
      <Route path={'/'}>
        <Redirect to={'/Portfolios'} />
      </Route>
    </div>
  );
}
