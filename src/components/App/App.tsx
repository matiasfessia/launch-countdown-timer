/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { SocialMedia } from '../SocialMedia';

import { Timer } from '../Timer';
import { styles } from './styles';

export const App = () => {
  const [timeisUp, setTimeisUp] = useState<boolean>(false);
  const onTimeIsUp = () => setTimeisUp(true);

  return (
    <div css={styles.container}>
      {/* @todo fix the style glitch about jumping transition of two h1 lines to 1 line */}
      <h1 css={styles.title}>{timeisUp ? `TIME'S UP` : `WE´RE LAUNCHING SOON`}</h1>
      <Timer onTimeIsUp={onTimeIsUp} />
      <div css={styles.footer}>
        <SocialMedia />
      </div>
    </div>
  );
};

export default App;
