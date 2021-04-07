import { css } from '@emotion/react';

// @todo move all these const to global const styling file
const background = '#231d2b';
const fontSize = 40;
const fontWeight = 700;
const outerFontColor = '#d35072';
const outerBackgroundColor = '#35354f';
const innerFontColor = '#d35072';
const innerBackgroundColor = '#2c2c44';

export const styles = {
  outerCard: css`
    position: relative;
    width: 70px;
    height: 70px;
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
      color: ${outerFontColor};
      font-size: ${fontSize}px;
      font-weight: ${fontWeight};
      line-height: 0px;
      text-align: center;
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
      color: ${innerFontColor};
      font-size: ${fontSize}px;
      font-weight: ${fontWeight};
      text-align: center;
      line-height: 66px;
    }
  `,
  bite: css`
    position: absolute;
    z-index: 3;
    width: 3px;
    height: 5px;
    top: 33px;
    border-radius: 50%;
    background-color: ${background};
  `,
  leftBite: css`
    left: -1px;

    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  `,
  rightBite: css`
    right: -1px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  `
};
