import { useEffect, useState } from "react";

const useTypingWords = (words: string[]): { current: number[] } => {
  const [current, setCurrent] = useState<number[]>([0, 0]);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const wordIdx = current[0];
        const letterIdx = current[1];
        if (words[wordIdx].length - 1 === letterIdx) {
          setCurrent([Number(!wordIdx), 0]);
        } else {
          setCurrent([wordIdx, letterIdx + 1]);
        }
      },
      words[current[0]].length - 1 === current[1] ? 2000 : 100
    );

    return (): void => {
      clearTimeout(timer);
    };
  }, [current, words]);

  return { current };
};

export default useTypingWords;
