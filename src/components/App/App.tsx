/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { FlipCard } from '../FlipCard';
import { styles } from './styles';

export const App = () => {
  const [number, setNumber] = useState<number>(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(number === 1 ? 60 : number - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [number]);

  return (
    <div css={styles.container}>
      <FlipCard value={String(number).padStart(2, '0')} />
    </div>
  );
};

export default App;
