import * as React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { BreachesApp } from '../Breaches/BreachesApp';
import { useChangeApp } from '../Dock/ChangeApp';
import { AppStateContext, useAppStateContext } from '../Dock/DockApp';
import { PortfoliosApp } from '../PortfolioReview/PortfolioApp';

export default function Routes() {
  const { change } = useChangeApp();
  const { state, setState } = useAppStateContext(AppStateContext);
  const defaultChangeAppData = {
    path: undefined,
    params: undefined,
  };
  return (
    <div>
      <p>
        Child apps will print the current local storage content - Chrome has
        some default local storage.
      </p>
      <p>
        You can manually clear this by opening the panel's console (bottom of
        the panel) and typing window.localStorage.clear() and reopening the
        panel (top right of the panel is "close" button)
      </p>
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
