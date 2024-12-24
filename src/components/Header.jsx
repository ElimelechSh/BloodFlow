// import React from 'react'


// import '../stayle/stayle.css'
// // import Testhader from './cutegory/Testhader';



// const Header = ({ userName, userImage }) => {
//   // קח את האות הראשונה של שם המשתמש
//   const userInitial = userName ? userName.charAt(0).toUpperCase() : '?';



  
//   return (
//     <>


 

// <div className="container-fluid bg-primary-subtle h-25">

//     <div className="d-flex justify-content-between align-items-center border-bottom bg-primary-subtle h-25"
    
    
    
    
//     >
//       {/* לוגו */}
//       <img
//         width="50"
//         height="50"
//         src="../imges/logo_transparent.png"
//         alt="Logo"
//         className="m-2"
//         loading="lazy"
//       />

//       {/* פרופיל משתמש */}
//       <div className="d-flex align-items-center">
//         {/* ברכה */}
//         <span className="me-3 text-muted">שלום ל{userName}</span>

//         {/* תמונה או אות */}
//         {userImage ? (
//           <img
//             src={userImage}
//             alt="User Profile"
//             className="rounded-circle"
//             width="40"
//             height="40"
//           />
//         ) : (
//           <div
//             className="userot rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
//             style={{ width: '40px', height: '40px', }}
//           >
//             {userInitial}
//           </div>
//         )}
      
    

//       </div>
//     </div>
//     </div>
 





//   </>
//   )
// }

// export default Header



// import React from 'react';

// const Header = ({ patientDetails, doctorDetails }) => {
//   const patientInitial = patientDetails?.name ? patientDetails.name.charAt(0).toUpperCase() : '?';
//   const doctorInitial = doctorDetails?.name ? doctorDetails.name.charAt(0).toUpperCase() : '?';

//   return (
//     <div className="container-fluid bg-primary-subtle h-25">
//       <div className="d-flex justify-content-between align-items-center border-bottom bg-primary-subtle h-25">
//         {/* לוגו */}
//         <img
//           width="50"
//           height="50"
//           src="../imges/logo_transparent.png"
//           alt="Logo"
//           className="m-2"
//           loading="lazy"
//         />

//         {/* פרטי הרופא */}
//         <div className="d-flex align-items-center">
//           <span className="me-3 text-muted">שלום ל{doctorDetails?.name || "רופא"}</span>
//           <div
//             className="userot rounded-circle bg-success text-white d-flex justify-content-center align-items-center"
//             style={{ width: '40px', height: '40px' }}
//           >
//             {doctorInitial}
//           </div>
//         </div>

//         {/* פרטי המטופל */}
//         <div className="d-flex align-items-center">
//           <span className="me-3 text-muted">מטופל: {patientDetails?.name || "לא נבחר"}</span>
//           <div
//             className="userot rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
//             style={{ width: '40px', height: '40px' }}
//           >
//             {patientInitial}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;






// import React, { useContext } from "react";
// import { SharedContext } from "../pages/ContextProvider";



// const Header = () => {
//   const { sharedValue } = useContext(SharedContext);

//   return (

// <h1>Value: {sharedValue}</h1>;

//   );
// };

// export default Header;





// import React, { useContext } from "react";
// import { SharedContext } from "../pages/ContextProvider";

// const Header = () => {
//   const { patientDetails, doctorDetails } = useContext(SharedContext);

//   const patientInitial = patientDetails?.name ? patientDetails.name.charAt(0).toUpperCase() : '?';
//   const doctorInitial = doctorDetails?.name ? doctorDetails.name.charAt(0).toUpperCase() : '?';

//   return (
//     <div className="Haeder bg-primary-subtle ">
//       <div className="d-flex justify-content-between align-items-center border-bottom bg-primary-subtle h-25">
//         {/* לוגו */}
//         <img
//           width="50"
//           height="50"
//           src="../imges/logo_transparent.png"
//           alt="Logo"
//           className="m-2"
//           loading="lazy"
//         />

//         {/* פרטי הרופא */}
        // <div className="d-flex align-items-center w-100">
        //   <span className="me-3 text-muted">שלום ל{doctorDetails?.name || "רופא"}</span>
        //   <div
        //     className="userot rounded-circle bg-success text-white d-flex justify-content-center align-items-center"
        //     style={{ width: '40px', height: '40px' }}
        //   >
        //     {doctorInitial}
        //   </div>
        // </div>

        // {/* פרטי המטופל */}
        // <div className="d-flex align-items-center w-100">
        //   <span className="me-3 text-muted">מטופל: {patientDetails?.name || "לא נבחר"}</span>
        //   <div
        //     className="userot rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
        //     style={{ width: '40px', height: '40px' }}
        //   >
        //     {patientInitial}
        //   </div>
        // </div>
//       </div>
//     </div>
//   );
// };

// export default Header;







// import React, { useContext } from "react";
// import { SharedContext } from "../pages/ContextProvider";



// const Header = () => {
//   const { sharedValue } = useContext(SharedContext);
//   const doctorInitial = sharedValue ? sharedValue.charAt(0).toUpperCase() : '?';
//   const patientInitial = patientDetails?.name ? patientDetails.name.charAt(0).toUpperCase() : '?';
//   return ( 
//     <div> 
//         <div>
//             <div>



// <div className="d-flex align-items-center w-100">
//           <span className="me-3 text-muted">שלום ל{sharedValue || "רופא"}</span>
//           <div
//             className="userot rounded-circle bg-success text-white d-flex justify-content-center align-items-center"
//             style={{ width: '40px', height: '40px' }}
//           >
//             {doctorInitial}
//           </div>
//         </div>

// {/* פרטי המטופל */}
// <div className="d-flex align-items-center w-100">
//           <span className="me-3 text-muted">מטופל: {patientDetails?.name || "לא נבחר"}</span>
//           <div
//             className="userot rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
//             style={{ width: '40px', height: '40px' }}
//           >
//             {patientInitial}
//           </div>
//         </div>





//             </div>
//         </div>
//     </div>

 



//    )
// };
// export default Header;





// import React, { useContext } from "react";
// import { SharedContext } from "../pages/MyProvider";

// const Header = () => {
//   const { sharedValue } = useContext(SharedContext);
//   const { patientDetails } = useContext(SharedContext);

//   // אם יש sharedValue (שם הרופא) נשתמש באות הראשונה
//   const doctorInitial = sharedValue ? sharedValue.charAt(0).toUpperCase() : '?';
  
//   // אם יש פרטי מטופל, נשתמש באות הראשונה מהשם
//   const patientInitial = patientDetails?.name ? patientDetails.name.charAt(0).toUpperCase() : '?';

//   return ( 

// <div> 
// <div className="container-fluid bg-primary-subtle h-30">

// <div className="d-flex justify-content-center p-2">



    
//       <div className="d-flex align-items-center w-50">
//         <span className="me-3 text-muted">שלום ל{sharedValue || "רופא"}</span>
//         <div className="userot rounded-circle bg-success text-white d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
//           {doctorInitial}
//         </div>
//       </div>

//       {/* פרטי המטופל */}
//       <div className="d-flex align-items-center w-50">
//         <span className="me-3 text-muted">מטופל: {patientDetails?.name || "לא נבחר"}</span>
//         <div className="userot rounded-circle bg-primary text-white d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
//           {patientInitial}
//         </div>
//       </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


