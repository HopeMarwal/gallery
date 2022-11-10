import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss';
import { ImagesContextProvider } from './context/ImagesContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ImagesContextProvider>
      <App />
    </ImagesContextProvider>
  </React.StrictMode>
);
