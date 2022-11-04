import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getCrossAppValue } from '../../CommonComponentCode/GetChangeAppValue';
import { ChangeAppType, PassedDownData } from '../../CommonComponentCode/Types';
import { PrintLocalStorage } from '../../PrintLocalStorage';

export const ReportsApp: FC<{
  changeApp: ChangeAppType;
  passedDownData: PassedDownData;
}> = ({ changeApp, passedDownData }) => {
  const history = useHistory();
  const [state, setState] = useState(new Date());

  useEffect(() => {
    if (passedDownData.path === 'breachSummary') {
      window.localStorage.setItem('breaches-reports-modal-open', 'true');
      window.localStorage.setItem(
        'breaches-reports-breaches-id',
        getCrossAppValue(
          passedDownData.params,
          'breaches-reports-breaches-id'
        ).toString()
      );
    } else if (passedDownData.path === 'reportsPage') {
      window.localStorage.removeItem('breaches-reports-modal-open');
      window.localStorage.removeItem('breaches-reports-breaches-id');
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
