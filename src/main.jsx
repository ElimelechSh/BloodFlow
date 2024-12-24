// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// ייבוא ה-Provider שיצרת
import { MyProvider } from './pages/MyProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* עיטוף האפליקציה ב-MyProvider */}
    <MyProvider>
      <App />
    </MyProvider>
  </React.StrictMode>,
);
