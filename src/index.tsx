import { RecoilRoot } from 'recoil';
import ReactDOM from 'react-dom/client';
import { Router } from './router/Router';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <RouterProvider router={Router} />
  </RecoilRoot>
);
