import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Favorites from './Favorites';
import Login from './Login';
import PokemonDetails from './PokemonDetails';
import SignUp from './SignUp';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: '/pokemon',
        element: <Home />,
      },
      {
        path: '/pokemon/:name',
        element: <PokemonDetails />
      },
    ]
  }
])
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
