import * as React from 'react';
import {
  Context,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../Dock/Routes';
import { Path } from '../Dock/Types';

export type IAppStateContext = {
  state: Path;
  setState: Dispatch<SetStateAction<string>>;
};

export const AppStateContext = createContext<IAppStateContext | undefined>(
  undefined
);

export const useAppStateContext = (
  context: Context<IAppStateContext | undefined>
): IAppStateContext => {
  const contextValue = useContext(context);
  if (contextValue === undefined) {
    throw Error('Context has not been Provided!');
  }

  return contextValue;
};

export default function DockApp() {
  const [state, setState] = useState<Path | undefined>(undefined);

  return (
    <div>
      <AppStateContext.Provider value={{ state, setState }}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppStateContext.Provider>
    </div>
  );
}
