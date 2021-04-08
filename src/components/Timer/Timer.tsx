/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';

import { styles } from './styles';
import { FlipCard } from '../FlipCard';

export const Timer = () => {
  const launchDate = new Date('Apr 8, 2021 21:30:30').getTime();
  const [timeleft, setTimeLeft] = useState<number>(launchDate - new Date().getTime());

  // @todo maybe is a good idea to create a custom hook for the following interval (dan's post about it).
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(launchDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [launchDate]);

  // @todo create helpers to parse the timedate to seconds, minutes, hours and days.
  return (
    <div css={styles.cardsContainer}>
      <FlipCard title="days" value={String(Math.floor(timeleft / (1000 * 60 * 60 * 24))).padStart(2, '0')} />
      <FlipCard title="hours" value={String(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')} />
      <FlipCard title="minutes" value={String(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')} />
      <FlipCard title="seconds" value={String(Math.floor((timeleft % (1000 * 60)) / 1000)).padStart(2, '0')} />
    </div>
  );
};

export default Timer;
