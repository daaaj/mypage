import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { Router } from './router/Router';
import { ThemeProvider } from 'styled-components';
import { Theme } from './style/Theme';
import { GlobalStyle } from './style/GlobalStyel';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <RecoilRoot>
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <RouterProvider router={Router} />
        </ThemeProvider>
    </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
