import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@app/components';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { SiteSettingsProvider } from '@app/context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SiteSettingsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SiteSettingsProvider>
  </React.StrictMode>,
);
