/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';

import { Timer } from '../Timer';
import { styles } from './styles';

export const App = () => {
  return (
    <div css={styles.container}>
      <Global styles={styles} />
      <h1 css={styles.title}>WE´RE LAUNCHING SOON</h1>
      <Timer />
      <div css={styles.footer}>
        <h1>footer</h1>
      </div>
    </div>
  );
};

export default App;
