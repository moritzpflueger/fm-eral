import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Imprint from './pages/Imprint';
import LegalNotice from './pages/LegalNotice';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/impressum",
    element: <Imprint />,
  },
  {
    path: "/legal",
    element: <LegalNotice />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
