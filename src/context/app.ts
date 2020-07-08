import React, { useState } from "react";

interface IAppContext {
  hash: string;
  onHashChange: Function;
}

export const DEFAULT_VALUE: IAppContext = { hash: "", onHashChange: () => {} };

export const AppContext = React.createContext<IAppContext>(DEFAULT_VALUE);

export const useAppState = (): IAppContext => {
  const [hash, setHash] = useState<string>("");

  const handleChangeHash = (nHash: string): void => {
    setHash(nHash);
  };

  return {
    hash,
    onHashChange: handleChangeHash,
  };
};
