/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';

import { styles } from './styles';
import { FlipCard } from '../FlipCard';
import { getUnitInTimeDate, Unit } from '../../utils/getUnitInTimeDate';

export const Timer = () => {
  const launchDate = new Date('Apr 17, 2021 21:30:30').getTime(); // @todo add this value into an env var, which could be also inside a docker container for portability.
  const [timeleft, setTimeLeft] = useState<number>(launchDate - new Date().getTime());

  // @todo maybe is a good idea to create a custom hook for the following interval (dan's post about it).
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(launchDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div css={styles.cardsContainer}>
      <FlipCard title="days" value={getUnitInTimeDate(timeleft, Unit.DAYS)} />
      <FlipCard title="hours" value={getUnitInTimeDate(timeleft, Unit.HOURS)} />
      <FlipCard title="minutes" value={getUnitInTimeDate(timeleft, Unit.MINUTES)} />
      <FlipCard title="seconds" value={getUnitInTimeDate(timeleft, Unit.SECONDS)} />
    </div>
  );
};

export default Timer;
