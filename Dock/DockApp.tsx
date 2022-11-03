import * as React from 'react';
import {
  Context,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PassedDownData } from '../CommonComponentCode/Types';
import Routes from '../Dock/Routes';

export type AppState = {
  /// additional dock state properties
  changeAppData: PassedDownData;
};

export type AppStateContext = {
  state: AppState;
  setState: Dispatch<SetStateAction<AppState>>;
};

export const AppStateContext = createContext<AppStateContext | undefined>(
  undefined
);

export const useAppStateContext = (
  context: Context<AppStateContext | undefined>
): AppStateContext => {
  const contextValue = useContext(context);
  if (contextValue === undefined) {
    throw Error('Context has not been Provided!');
  }

  return contextValue;
};

export default function DockApp() {
  const [state, setState] = useState<AppState>(undefined);

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
