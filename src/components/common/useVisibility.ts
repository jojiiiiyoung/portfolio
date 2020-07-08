import { useState, useCallback, useEffect, MutableRefObject } from "react";

const checkVisible = (el: HTMLElement | null): boolean => {
  if (!el) {
    return false;
  }

  const { innerHeight } = window;
  const { bottom, top } = el.getBoundingClientRect();

  return top <= innerHeight && bottom >= 0;
};

const useVisibility = (
  el: MutableRefObject<HTMLDivElement | null>
): { visible: boolean } => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = useCallback((): void => {
    setVisible(checkVisible(el.current));
  }, [el]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, el]);

  return { visible };
};

export default useVisibility;
