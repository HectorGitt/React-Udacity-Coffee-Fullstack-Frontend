import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Edit from './components/Edit';
import PrivateElement from './components/PrivateElement';
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit",
    element: <PrivateElement component=<Edit/> />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

