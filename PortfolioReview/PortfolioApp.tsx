import * as React from 'react';
import { FC } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import { PassedDownData } from '../CommonComponentCode/Types';
import { ChangeAppType } from '../Dock/ChangeApp';
import { OrdersApp } from '../PortfolioReview/Orders/OrdersApp';
import { PortfolioHomeApp } from '../PortfolioReview/PortfolioHomeApp';
import { PrintLocalStorage } from '../PrintLocalStorage';

export const PortfoliosApp: FC<{
  changeApp: ChangeAppType;
  localStorage: PassedDownData;
}> = ({ changeApp, localStorage }) => {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  const [, basePage, portfolioId, subPage] = pathname.split('/');
  const { path } = useRouteMatch();

  return (
    <div>
      <h1>{subPage ? basePage + ' - ' + subPage : basePage}</h1>
      <PrintLocalStorage />
      <Switch>
        <Route path={`${path}/:portfolioId/orders`}>
          <OrdersApp changeApp={changeApp} localStorage={localStorage} />
        </Route>
        <Route exact path={`${path}`}>
          {/* this route is not needed in the actual app due to the default portfolio id */}
          <PortfolioHomeApp changeApp={changeApp} localStorage={localStorage} />
        </Route>
        <Route exact path={`${path}/:portfolioId`}>
          <PortfolioHomeApp changeApp={changeApp} localStorage={localStorage} />
        </Route>
      </Switch>
      <div>
        <button onClick={() => changeApp('/breaches/overview', 'overview')}>
          Breach Overview
        </button>
      </div>
      <div>
        <button
          onClick={() => changeApp('/breaches/reportsPage', 'reportsPage')}
        >
          Breach Reports
        </button>
      </div>
      <div>
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
    </div>
  );
};
