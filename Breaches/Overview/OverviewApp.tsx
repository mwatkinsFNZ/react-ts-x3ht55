import * as React from 'react';
import { FC } from 'react';
import { ChangeAppType, PassedDownData } from '../../CommonComponentCode/Types';
import { PrintLocalStorage } from '../../PrintLocalStorage';

export const OverviewApp: FC<{
  changeApp: ChangeAppType;
  changeAppData: PassedDownData;
}> = ({ changeApp, changeAppData }) => {
  return (
    <div>
      <PrintLocalStorage />
      <button onClick={() => changeApp('/breaches/reportsPage', 'reportsPage')}>
        Breach Reports
      </button>
    </div>
  );
};
