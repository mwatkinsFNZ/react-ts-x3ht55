import { useHistory } from 'react-router-dom';
import {
  LocalStorageKeysRequiringInput,
  Path,
} from '../CommonComponentCode/Types';
import { AppStateContext, useAppStateContext } from '../Dock/DockApp';

export type ChangeAppType = (
  to: string,
  path: Path,
  params?: Map<LocalStorageKeysRequiringInput, string>
) => void;

export function useChangeApp(): {
  change: ChangeAppType;
} {
  const history = useHistory();
  const { state, setState } = useAppStateContext(AppStateContext);

  const change = (
    to: string,
    path: Path,
    params: Map<LocalStorageKeysRequiringInput, string>
  ) => {
    setState((s) => ({
      ...s,
      localStorage: {
        path,
        params: params ?? new Map(),
      },
    }));
    history.push(to);
  };

  return { change };
}
