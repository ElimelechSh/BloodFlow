


// import React, { useState, useContext } from 'react';
// import axios from 'axios';

// import { Outlet, useNavigate } from 'react-router-dom';
// import ComponentB from './ComponentB';

// const Patient_admission = () => {
//   const [name, setName] = useState('');
//   const [id, setId] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const nav = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (id === "123456") { // נתוני מטופל מדומים
//       const mockedPatient2 = "יוסי כהן"
//       // setPatientDetails(mockedPatient2); // עדכון פרטי המטופל
//       nav("/Galery");
//       console.log("מטופל מדומה - פרטי המטופל");
//     } else {
//       try {
//         const response = await axios.get(`http://localhost:3001/patients?id=${id}`);
//         if (response.data) {
//           // setPatientDetails({ name: response.data.name, id: response.data.id });
//           nav("/Galery");
//         } else {
//           setErrorMessage("מטופל לא נמצא במערכת.");
//         }
//       } catch (error) {
//         console.error("Error fetching patient details:", error);
//         setErrorMessage("שגיאה בחיבור לשרת.");
//       }
//     }
//   };

//   return (
//     <div>

// <div className="container-fluid">

// <div className="container">






// <div className="Auth-form-container">
      
//       <form className=" Auth-form" onSubmit={handleSubmit}>
//         <div className="Auth-form-content">
//           <h3 className="Auth-form-title">הכנס פרטי מטופל</h3>
//           <div className="form-group mt-3">
//           <input
//                   type="text"
//                   className="form-control"
//                   id="floatingInput"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <label htmlFor="floatingInput">שם</label>
//           </div>
//           <div className="form-group mt-3">
//           <input
//                   type="text"
//                   className="form-control"
//                   id="floatingId"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                 />
//                 <label htmlFor="floatingId">מספר זהות</label>
//           </div>
//           <div className="d-grid gap-2 mt-3">
//             <button type="submit" className="btn btn-primary">
//             כניסה
//             </button>
//           </div>
//           {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
        
//         </div>
//       </form>
//     </div>

//          </div> 
//       </div>
//       </div>
 
  
//   );
// };

// export default Patient_admission;














// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { doApiMethod } from '../services/apiservice';

// const Patient_admission = () => {
//   const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const [dob, setDob] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!id) {
//       setErrorMessage("אנא הזן מספר זהות.");
//       return;
//     }

//     try {
      
//       // שליחת בקשה לשרת לפי מספר זהות
//       // const response = await axios.get(`http://localhost:3007/api/patients/${id}`);
//       const response = await doApiMethod(`/api/patients/${id}`,'GET')

//       if (response.status === 200 && response.data) {

//         const patient = response.data; // פרטי המטופל שהתקבלו
//         setName(patient.name);
//         setDob(patient.dob);
//         setSuccessMessage(`מטופל נמצא: ${patient.name}, נולד ב-${patient.dob}`);
//         setValue(name);
//         // אם תרצה, ניתן לנווט לעמוד אחר
//         // navigate("/Galery");
//       } else {
//         setErrorMessage("מטופל לא נמצא במערכת.");
//       }
//     } catch (error) {
//       console.log(error);
//       console.error("Error fetching patient details:", error);
//       alert(error.response.data?.error?.message ?? "שגיאה בחיבור לשרת.");
//       // setErrorMessage(error.response.data?.error?.message ?? "שגיאה בחיבור לשרת.");
//     }
//   };

//   return (

//       <div className="">
//         {/* <div className="Auth-form-container">
//           <form className="Auth-form" onSubmit={handleSubmit}>
//             <div className="Auth-form-content">
//               <h3 className="Auth-form-title">הכנס מספר זהות</h3>
              
//               <div className="form-group mt-3">
//                 <label htmlFor="floatingId">מספר זהות</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="floatingId"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="הכנס מספר זהות"
//                 />
//               </div>
              
//               <div className="d-grid gap-2 mt-3">
//                 <button type="submit" className="btn btn-primary">בדוק</button>
//               </div>

             
//               {successMessage && (
//                 <div className="alert alert-success mt-3">
                
                 
//                   <p><strong>שם:</strong> {name}</p>
//                   <p><strong>תאריך לידה:</strong> {dob}</p>

//                 </div>
//               )}

             
//               {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
//             </div>
//           </form>
//         </div> */}



//         <div className='formPatishent'>
//         <form className="row" onSubmit={handleSubmit}>
// <div className='col-3 p-3'>
//   <div className="form-group mt-3 row ">
//     <div className='col-6 '><label htmlFor="floatingId" className='fs-5 '>הזדהות המטופל :</label>
//     </div>

//     <div className='col-6 '> <input
//                   type="text"
//                   className="form-control"
//                   id="floatingId"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="הכנס מספר זהות"
//                 /></div>
    
//               </div></div>
// <div className='col-1 p-3'>
// <div className=" mt-3">
//                 <button type="submit" className="btn btn-primary">בדוק</button>
//               </div>
// </div>
// <div className='col-5 p-3'>
// {successMessage && (
//                 <div className="alert alert-success mt-2 h-15">
//                   <p><strong>ת.ז :</strong> {id} <strong>שם:</strong> {name}  <strong>תאריך לידה:</strong> {dob}</p>
//                 </div>
//               )}

// </div>
// <div className='col-3 p-3'>
// {errorMessage && <div className="alert alert-danger mt-2">{errorMessage}</div>}

// </div>
// </form>
//         </div>



//       </div>
  
//   );
// };

// export default Patient_admission;












// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { doApiMethod } from '../services/apiservice';
// import { useDataContext } from './DataProvider';

// const Patient_admission = () => {
//   const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const [dob, setDob] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const { setDataFor4 } = useDataContext();



