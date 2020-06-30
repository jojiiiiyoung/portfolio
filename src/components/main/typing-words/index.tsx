import React from 'react';
import useTypingWords from './use-typing-words';

import './style.css'

interface IProps {
  words: string[];
}

const TypingWords = ({ words }: IProps) => {
  const { current } = useTypingWords(words);

  return (
    <p className="word-list">
      {words.map((word, wIdx) => {
        return (
          <span className="word-container" key={word}>
            {Array.prototype.map.call(word, (letter: string, lIdx: number) => (
              <span
                key={`${wIdx}_${lIdx}_${letter}`}
                className={`letter ${wIdx !== current[0] ? 'out' : wIdx === current[0] && lIdx <= current[1] ? 'in' : 'ended'}`}>
                {letter}
              </span>
            ))}
          </span>
        );
      })}
    </p>
  );
};

export default TypingWords;
