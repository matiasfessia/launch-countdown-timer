/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import moment from 'moment';

import { styles } from './styles';
import { FlipCard } from '../FlipCard';

export const Timer = () => {
  const launchDate = moment((process.env.REACT_APP_LAUNCH_DATE as string) || '2021-04-25T21:33:15');
  const [timeleft, setTimeLeft] = useState(moment.duration(launchDate.diff(moment())));

  // @todo maybe is a good idea to create a custom hook for the following interval (dan's post about it).
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(moment.duration(launchDate.diff(moment())));
    }, 1000);
    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div css={styles.cardsContainer}>
      <FlipCard title="days" value={String(timeleft.days()).padStart(2, '0')} />
      <FlipCard title="hours" value={String(timeleft.hours()).padStart(2, '0')} />
      <FlipCard title="minutes" value={String(timeleft.minutes()).padStart(2, '0')} />
      <FlipCard title="seconds" value={String(timeleft.seconds()).padStart(2, '0')} />
    </div>
  );
};

export default Timer;
