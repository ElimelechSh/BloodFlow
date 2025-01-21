

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



</div>
     
            )
};

export default Patient_admission;
