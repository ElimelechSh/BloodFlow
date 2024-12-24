

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const SentToLab = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // קבלת הנתונים מהדף הקודם
//   const data = location.state;

//   return (
//     <div className="container text-center my-5">
//       <h1 className="text-success mb-4">הנתונים נשלחו בהצלחה למעבדה</h1>
      
//       {/* הצגת הנתונים שנשלחו */}
//       {data ? (
//         <div className="data-container">
//           <h3>פרטי שליחה:</h3>
//           <p><strong>תאריך:</strong> {data.date}</p>
//           <p><strong>שעה:</strong> {data.time}</p>
//           <p><strong>שם המטופל:</strong> {data.patientName}</p>
//           <h4 className="mt-4">פרטי דגימות:</h4>
//           <ul className="list-group">
//             {data.samples.map((sample, index) => (
//               <li key={index} className="list-group-item">
//                 <strong>ברקוד:</strong> {sample.barcode} <br />
//                 <strong>צבע מבחנה:</strong> {sample.color} <br />
//                 <strong>בדיקות:</strong> {sample.tests.join(", ")}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p className="text-danger mt-3">שגיאה: לא התקבלו נתונים.</p>
//       )}

//       {/* כפתור חזרה לדף הבית */}
//       <button
//         className="btn btn-primary mt-5"
//         onClick={() => navigate("/")}
//       >
//         חזרה לדף הבית
//       </button>
//     </div>
//   );
// };

// export default SentToLab;



// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const SentToLab = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // קבלת הנתונים מהדף הקודם
//   const data = location.state;

//   return (
//     <div className="container text-center my-5">
//       <h1 className="text-success mb-4">הנתונים נשלחו בהצלחה למעבדה</h1>

//       {/* הצגת מספר ההזמנה */}
//       {data && data.orderNumber && (
//         <div className="order-number-container mb-4">
//           <h3 className="text-primary">מספר הזמנה: {data.orderNumber}</h3>
//         </div>
//       )}

//       {/* הצגת הנתונים שנשלחו */}
//       {data ? (
//         <div className="data-container">
//           <h3>פרטי שליחה:</h3>
//           <p><strong>תאריך:</strong> {data.date}</p>
//           <p><strong>שעה:</strong> {data.time}</p>
//           <p><strong>שם המטופל:</strong> {data.patientName}</p>
//           <p><strong>תעודת זהות:</strong> {data.patientID}</p>
//           <p><strong>שם הרופא:</strong> {data.doctorName}</p>
//           <h4 className="mt-4">פרטי דגימות:</h4>
//           <ul className="list-group">
//             {data.samples.map((sample, index) => (
//               <li key={index} className="list-group-item">
//                 <strong>ברקוד:</strong> {sample.barcode} <br />
//                 <strong>צבע מבחנה:</strong> {sample.color} <br />
//                 <strong>בדיקות:</strong> {sample.tests.join(", ")}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p className="text-danger mt-3">שגיאה: לא התקבלו נתונים.</p>
//       )}

//       {/* כפתור חזרה לדף הבית */}
//       <button
//         className="btn btn-primary mt-5"
//         onClick={() => navigate("/")}
//       >
//         חזרה לדף הבית
//       </button>
//     </div>
//   );
// };

// export default SentToLab;






import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SentToLab = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // קבלת הנתונים מהדף הקודם
  const data = location.state || {};
console.log(data)
  return (
    <div className="container-fluid">
    <div className="container ">
      <h1 className="text-success mb-4">הנתונים נשלחו בהצלחה למעבדה</h1>

      {/* הצגת מספר ההזמנה */}
      {data.orderNumber ? (
        <div className="order-number-container mb-4">
          <h3 className="text-primary">מספר הזמנה: {data.orderNumber}</h3>
        </div>
      ) : (
        <p className="text-danger">מספר ההזמנה אינו זמין.</p>
      )}

      {/* הצגת הנתונים שנשלחו */}
      {/* {data.samples && Array.isArray(data.samples) ? (
        <div className="data-container">
          <h3>פרטי שליחה:</h3>
          <p><strong>תאריך:</strong> {data.date || "לא זמין"}</p>
          <p><strong>שעה:</strong> {data.time || "לא זמין"}</p>
          <p><strong>שם המטופל:</strong> {data.patientName || "לא זמין"}</p>
          <p><strong>תעודת זהות:</strong> {data.patientID || "לא זמין"}</p>
          <p><strong>שם הרופא:</strong> {data.doctorName || "לא זמין"}</p>
          <h4 className="mt-4">פרטי דגימות:</h4>
          <ul className="list-group">
            {data.samples.map((sample, index) => (
              <li key={index} className="list-group-item">
                <strong>ברקוד:</strong> {sample.barcode || "לא זמין"} <br />
                <strong>צבע מבחנה:</strong> {sample.color || "לא זמין"} <br />
                <strong>בדיקות:</strong>{" "}
                {sample.tests && sample.tests.length > 0
                  ? sample.tests.join(", ")
                  : "לא זמין"}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-danger mt-3">שגיאה: לא התקבלו דגימות.</p>
      )} */}




{data.samples && Array.isArray(data.samples) ? (
        <div className="data-container">
          <h3>פרטי שליחה:</h3>
          <p><strong>תאריך:</strong> {data.orderDetails.date || "לא זמין"}</p>
          <p><strong>שעה:</strong> {data.time || "לא זמין"}</p>
          <p><strong>שם המטופל:</strong> {data.patientName || "לא זמין"}</p>
          <p><strong>תעודת זהות:</strong> {data.patientID || "לא זמין"}</p>
          <p><strong>שם הרופא:</strong> {data.doctorName || "לא זמין"}</p>
          <h4 className="mt-4">פרטי דגימות:</h4>
          <ul className="list-group">
            {data.samples.map((sample, index) => (
              <li key={index} className="list-group-item">
                <strong>ברקוד:</strong> {sample.barcode || "לא זמין"} <br />
                <strong>צבע מבחנה:</strong> {sample.color || "לא זמין"} <br />
                <strong>בדיקות:</strong>{" "}
                {sample.tests && sample.tests.length > 0
                  ? sample.tests.join(", ")
                  : "לא זמין"}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-danger mt-3">שגיאה: לא התקבלו דגימות.</p>
      )}











      {/* כפתור חזרה לדף הבית */}
      <button
        className="btn btn-primary mt-5"
        onClick={() => navigate("/")}
      >
        חזרה לדף הבית
      </button>
    </div>
    </div>
  );
};

export default SentToLab;
