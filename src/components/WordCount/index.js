import React, { useState, useEffect } from 'react';
import Countable from 'countable';
import automatedReadability from 'automated-readability';

const WordCount = ({ countElement }) => {
  const [count, setCount] = useState({});
  useEffect(() => {
    if (countElement.current) {
      Countable.count(countElement.current, setCount);
    }
  }, [countElement.current]);
  if (!count) { return <div />; }
  const convertedCount = Object.entries(count).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key.slice(0, -1)]: value,
    }),
    {},
  );
  const readability = automatedReadability(convertedCount);
  console.log(readability);
  return (
    <span>
      {convertedCount.word} words | Grade {Math.floor(readability)} readability
    </span>
  );
};

export default WordCount;