//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!id) {
//       setErrorMessage("אנא הזן מספר זהות.");
//       return;
//     }

//     try {
      
//       // שליחת בקשה לשרת לפי מספר זהות
//       // const response = await axios.get(`http://localhost:3007/api/patients/${id}`);
//       const response = await doApiMethod(`/api/patients/${id}`,'GET')

//       if (response.status === 200 && response.data) {

//         const patient = response.data; // פרטי המטופל שהתקבלו
//         setName(patient.name);
//         setDob(patient.name);
        
//         setSuccessMessage(`מטופל נמצא: ${patient.name}, נולד ב-${patient.dob}`);
//         // setValue(name);
      
//         setDataFor4(patient);
        
//       } else {
//         setErrorMessage("מטופל לא נמצא במערכת.");
//       }
//     } catch (error) {
//       console.log(error);
//       console.error("Error fetching patient details:", error);
//       alert(error.response.data?.error?.message ?? "שגיאה בחיבור לשרת.");
//       // setErrorMessage(error.response.data?.error?.message ?? "שגיאה בחיבור לשרת.");
//     }
//   };

//   return (

//       <div className="">
       


//         <div className='formPatishent'>
//         <form className="row" onSubmit={handleSubmit}>
// <div className='col-3 p-3'>
//   <div className="form-group mt-3 row ">
//     <div className='col-6 '><label htmlFor="floatingId" className='fs-5 '>הזדהות המטופל :</label>
//     </div>

//     <div className='col-6 '> <input
//                   type="text"
//                   className="form-control"
//                   id="floatingId"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   placeholder="הכנס מספר זהות"
//                 /></div>
    
//               </div></div>
// <div className='col-1 p-3'>
// <div className=" mt-3">
//                 <button type="submit" className="btn btn-primary">בדוק</button>
//               </div>
// </div>
// <div className='col-5 p-3'>
// {successMessage && (
//                 <div className="alert alert-success mt-2 h-15">
//                   <p><strong>ת.ז :</strong> {id} <strong>שם:</strong> {name}  <strong>תאריך לידה:</strong> {dob}</p>
//                 </div>
//               )}

// </div>
// <div className='col-3 p-3'>
// {errorMessage && <div className="alert alert-danger mt-2">{errorMessage}</div>}

// </div>
// </form>
//         </div>



//       </div>
  
//   );
// };

// export default Patient_admission;










import React, { useState } from 'react';
import { doApiMethod } from '../services/apiservice';
import { useDataContext } from './DataProvider';
import { Search, User } from 'lucide-react';


const Patient_admission = ({ setPatientData,id,setId }) => {
  
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { setDataFor4 } = useDataContext();



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      setErrorMessage("אנא הזן מספר זהות.");
      return;
    }

    try {
      
      // שליחת בקשה לשרת לפי מספר זהות
      // const response = await axios.get(`http://localhost:3007/api/patients/${id}`);
      const response = await doApiMethod(`/api/patients/${id}`,'GET')

      if (response.status === 200 && response.data) {

        const patient = response.data; // פרטי המטופל שהתקבלו
        setName(patient.name);
        setDob(patient.name);
        
        setSuccessMessage(`מטופל נמצא: ${patient.name}, נולד ב-${patient.dob} ת.ז${id}`);
        // setValue(name);
      
        setDataFor4(patient);
        setPatientData(patient); // עדכון הסטייט בקומפוננטת האב
      } else {
        setErrorMessage("מטופל לא נמצא במערכת.");
      }
    } catch (error) {
      console.log(error);
      console.error("Error fetching patient details:", error);
      alert(error.response.data?.error?.message ?? "שגיאה בחיבור לשרת.");
      // setErrorMessage(error.response.data?.error?.message ?? "שגיאה בחיבור לשרת.");
    }
  };

  return (




    <div className="p-6">
                 {/* <div className="max-w-4xl mx-auto"> */}
                 {/* <div className="bg-white rounded-xl shadow-lg p-6 mb-6 styled-frame "> */}
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-6 styled-frame  w-[850px] mx-auto">

                      <form className="" onSubmit={handleSubmit}>
            <div className="flex items-center gap-4 mb-6">
        
              <input

                type="text"
                placeholder="Enter Patient ID"
                // value={id}
                onChange={(e) => setId(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
              type="submit" 
                // onClick={() => searchPatient(patientId)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

              {successMessage && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="w-5 h-5 text-gray-600" />
                    <h3 className="text-lg font-semibold">{name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <p>ID: {id}</p>
                    <p>DOB: {dob}</p>
                  </div>
                </div>
              )}

</form>
            </div>













      {/*  <div className="">
       


        <div className='formPatishent'>
        <form className="row" onSubmit={handleSubmit}>
<div className='col-3 p-3'>
  <div className="form-group mt-3 row ">
    <div className='col-6 '><label htmlFor="floatingId" className='fs-5 '>הזדהות המטופל :</label>
    </div>

    <div className='col-6 '> <input
                  type="text"
                  className="form-control"
                  id="floatingId"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="הכנס מספר זהות"
                /></div>
    
              </div></div>
<div className='col-1 p-3'>
<div className=" mt-3">
                <button type="submit" className="btn btn-primary">בדוק</button>
              </div>
</div>
<div className='col-5 p-3'>
{successMessage && (
                <div className="alert alert-success mt-2 h-15">
                  <p><strong>ת.ז :</strong> {id} <strong>שם:</strong> {name}  <strong>תאריך לידה:</strong> {dob}</p>
                </div>
              )}

</div>
<div className='col-3 p-3'>
{errorMessage && <div className="alert alert-danger mt-2">{errorMessage}</div>}

</div>
</form>
        </div>

*/}
</div>
     
            )
};

export default Patient_admission;
