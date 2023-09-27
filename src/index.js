import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {MailContext,MailContextProvider} from "./Context/context"
export {MailContext}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MailContextProvider>
      <Router>
      <App />
      </Router>
    </MailContextProvider>
    
  </React.StrictMode>
);

