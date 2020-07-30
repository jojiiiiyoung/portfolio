/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useState,
  useCallback,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";

if (typeof IntersectionObserver === "undefined") {
  import("intersection-observer");
}

const useVisibility = (): {
  visible: boolean;
  el: MutableRefObject<HTMLDivElement | null>;
} => {
  const el = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const handleScroll = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = el;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
      observer.observe(current);

      return (): void => observer && observer.disconnect();
    }

    return (): void => {};
  }, [handleScroll, el]);

  return { el, visible };
};

export default useVisibility;
