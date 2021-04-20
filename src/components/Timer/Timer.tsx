/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import moment from 'moment';

import { styles } from './styles';
import { FlipCard } from '../FlipCard';

export interface Props {
  onTimeIsUp: () => void;
}
export const Timer = ({ onTimeIsUp }: Props) => {
  const launchDate = moment((process.env.REACT_APP_LAUNCH_DATE as string) || '2021-04-25T21:33:15');
  const launchDateDiff = launchDate.diff(moment());
  const [timeleft, setTimeLeft] = useState(moment.duration(launchDateDiff <= 0 ? 0 : launchDateDiff));

  // @todo maybe is a good idea to create a custom hook for the following interval (dan's post about it).
  useEffect(() => {
    if (![timeleft.days(), timeleft.hours(), timeleft.minutes(), timeleft.seconds()].filter(x => x > 0).length) {
      onTimeIsUp();
      return;
    }
    const interval = setInterval(() => {
      const launchDateDiff = launchDate.diff(moment());
      if (launchDateDiff <= 0) {
        setTimeLeft(moment.duration(0));
        return;
      }
      setTimeLeft(moment.duration(launchDateDiff));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeleft, onTimeIsUp, launchDate]);

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
