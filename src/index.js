import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { ScheduleProvider } from './context/schedule.context';
import { UserProvider } from './context/user.context';
import { LocationProvider } from './context/location.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <UserProvider>
        <ScheduleProvider>
          <LocationProvider>
            <App />
          </LocationProvider>
       </ScheduleProvider>
       </UserProvider>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
