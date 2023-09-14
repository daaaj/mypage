import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import { Router } from './router/Router';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { Theme } from './style/Theme';
import { GlobalStyle } from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </ThemeProvider>
  </RecoilRoot>
);
