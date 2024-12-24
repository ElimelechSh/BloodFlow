


// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { MyContext } from "../pages/MyProvider";




// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
  
//   const { setValue } = useContext(MyContext);

//   const updateValue = (x) => {
//     setValue(x); // עדכון הערך בצורה ישירה
//   };

  
//   const nav = useNavigate();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // בדיקה מקומית עבור נתוני מבחן
//       if (email === 'E@2.com' && password === '123456') {
//         const mockedUserName = 'אלימלך';
//         updateValue(mockedUserName)
//         nav('/Home'); // ניווט לעמוד הבא
//         console.log('Login successful - mocked');
//       } else {
//         // שליחת בקשה לשרת
//         const response = await axios.post('http://localhost:3007/api/users', { email, password });

//         if (response.data.success) {
//           // setSharedValue(response.data.name); // עדכון Context משם המשתמש שהתקבל מהשרת
//           nav('/Home'); // ניווט לעמוד הבא
//         } else {
//           setErrorMessage('שם משתמש או סיסמה שגויים');
//         }
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setErrorMessage('שגיאה בחיבור לשרת');
//     }
//   };

//   return (
//     <div className="container-fluid">
      
 

//  <div className="w-100% bg-primary-subtle  text-center h-70 p-3">
//  <h2 className='me-3 text-muted fs-3'>מערכת דיגיטלית להזמנת בדיקות דם מהמעבדה.</h2>
// </div>
     
//       <div className="container">
  
       
       



//         <div className="Auth-form-container">
      
//           <form className=" Auth-form" onSubmit={onSubmit}>
//             <div className="Auth-form-content">
//               <h3 className="Auth-form-title">Log in</h3>
//               <div className="form-group mt-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="form-group mt-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
                  
//                 />
//               </div>
//               <div className="d-grid gap-2 mt-3">
//                 <button onClick={updateValue} type="submit" className="btn btn-primary">
//                   Login
//                 </button>
//               </div>
//               {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { MyContext } from "../pages/MyProvider";
// import { doApiMethod } from '../services/apiservice';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
  
//   const { setValue } = useContext(MyContext);
//   const navigate = useNavigate();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
    
//             const response = await axios.post('http://localhost:3007/api/users/login', {
//               email,
//               password,
//             });

//           // בדיקה אם התקבל טוקן מהשרת
//           if (response.data.token) {
//             const { token } = response.data;
            
//             // שמירת הטוקן ב-LocalStorage
//             localStorage.setItem('authToken', JSON.stringify(token));

//             console.log(response.data.name)
//             // עדכון שם המשתמש ב-Context
//             const userName = response.data.name || "משתמש";
//             setValue(userName);

//             // ניווט לעמוד הבית

//             navigate('/Home');
//           } else {
//             setErrorMessage('שם משתמש או סיסמה שגויים');
//           }
//      }
//     catch (error) {
//       console.error('Login error:', error);
//       setErrorMessage('שגיאה בחיבור לשרת');
//     }
//    };

//   return (
//     <div className="container-fluid">
//       <div className="w-100 bg-primary-subtle text-center h-70 p-3">
//         <h2 className="me-3 text-muted fs-3">מערכת דיגיטלית להזמנת בדיקות דם מהמעבדה.</h2>
//       </div>

//       <div className="container">
//         <div className="Auth-form-container">
//           <form className="Auth-form" onSubmit={onSubmit}>
//             <div className="Auth-form-content">
//               <h3 className="Auth-form-title">Log in</h3>
//               <div className="form-group mt-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="form-group mt-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <div className="d-grid gap-2 mt-3">
//                 <button type="submit" className="btn btn-primary">
//                   Login
//                 </button>
//               </div>
//               {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;













// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { MyContext } from "../pages/MyProvider";
// import { doApiMethod } from '../services/apiservice';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
  
