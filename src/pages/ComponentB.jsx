// // src/components/ComponentB.js
// import React, { useContext } from "react";
// import { MyContext } from "./MyProvider";

// const ComponentB = () => {
//   const { value } = useContext(MyContext); // קבלת הערך מה-Context

//   return (
//     <div>
//       <h1>קומפוננטה B</h1>
//       <p>הערך הוא: {value}</p>
//     </div>
//   );
// };

// export default ComponentB;




// // src/components/ComponentB.js
// import React, { useContext } from "react";
// import { MyContext } from "./MyProvider";
// import { Outlet } from "react-router-dom";
// import Logo from '../../public/imges/Logo.png'
// const ComponentB = () => {
//   const { value } = useContext(MyContext); // קבלת הערך מה-Context
//   const doctorInitial = value ? value.charAt(0).toUpperCase() : '?';
//   return (
  
//     <div className="header">
 

//      <div className="container-fluid bg-primary-subtle h-30">

//        <div className="d-flex justify-content-center p-1  w-100">
//        <img
      
//         src="../../public/imges/Logo.png"
//         alt="Logo"
//         className="Logo"
//         loading="lazy"
//       />
           
//           <div className="d-flex align-items-center w-50">
//              <span className="me-3 text-muted">שלום ל{value || "רופא"}</span>
//          <div className="userot rounded-circle bg-success text-white d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>           
//             {doctorInitial}
//             </div>
//          </div>

//        </div>
//     </div>

//    <Outlet/>

//     </div>



//   );
// };

// export default ComponentB;











// src/components/ComponentB.js
import React, { useContext } from "react";
// import { MyContext } from "./MyProvider";
import { Outlet } from "react-router-dom";
import Logo from '../../public/imges/Logo.png'
import { useDataContext } from "./DataProvider";
const ComponentB = () => {
  // const { value } = useContext(MyContext); // קבלת הערך מה-Context
  const { dataFor2 } = useDataContext();



  const doctorInitial = dataFor2 ? dataFor2.charAt(0).toUpperCase() : '?';
  console.log("dataFor2:",dataFor2)
  return (
  
    <div className="header">
 

     <div className="container-fluid bg-primary-subtle h-30 ">

       <div className="d-flex justify-content-center p-1  w-100 ">
       <img
      
        src="../../public/imges/Logo.png"
        alt="Logo"
        className="Logo "
        loading="lazy"
      />
           
          <div className="d-flex align-items-center w-50  ">
             <span className="me-3 text-muted ">שלום ל{dataFor2 || "רופא"}</span>
         <div className="userot rounded-circle bg-success text-white d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>           
            {doctorInitial}
            </div>
         </div>

       </div>
    </div>

   <Outlet/>

    </div>



  );
};

export default ComponentB;


