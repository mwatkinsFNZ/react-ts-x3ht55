import { useHistory } from 'react-router-dom';
import {
  ChangeAppType,
  IterableParams,
  Path,
} from '../CommonComponentCode/Types';
import { AppStateContext, useAppStateContext } from '../Dock/DockApp';

export function useChangeApp(apps: { shortname: string }[]): {
  change: ChangeAppType;
} {
  const history = useHistory();
  const { state, setState } = useAppStateContext(AppStateContext);

  const change = (to: string, path: Path, params: IterableParams) => {
    const [, appUrl] = to.split('/');
    if (!apps.some((x) => x.shortname === appUrl)) {
      throw Error(`Could not navigate to ${to}`);
    }

    setState((s) => ({
      ...s,
      changeAppData: {
        path,
        params: params ? new Map(params) : new Map(),
      },
    }));
    history.push(to);
  };

  return { change };
}
