/** @jsxImportSource @emotion/react */
import { styles } from './styles';

export interface Props {
  title: string;
  value: string;
}

export const FlipCard = ({ title, value }: Props) => (
  <div css={styles.container}>
    <div css={styles.outerCard} data-value={value}>
      <div css={styles.innerCard} data-value={value} />
      <div css={[styles.bite, styles.leftBite]} />
      <div css={[styles.bite, styles.rightBite]} />
    </div>
    <h2 css={styles.title}>{title}</h2>
  </div>
);

export default FlipCard;
