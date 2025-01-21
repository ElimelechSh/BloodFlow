import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SentToLab = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {};
  console.log("data :",data)
  const order = data.order || {}; 
  const tests = order.tests || []; 

  return (
    <div className="container-fluid sent-to-lab-container">
      <div className="container p-5 shadow-lg ">
        <h1 className="text-success mb-4 text-center">הנתונים נשלחו בהצלחה למעבדה</h1>

        {/* הצגת מספר ההזמנה */}
        {order.orderNumber ? (
          <div className=" mb-4 text-center">
            <h3 className="text-primary">מספר הזמנה: {order.orderNumber}</h3>
          </div>
        ) : (
          <p className="text-danger">מספר ההזמנה אינו זמין.</p>
        )}

        {/* הצגת פרטי המטופל */}
        <div className="row p-5">
          <div className="col-md-6 p-3">
            <div className=" mb-4 card shadow-sm">
              <div className="card-body styled-frame">
                <h4 className="card-title">רופא המטפל:</h4>
                <p><strong>שם:</strong> {order.createdBy?.name || "לא זמין"}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-3">
            <div className=" mb-4 card shadow-sm">
              <div className="card-body styled-frame">
                <h4 className="card-title">פרטי המטופל:</h4>
                <p><strong>שם:</strong> {order.patientDetails?.name || "לא זמין"}</p>
                <p><strong>תעודת זהות:</strong> {order.patientDetails?.id || "לא זמין"}</p>
                <p><strong>תאריך לידה:</strong> {order.patientDetails?.birthDate || "לא זמין"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* הצגת בדיקות */}
        {tests.length > 0 ? (
          <div className="data-container mt-4 ">
            <h4 className="text-info mb-3">פרטי דגימות:</h4>
            <ul className="list-group shadow-sm rounded styled-frame">
              {tests.map((test, index) => (
                <li key={index} className="list-group-item">
                  <strong>צבע מבחנה:</strong> {test.name || "לא זמין"} <br />
                  <strong>בדיקות:</strong>{" "}
                  {test.attributes && test.attributes.length > 0
                    ? test.attributes.join(", ")
                    : "לא זמין"}{" "}
                  <br />
                  <strong>ברקוד:</strong> {test.barcode || "לא זמין"}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-danger mt-3">שגיאה: לא התקבלו דגימות.</p>
        )}

        {/* כפתור חזרה לדף הבית */}
        <div className="text-center mt-5">
          <button
            className="btn btn-primary btn-lg rounded-pill shadow"
            onClick={() => navigate("/Home")}
          >
            חזרה לדף הבית
          </button>
        </div>
      </div>
    </div>
  );
};

export default SentToLab;