/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useState,
  useCallback,
  useEffect,
  MutableRefObject,
  useRef,
} from "react";

const CUSHION = 150;

const checkVisible = (el: HTMLElement | null): boolean => {
  if (!el) {
    return false;
  }

  const { innerHeight } = window;
  const { bottom, top } = el.getBoundingClientRect();

  return top + CUSHION <= innerHeight && bottom >= 0;
};

const DEFAULT_DELAY = 500;

const useVisibility = (
  el: MutableRefObject<HTMLDivElement | null>
): { visible: boolean } => {
  const [visible, setVisible] = useState<boolean>(false);
  const timer = useRef<any>(null);

  const handleScroll = useCallback((): void => {
    if (!timer.current) {
      timer.current = setTimeout(() => {
        setVisible(checkVisible(el.current));
        timer.current = null;
      }, DEFAULT_DELAY);
    }
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
