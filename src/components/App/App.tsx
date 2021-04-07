/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { FlipCard } from '../FlipCard';
import { styles } from './styles';

export const App = () => {
  const launchDate = new Date('Apr 8, 2021 21:30:30').getTime();
  const [timeleft, setTimeLeft] = useState<number>(launchDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(launchDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div css={styles.container}>
      <div css={styles.cardsContainer}>
        <FlipCard value={String(Math.floor(timeleft / (1000 * 60 * 60 * 24))).padStart(2, '0')} />
        <FlipCard value={String(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')} />
        <FlipCard value={String(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')} />
        <FlipCard value={String(Math.floor((timeleft % (1000 * 60)) / 1000)).padStart(2, '0')} />
      </div>
    </div>
  );
};

export default App;
