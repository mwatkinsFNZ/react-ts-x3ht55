import { useHistory } from 'react-router-dom';
import { AppStateContext, useAppStateContext } from '../Dock/DockApp';
import { Path } from '../Dock/Types';

export type ChangeAppType = (to: string, path: Path) => void;

export function useChangeApp(): {
  change: ChangeAppType;
} {
  const history = useHistory();
  const { setState } = useAppStateContext(AppStateContext);

  const change = (to: string, path: string) => {
    setState(path);
    history.push(to);
  };

  return { change };
}
