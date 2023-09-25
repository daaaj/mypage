import { css, CSSProp } from 'styled-components';

interface MediaQuerySize {
  [key: string]: number;
}

export const sizes: MediaQuerySize = {
  mobile: 580,
  tablet: 790,
  laptop: 1010,
  desktop: 1580,
};

type BackQuoteArgs = string[];

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...args: BackQuoteArgs) => css`
    @media only screen and (max-width: ${sizes[label]}px) {
      ${css(literals, ...args)}
    }
  `;
  return acc;
}, {} as Record<keyof MediaQuerySize, (l: TemplateStringsArray, ...a: BackQuoteArgs) => CSSProp>);
