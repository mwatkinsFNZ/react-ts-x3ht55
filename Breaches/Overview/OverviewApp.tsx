import * as React from 'react';
import { FC } from 'react';
import { PassedDownData } from '../../CommonComponentCode/Types';
import { ChangeAppType } from '../../Dock/ChangeApp';
import { PrintLocalStorage } from '../../PrintLocalStorage';

export const OverviewApp: FC<{
  changeApp: ChangeAppType;
  localStorage: PassedDownData;
}> = ({ changeApp, localStorage }) => {
  return (
    <div>
      <PrintLocalStorage />
      <button onClick={() => changeApp('/breaches/reportsPage', 'reportsPage')}>
        Breach Reports
      </button>
    </div>
  );
};
