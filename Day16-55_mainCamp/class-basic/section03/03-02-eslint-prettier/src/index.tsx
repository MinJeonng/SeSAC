import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './routes/signup';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/signup', element: <Signup /> },
]);

//as 뒤는 막 쓰면 안됌, 컴퓨터는 타입을 모르고 나는 알때만 사용가능함
// const root = ReactDOM.createRoot(document.getElementById('root') as ReactDOM.Container);
// root.render(<RouterProvider router={router} />);

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RouterProvider router={router} />);
} else {
  console.error('Root element not found!');
}
