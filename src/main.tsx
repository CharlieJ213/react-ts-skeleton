import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@app/components';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { SiteSettingsProvider } from '@app/context';
import { I18nextProvider } from 'react-i18next';
import i18n from '@app/util/i18n';
import { HelmetProvider } from 'react-helmet-async';
import "react-activity/dist/library.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider context={{}}>
      <I18nextProvider i18n={i18n}>
        <SiteSettingsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SiteSettingsProvider>
      </I18nextProvider>
    </HelmetProvider>
  </React.StrictMode>,
);