//   const { setValue } = useContext(MyContext);
//   const navigate = useNavigate();

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     try {
    
//             const response = await axios.post('http://localhost:3007/api/users/login', {
//               email,
//               password,
//             });

//           // בדיקה אם התקבל טוקן מהשרת
//           if (response.data.token) {
//             const { token  } = response.data;
            
//             // שמירת הטוקן ב-LocalStorage
//             localStorage.setItem('authToken', JSON.stringify(token));

//             console.log(response.data.name)
//             // עדכון שם המשתמש ב-Context
//             const userName = response.data.name || "משתמש";
//             setValue(userName);

//             // ניווט לעמוד הבית

//             navigate('/Home');
//           } else {
//             setErrorMessage('שם משתמש או סיסמה שגויים');
//           }
//      }
//     catch (error) {
//       console.error('Login error:', error);
//       setErrorMessage('שגיאה בחיבור לשרת');
//     }

//    };

//   return (
//     <div className="container-fluid">
//       <div className="w-100 bg-primary-subtle text-center h-70 p-3">
//         <h2 className="me-3 text-muted fs-3">מערכת דיגיטלית להזמנת בדיקות דם מהמעבדה.</h2>
//       </div>

//       <div className="container">
//         <div className="Auth-form-container">
//           <form className="Auth-form" onSubmit={onSubmit}>
//             <div className="Auth-form-content">
//               <h3 className="Auth-form-title">Log in</h3>
//               <div className="form-group mt-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   aria-describedby="emailHelp"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="form-group mt-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <div className="d-grid gap-2 mt-3">
//                 <button type="submit" className="btn btn-primary">
//                   Login
//                 </button>
//               </div>
//               {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;











// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { MyContext } from "../pages/MyProvider";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   // const { setValue } = useContext(MyContext);
//   const navigate = useNavigate();
//   const { setValue, setSuccessMessage } = useContext(MyContext);

//   const onSubmit = async (e) => {
//     e.preventDefault(); 

//     try {
//       // שליחת בקשת התחברות לשרת
//       const response = await axios.post("http://localhost:3007/api/users/login", {
//         email,
//         password,
//       });

//       // בדיקת הצלחה
//       if (response.data.token) {

//         const { token, name, role } = response.data;

//         // שמירת הטוקן ב-LocalStorage
//         localStorage.setItem("authToken", JSON.stringify(token));
//         console.log("שם הרופא שהתחבר:2", name);
//         // עדכון השם בהקשר
//         setValue(name);

//         // הדפסת השם בקונסול
//         console.log("שם הרופא שהתחבר:", name);

//         // ניווט לעמוד הבית
//         navigate("/Home");
//       } else {
//         setErrorMessage("שם משתמש או סיסמה שגויים");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setErrorMessage("שגיאה בחיבור לשרת");
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="w-100 bg-primary-subtle text-center h-70 p-3">
//         <h2 className="me-3 text-muted fs-3">
//           מערכת דיגיטלית להזמנת בדיקות דם מהמעבדה.
//         </h2>
//       </div>

//       <div className="container">
//         <div className="Auth-form-container">
//           <form className="Auth-form" onSubmit={onSubmit}>
//             <div className="Auth-form-content">
//               <h3 className="Auth-form-title">Log in</h3>
//               <div className="form-group mt-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="exampleInputEmail1"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group mt-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="exampleInputPassword1"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="d-grid gap-2 mt-3">
//                 <button type="submit" className="btn btn-primary">
//                   Login
//                 </button>
//               </div>
//               {errorMessage && (
//                 <div className="alert alert-danger mt-3">{errorMessage}</div>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;











    // try {
    //   const response = await doApiMethod('/api/users/login', 'POST', { email, password });
    
    //   if (response.status === 200 && response.data) {
    //     const user = response.data; // פרטי הרופא שהתקבלו מהשרת
    //     const userName = user.name || "משתמש"; // ברירת מחדל במקרה שאין שם
    
    //     setName(user.name); // שמירת שם המשתמש
    //     setValue(userName); // הגדרת הערך לתצוגה
    
    //     console.log('User logged in:', user.name);
    
    //     // ניווט לעמוד הבית
    //     navigate('/Home');
    //   } else {
    //     setErrorMessage('שם משתמש או סיסמה שגויים');
    //   }
    // } catch (error) {
    //   console.error('Login error:', error);
    
    //   // בדיקה אם מדובר בשגיאה מהשרת (HTTP)
    //   if (error.response) {
    //     const serverMessage = error.response.data?.message || 'שגיאה בחיבור לשרת';
    //     setErrorMessage(serverMessage);
    //   } else {
    //     setErrorMessage('שגיאה בחיבור לשרת');
    //   }
    // }










    

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "./DataProvider";
import Tests from "./Tests";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const { setValue } = useContext(MyContext);
  const navigate = useNavigate();
  // const { setValue, setSuccessMessage } = useContext(MyContext);
  const {setDataFor2} = useDataContext();
  
  const onSubmit = async (e) => {
    e.preventDefault(); 

    try {
      // שליחת בקשת התחברות לשרת
      const response = await axios.post("http://localhost:3007/api/users/login", {
        email,
        password,
      });

      // בדיקת הצלחה
      if (response.data.token) {

        const { token ,user} = response.data;

        // שמירת הטוקן ב-LocalStorage
        localStorage.setItem("authToken", JSON.stringify(token));
        // console.log("שם הרופא שהתחבר:2", name);
        // עדכון השם בהקשר
        // setValue(name);
        setDataFor2(user?.name);
        // הדפסת השם בקונסול
        // console.log("שם הרופא שהתחבר:", name);

        // ניווט לעמוד הבית
        navigate("/Home");
      } else {
        setErrorMessage("שם משתמש או סיסמה שגויים");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("שגיאה בחיבור לשרת");
    }
  };

  return (
    // <div className="container-fluid">
    //   <div className="w-100 bg-primary-subtle text-center h-70 p-3">
    //     <h2 className="me-3 text-muted fs-3">
    //       מערכת דיגיטלית להזמנת בדיקות דם מהמעבדה.
    //     </h2>
    //   </div>

    //   <div className="container">
    //     <div className="Auth-form-container">
    //       <form className="Auth-form" onSubmit={onSubmit}>
    //         <div className="Auth-form-content">
    //           <h3 className="Auth-form-title">Log in</h3>
    //           <div className="form-group mt-3">
    //             <label htmlFor="exampleInputEmail1" className="form-label">
    //               Email address
    //             </label>
    //             <input
    //               type="email"
    //               className="form-control"
    //               id="exampleInputEmail1"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //               required
    //             />
    //           </div>
    //           <div className="form-group mt-3">
    //             <label htmlFor="exampleInputPassword1" className="form-label">
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               className="form-control"
    //               id="exampleInputPassword1"
    //               value={password}
    //               onChange={(e) => setPassword(e.target.value)}
    //               required
    //             />
    //           </div>
    //           <div className="d-grid gap-2 mt-3">
    //             <button type="submit" className="btn btn-primary">
    //               Login
    //             </button>
    //           </div>
    //           {errorMessage && (
    //             <div className="alert alert-danger mt-3">{errorMessage}</div>
    //           )}
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>







<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 ">

<div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md styled-frame">
  <div className="flex justify-center mb-8">


    <div className="bg-indigo-100 p-3 rounded-full">
      <div className="w-8 h-8 text-indigo-600" />
    
    </div>
  </div>
  <h2 className="text-2xl font-bold text-center text-gray-800 mb-8  ">
    Hospital Lab System Login
  </h2>
  <form onSubmit={onSubmit} className="space-y-6">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Email Address
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Password
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        required
      />
    </div>
    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
    >
      Sign In
    </button>
  </form>
</div>
</div>






















  );
};

export default Login;


