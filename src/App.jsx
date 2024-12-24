

// import React from 'react';

// import { Route, Routes, BrowserRouter } from 'react-router-dom';


// import ContextProvider from './pages/ContextProvider';
// import Home from './pages/Home'
// import Login from './pages/Login';

// import Galery from './pages/Galery'
// import Patient_admission from './pages/Patient_admission';
// import SummaryPage from './pages/SummaryPage';
// import BarcodeScanner from './pages/BarcodeScanner';
// import SentToLab from './pages/SentToLab';
// import Header from './components/Header';


// function App() {
 
//   return (
//     <>
    
//       <nav>
//       <BrowserRouter>
// <Routes>

//       <ContextProvider>
//           <Route path='/' element={<Login />} />
//           <Route path='/Header' element={<Header />} />
          
//       </ContextProvider>

// <Route path='/Home' element={<Home />} />

// <Route path="/Summary" element={<SummaryPage />} />
// <Route path="/SentToLab" element={<SentToLab />} />
// <Route path="/BarcodeScanner" element={<BarcodeScanner/>} />

// <Route path='/Patient_admission' element={<Patient_admission />} />
// <Route path='/Galery' element={<Galery/>} />

//      </Routes>
   
// </BrowserRouter>
//       </nav>

//     </>
//   )
// }

// export default App


// import React from 'react';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';


// import Home from './pages/Home';
// import Login from './pages/Login';
// import Galery from './pages/Galery';
// import Patient_admission from './pages/Patient_admission';
// import SummaryPage from './pages/SummaryPage';
// import BarcodeScanner from './pages/BarcodeScanner';
// import SentToLab from './pages/SentToLab';

// import OrderLookup from './pages/OrderLookup';
// import ComponentB from './pages/ComponentB';

// function App() {
//   return (
  
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/Patient_admission" element={<Patient_admission />} />
//           <Route path="/" element={<ComponentB />} >
//           <Route path="/Home" element={<Home />} />
       
         
//               <Route path="/Summary" element={<SummaryPage />}  />
//               <Route path="/SentToLab" element={<SentToLab />} />
//               <Route path="/BarcodeScanner" element={<BarcodeScanner />} />
    
//               <Route path="/Galery" element={<Galery />} />
//               <Route path="/OrderLookup" element={<OrderLookup />} />
              
//          </Route>
       
//         </Routes>
//       </BrowserRouter>
  
//   );
// }

// export default App;





import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


import Home from './pages/Home';
import Login from './pages/Login';
import Galery from './pages/Galery';
import Patient_admission from './pages/Patient_admission';
import SummaryPage from './pages/SummaryPage';
import BarcodeScanner from './pages/BarcodeScanner';
import SentToLab from './pages/SentToLab';

import OrderLookup from './pages/OrderLookup';
import ComponentB from './pages/ComponentB';
import { DataProvider } from './pages/DataProvider';
import PatientDetails from './pages/PatientDetails';

function App() {
  return (
  
      <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Patient_admission" element={<Patient_admission />} />
          <Route path="/" element={<ComponentB />} >
          <Route path="/Home" element={<Home />} />
       
              <Route path="/PatientDetails" element={<PatientDetails />}  />
              <Route path="/Summary" element={<SummaryPage />}  />
              <Route path="/SentToLab" element={<SentToLab />} />
              <Route path="/BarcodeScanner" element={<BarcodeScanner />} />
    
              <Route path="/Galery" element={<Galery />} />
              <Route path="/OrderLookup" element={<OrderLookup />} />
              
         </Route>
   
        </Routes>
        </DataProvider>
      </BrowserRouter>
  
  );
}

export default App;
