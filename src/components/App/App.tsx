/** @jsxImportSource @emotion/react */
import { SocialMedia } from '../SocialMedia';

import { Timer } from '../Timer';
import { styles } from './styles';

export const App = () => {
  return (
    <div css={styles.container}>
      <h1 css={styles.title}>WE´RE LAUNCHING SOON</h1>
      <Timer />
      <div css={styles.footer}>
        <SocialMedia />
      </div>
    </div>
  );
};

export default App;
