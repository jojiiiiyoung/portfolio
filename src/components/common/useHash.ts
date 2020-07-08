/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import { AppContext } from "../../context/app";

const useHash = (visible: boolean, hash: string): void => {
  const { hash: currentHash, onHashChange } = useContext(AppContext);

  useEffect(() => {
    if (visible && currentHash !== hash) {
      onHashChange(hash);
    }
  }, [visible]);
};

export default useHash;
