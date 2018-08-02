import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as WebFont from 'webfontloader';
import './css/main.css';

WebFont.load({
  custom: {
    families: ['HUGEAvantGardeBold', 'Galaxie'],
    urls: ['./fonts/huge_agb_v5-webfont.woff', './fonts/GalaxieCopernicus-Book.woff']
  }
});
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();