import * as React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { BreachesApp } from '../Breaches/BreachesApp';
import { useChangeApp } from '../Dock/ChangeApp';
import { AppStateContext, useAppStateContext } from '../Dock/DockApp';
import { PortfoliosApp } from '../PortfolioReview/PortfolioApp';

export default function Routes() {
  const { change } = useChangeApp();
  const { state, setState } = useAppStateContext(AppStateContext);

  return (
    <div>
      <span>Dock Navigation: </span>
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
        <BreachesApp changeApp={change} path={state} />
      </Route>
      <Route path={'/Portfolios'}>
        <PortfoliosApp changeApp={change} path={state} />
      </Route>
      <Route path={'/'}>
        <Redirect to={'/Portfolios'} />
      </Route>
    </div>
  );
}
