import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { disableReactDevtools} from '@fvilers/disable-react-devtools'
if(process.env.NODE_ENV === 'production') disableReactDevtools()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


