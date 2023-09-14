import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                element: <Layout />,
                children: [{ path: '/', element: <HomePage /> }],
            },
        ],
    },
]);
