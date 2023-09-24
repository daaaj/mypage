import { css } from 'styled-components';
import { media } from './Media';

const FontSize = {
  frontText: '90px',
  title: '44px',
  xLarge: '38px',
  large: '24px',
  medium: '22px',
  normal: '20px',
  small: '14px',
};

const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

const FlexCenter = css`
  justify-content: center;
  align-items: center;
`;

const FlexBetween = css`
  justify-content: space-between;
  align-items: center;
`;

const MaxWidth = css`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
`;

const HeaderHeight = css`
  padding-top: 80px;
`;

const HeadShadow = css`
  box-shadow: 0rem 2px 5px 0.125rem #8585857a;
`;

const cssList = { FontSize, FlexCol, FlexRow, FlexCenter, FlexBetween, MaxWidth, HeaderHeight, HeadShadow };

export const Theme = {
  media,
  ...cssList,
  color100: '#27008286',
  color200: '#a740e79b',
  color300: '#da61a7a7',
  bgColor: '#ffffff',
  bgSkill: '#21016d',
  bgModal: '#ffffff',
  textColor: '#000000',
  textHover: '#df4ea2',
};

export const DarkTheme = {
  media,
  ...cssList,
  color100: '#270082',
  color200: '#7A0BC0',
  color300: '#FA58B6',
  bgColor: '#000000',
  bgSkill: '#21016d',
  bgModal: '#000000',
  textColor: '#ffffff',
  textHover: '#FA58B6',
};
