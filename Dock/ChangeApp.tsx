import { useHistory } from 'react-router-dom';
import { ChangeAppCrossAppType, Path } from '../CommonComponentCode/Types';
import { AppStateContext, useAppStateContext } from '../Dock/DockApp';

export type ChangeAppType = (
  to: string,
  path: Path,
  params?: Map<ChangeAppCrossAppType['key'], string>
) => void;

export function useChangeApp(): {
  change: ChangeAppType;
} {
  const history = useHistory();
  const { state, setState } = useAppStateContext(AppStateContext);

  const change = (
    to: string,
    path: Path,
    params: Map<ChangeAppCrossAppType['key'], string>
  ) => {
    if (false) {
      // todo check if the first url part is in the "apps.shortname"
    }

    setState((s) => ({
      ...s,
      changeAppData: {
        path,
        params: params ?? new Map(),
      },
    }));
    history.push(to);
  };

  return { change };
}
