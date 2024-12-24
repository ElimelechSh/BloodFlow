// // src/components/ComponentA.js
// import React, { useContext } from "react";
// import { MyContext } from "./MyProvider";

// const ComponentA = () => {
//   const { setValue } = useContext(MyContext);

//   const handleChange = (e) => {
//     setValue(e.target.value); // עדכון הערך ב-Context
//   };

//   return (
//     <div>
//       <h1>קומפוננטה A</h1>
//       <input
//         type="text"
//         placeholder="הכנס ערך"
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default ComponentA;









// import React, { useContext } from "react";
// import { MyContext } from "./MyProvider";

// const ComponentA = () => {
//   const { setValue } = useContext(MyContext);

//   const handleChange = (e) => {
//     setValue(e.target.value); // עדכון הערך ב-Context
//   };

//   return (
//     <div>
//       <h1>קומפוננטה A</h1>
//       <input
//         type="text"
//         placeholder="הכנס ערך"
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default ComponentA;




import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MyContext } from "../pages/MyProvider";




const ComponentA = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const { setValue } = useContext(MyContext);

  const updateValue = (x) => {
    setValue(x); // עדכון הערך בצורה ישירה
  };

  
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // בדיקה מקומית עבור נתוני מבחן
      if (email === 'E@2.com' && password === '123456') {
        const mockedUserName = 'אלימלך';
        updateValue(mockedUserName)
        nav('/Home'); // ניווט לעמוד הבא
        console.log('Login successful - mocked');
      } else {
        // שליחת בקשה לשרת
        const response = await axios.post('http://localhost:3001/login', { email, password });

        if (response.data.success) {
          // setSharedValue(response.data.name); // עדכון Context משם המשתמש שהתקבל מהשרת
          nav('/Home'); // ניווט לעמוד הבא
        } else {
          setErrorMessage('שם משתמש או סיסמה שגויים');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('שגיאה בחיבור לשרת');
    }
  };

  return (
    <div className="container-fluid">
      <div className="containerLogin">
        <h1 className="title">BloodFlow</h1>
        <h2>"מערכת דיגיטלית להזמנת בדיקות דם מהמעבדה."</h2>
        <div className="Auth-form-container">
       
          <form className="formLogin Auth-form" onSubmit={onSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Log in</h3>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button onClick={updateValue} type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComponentA;




