/** @jsxImportSource @emotion/react */
import { styles } from './styles';
import iconFacebook from '../../assets/images/icon-facebook.svg';
import iconPinterest from '../../assets/images/icon-pinterest.svg';
import iconInstagram from '../../assets/images/icon-instagram.svg';

export const SocialMedia = () => (
  <div css={styles.container}>
    <a css={styles.iconLink} href="https://www.facebook.com/">
      <img css={styles.icon} src={iconFacebook} alt="facebook icon" />
    </a>
    <a css={styles.iconLink} href="https://www.pinterest.com/">
      <img css={styles.icon} src={iconPinterest} alt="pinterest icon" />
    </a>
    <a css={styles.iconLink} href="http://instagram.com/">
      <img css={styles.icon} src={iconInstagram} alt="instagram icon" />
    </a>
  </div>
);

export default SocialMedia;
