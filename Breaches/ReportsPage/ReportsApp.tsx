import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  removeLocalStorage,
  updateLocalStorage,
} from '../../CommonComponentCode/LocalStorageUtils';
import { PassedDownData } from '../../CommonComponentCode/Types';
import { ChangeAppType } from '../../Dock/ChangeApp';
import { PrintLocalStorage } from '../../PrintLocalStorage';

export const ReportsApp: FC<{
  changeApp: ChangeAppType;
  passedDownData: PassedDownData;
}> = ({ changeApp, passedDownData }) => {
  const history = useHistory();
  const [state, setState] = useState(new Date());

  useEffect(() => {
    if (passedDownData.path === 'breachSummary') {
      updateLocalStorage({ key: 'breaches-reports-modal-open', value: true });
      updateLocalStorage({
        key: 'breaches-reports-breaches-id',
        value: 123, //passedDownData.params.get('breaches-reports-breaches-id'),
      });
    } else if (passedDownData.path === 'reportsPage') {
      removeLocalStorage('breaches-reports-modal-open');
      removeLocalStorage('breaches-reports-breaches-id');
    }

    setState(new Date()); // used to trigger a re-render for the local-storage updates to take effect
  }, [history]);

  return (
    <div>
      <PrintLocalStorage />
      <button onClick={() => changeApp('/breaches/overview', 'overview')}>
        Breach Overview
      </button>
    </div>
  );
};
