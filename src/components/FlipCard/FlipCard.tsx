/** @jsxImportSource @emotion/react */
import { styles } from './styles';

export interface Props {
  value: string;
}

export const FlipCard = ({ value }: Props) => {
  return (
    <div css={styles.outerCard} data-value={value}>
      <div css={styles.innerCard} data-value={value} />
      <div css={[styles.bite, styles.leftBite]} />
      <div css={[styles.bite, styles.rightBite]} />
    </div>
  );
};

export default FlipCard;
