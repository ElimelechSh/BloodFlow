


import React from "react";
import { useDataContext } from "./DataProvider";

const PatientDetails = () => {
  const { dataFor4 } = useDataContext(); // שליפת הנתונים מהקונטקסט

  return (
    <div className="p-5">
      {dataFor4 ? (
        <div className="alert alert-success mt-2 h-15">
          <p>
            פרטי המטופל: <strong>ת.ז :</strong> {dataFor4.id}{" "}
            <strong>שם:</strong> {dataFor4.name}{" "}
            <strong>תאריך לידה:</strong> {dataFor4.dob}
          </p>
        </div>
      ) : (
        <p>לא נבחר מטופל</p>
      )}
    </div>
  );
};

export default PatientDetails;
