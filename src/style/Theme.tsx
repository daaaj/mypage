import { css } from 'styled-components';

const Color = {
  color100: '#ffff52',
  color200: '#bae97c',
  color300: '#c5ffad',
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
  padding: 0 30px;
`;

const HeaderHeight = css`
  height: calc(100vh - 100px);
  padding-top: 100px;
`;

export const Theme = { Color, FlexCol, FlexRow, FlexCenter, FlexBetween, MaxWidth, HeaderHeight };
