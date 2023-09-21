import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  html, body, div, span, applet, object, iframe,
  p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: decimal;
    margin: 0;
    padding: 0 20px;
  li {
    margin: .2rem 0
  }
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: inherit; 
  }

  li {
    list-style: none;
  }  

  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  * {
    margin: 0;
    padding: 0;
    @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
    }

     @font-face {
      font-family: 'KBO-Dia-Gothic_bold';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/KBO-Dia-Gothic_bold.woff') format('woff');
      font-weight: 700;
      font-style: normal;
    }

    /* 드래그나 더블클릭 시에 텍스트가 선택이 되지 않도록 설정 */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;

    /* IOS 웹킷에서 터치 시에 등장하는 하이라이트를 제거하기 위함 */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
   }
  
  body {
    font-family: 'Pretendard-Regular';
    font-size: 1em;
    width : 100vw;
    height: 100vh;
    user-select: none; 
    overflow-y: auto;
    overflow-x: hidden !important;
   
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    border: 0 solid transparent;
    border-radius: 10px;
    background-color: #7e7e7e84;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
