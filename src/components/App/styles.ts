import { css } from '@emotion/react';
import bgStars from '../../assets/images/bg-stars.svg';
import patternHills from '../../assets/images/pattern-hills.svg';

export const styles = {
  container: css`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #231d2b;
    background-image: url(${bgStars}), url(${patternHills});
    background-position: top, bottom right;
    background-repeat: no-repeat;
    margin: 0;
    height: 100vh;
  `,
  title: css`
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 3px rgb(150 150 150);
    margin: 0;
    padding: 150px 25px 50px 25px;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 5px;
    line-height: 30px;
    font-family: 'RedHatText-Regular', sans-serif;
  `,

  footer: css`
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    color: #fff;
  `
};
