import { css } from '@emotion/react';
import { COLOR, DESKTOP_BREAKPOINT } from '../../constants';

const fontSize = 40;
const fontWeight = 700;
const outerBackgroundColor = '#35354f';
const innerBackgroundColor = '#2c2c44';

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
  `,
  outerCard: css`
    position: relative;
    width: 70px;
    height: 70px;
    margin: 0 10px;
    @media (min-width: ${DESKTOP_BREAKPOINT}) {
      width: 140px;
      height: 140px;
    }
    &:before {
      position: absolute;
      z-index: 0;
      overflow: hidden;
      width: 100%;
      height: 50%;
      background: ${outerBackgroundColor};
      box-shadow: 0px 5px 2px 0px #1a1a24;
      border-radius: 0 0 5px 5px;
      bottom: 2px;
      content: attr(data-value);
      color: ${COLOR.SECUNDARY};
      font-size: ${fontSize}px;
      font-weight: ${fontWeight};
      line-height: 4px;
      text-align: center;
      @media (min-width: ${DESKTOP_BREAKPOINT}) {
        font-size: ${fontSize * 2}px;
        line-height: 15px;
      }
    }
  `,
  innerCard: css`
    &:before {
      position: absolute;
      z-index: 1;
      overflow: hidden;
      width: 100%;
      height: 50%;
      background: ${innerBackgroundColor};
      border-radius: 5px 5px 0 0;
      border-bottom: 1px solid rgb(0 0 0 / 30%);
      background-clip: padding-box;
      content: attr(data-value);
      color: ${COLOR.SECUNDARY};
      font-size: ${fontSize}px;
      font-weight: ${fontWeight};
      text-align: center;
      line-height: 70px;
      @media (min-width: ${DESKTOP_BREAKPOINT}) {
        font-size: ${fontSize * 2}px;
        line-height: 150px;
      }
    }
  `,
  bite: css`
    position: absolute;
    z-index: 3;
    width: 3px;
    height: 5px;
    top: calc(50% - 2px);
    border-radius: 50%;
    background-color: ${COLOR.PRIMARY};
  `,
  leftBite: css`
    left: 0px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  `,
  rightBite: css`
    right: 0px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  `,
  title: css`
    margin: 15px 0;
    color: #8888a4;
    font-weight: normal;
    text-align: center;
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    @media (min-width: ${DESKTOP_BREAKPOINT}) {
      font-size: 14px;
    }
  `
};
