import * as React from 'react';
import { FC } from 'react';
import { NewLocalStorage } from '../../CommonComponentCode/Types';
import { ChangeAppType } from '../../Dock/ChangeApp';
import { PrintLocalStorage } from '../../PrintLocalStorage';

export const OverviewApp: FC<{
  changeApp: ChangeAppType;
  localStorage: NewLocalStorage;
}> = ({ changeApp, localStorage }) => {
  return (
    <div>
      <PrintLocalStorage />
      <div>
        <button
          onClick={() => changeApp('/breaches/reportsPage', 'reportsPage')}
        >
          Reports Page
        </button>
      </div>
    </div>
  );
};
