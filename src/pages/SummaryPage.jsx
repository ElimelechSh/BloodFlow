import React, { useState, useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { doApiMethod } from "../services/apiservice";

const SummaryPage = () => {
  const mockData = {
    message: "Order created successfully",
    order: {
      orderNumber: "ORD-1734944441382-7256",
      patientDetails: {
        name: "Jane Smith",
        id: "123456789",
        birthDate: "1985-07-15",
      },
      tests: [
        {
          _id: "676926b9e81f475451268e17",
          name: "red",
          attributes: ["Hemoglobin"],
          barcode: null,
        },
        {
          _id: "676926b9e81f475451268e18",
          name: "brown",
          attributes: ["Iron"],
          barcode: null,
        },
        {
          _id: "676926b9e81f475451268e19",
          name: "green",
          attributes: ["Vitamin D", "Tumor Markers", "CEA"],
          barcode: null,
        },
      ],
      createdAt: "2024-12-23T09:00:41.382Z",
      createdBy: {
        _id: "6744842bacd184d57fc590f7",
        name: "John Doe",
        role: "doctor",
      },
    },
  };

  const [AllData, setOrderData] = useState(null);
  const [localBarcodes, setLocalBarcodes] = useState({});
  const [scannedBarcode, setScannedBarcode] = useState({});
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("");

  const handleScan = (barcode) => {
    setLocalBarcodes((prev) => ({
      ...prev,
      [currentColor]: barcode,
    }));
    setScannedBarcode((prev) => ({
      ...prev,
      [currentColor]: barcode,
    }));
    setIsCameraOpen(false);
    playBeep();
  };

  const playBeep = () => {
    const beep = new Audio("https://www.soundjay.com/button/beep-07.wav");
    beep.play();
  };

  const handleOpenCamera = (id) => {
    setCurrentColor(id);
    setIsCameraOpen(true);
  };

  const handleBarcodeChange = (id, value) => {
    setLocalBarcodes((prev) => ({
      ...prev,
      [id]: value,
    }));
    setScannedBarcode((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await doApiMethod("/api/orders", "POST", {});
        if (!response.ok) throw new Error("Failed to fetch order data");
        setOrderData(response.data);
      } catch (error) {
        console.error(error);
        alert("Using local mock data due to server error.");
        setOrderData(mockData);
      }
    };

    fetchOrderData();
  }, []);

  const handleSubmit = async () => {
    if (!AllData) return;

    const updatedTests = AllData.order.tests.map((test) => ({
      ...test,
      barcode: localBarcodes[test._id] || null,
    }));

    try {
      const response = await doApiMethod(`/api/tests/${AllData.order.orderNumber}`,"POST",
        { tests: updatedTests }
      );
      if (!response.ok) throw new Error("Failed to update order");
      setOrderData(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to update order. Check console for details.");
    }
  };

  if (!AllData) return <p>Loading...</p>;

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="containerGulery">
          <div className="d-flex justify-content-center p-5">
            <div className="styled-frame p-5 text-center">
              <h1 className="fw-bold">Order Details</h1>
              {AllData && AllData.order && AllData.order.patientDetails ? (
                <>
                  <p>
                    <strong>Patient Name:</strong>{" "}
                    {AllData.order.patientDetails.name}
                  </p>
                  <p>
                    <strong>ID:</strong> {AllData.order.patientDetails.id}
                  </p>
                  <p>
                    <strong>Birth Date:</strong>{" "}
                    {new Date(
                      AllData.order.patientDetails.birthDate
                    ).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Order Number:</strong>{" "}
                    {AllData.order.orderNumber}
                  </p>
                </>
              ) : (
                <div className="styled-frame">
                  <p>Loading patient details...</p>
                </div>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center p-5">
            <div className="WindowGalery">
              {AllData.order.tests.map((test) => (
                <div
                  key={test._id}
                  className="mb-4 p-3"
                  style={{
                    border: `3px solid ${test.name}`,
                    borderRadius: "10px",
                    backgroundColor: "#f9f9f9",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: test.name,
                        marginRight: "10px",
                      }}
                    ></div>
                    <h3>{test.name} Test</h3>
                  </div>
                  <ul>
                    {test.attributes.map((attribute, index) => (
                      <li key={index}>{attribute}</li>
                    ))}
                  </ul>
                  <div className="d-flex align-items-center mt-3">
                    <input
                      type="text"
                      placeholder="Enter barcode"
                      className="form-control mt-3"
                      value={localBarcodes[test._id] || ""}
                      onChange={(e) =>
                        handleBarcodeChange(test._id, e.target.value)
                      }
                    />
                    <button
                      className="btn btn-secondary mt-3"
                      onClick={() => handleOpenCamera(test._id)}
                    >
                      Scan Barcode
                    </button>
                  </div>
                  {localBarcodes[test._id] && (
                    <p className="text-success mt-2">
                      Barcode: {localBarcodes[test._id]}
                    </p>
                  )}
                </div>
              ))}
              {isCameraOpen && (
                <div className="scanner-overlay">
                  <div className="scanner-animation">
                    <BarcodeScannerComponent
                      width={300}
                      height={200}
                      onUpdate={(err, result) => {
                        if (result) handleScan(result.text);
                      }}
                    />
                    <div className="red-line"></div>
                  </div>
                  <button
                    className="btn btn-danger mt-2 close-scanner"
                    onClick={() => setIsCameraOpen(false)}
                  >
                    Close Scanner
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="text-center p-4">
            <button className="btn btn-primary mt-4" onClick={handleSubmit}>
              Submit Data
            </button>
          </div>

          <style>
            {`
              .scanner-overlay {
                position: fixed;
                top: 300px;
                left: 300px;
                width: 400px;
                height: 300px;
                background-color: rgba(0, 0, 0, 0.8);
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                padding: 15px;
              }
              .scanner-animation {
                position: relative;
                width: 300px;
                height: 250px;
                border: 2px solid #fff;
              }
              .scanner-animation .red-line {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: red;
                animation: move-down 2s infinite;
              }
              @keyframes move-down {
                0% { top: 0; }
                100% { top: 100%; }
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
















// import React, { useState } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import ComponentB from "./ComponentB";

// const SummaryPage = () => {
//   const [barcodes, setBarcodes] = useState({});
//   const [scannedBarcode, setScannedBarcode] = useState({});
//   const [error, setError] = useState(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const [currentColor, setCurrentColor] = useState("");

//   const location = useLocation();
//   const navigate = useNavigate();
//   // { state: { sortedByColor, orderNumber } 
//   const { sortedByColor, orderNumber } = location.state || {
//     selectedResults: {},
//     orderNumber: null,
//   };

//   // const jsonData = selectedResults;

//   const handleScan = (barcode) => {
//     setBarcodes((prev) => ({
//       ...prev,
//       [currentColor]: barcode,
//     }));
//     setScannedBarcode((prev) => ({
//       ...prev,
//       [currentColor]: barcode,
//     }));
//     setIsCameraOpen(false);
//     playBeep();
//   };

//   const playBeep = () => {
//     const beep = new Audio("https://www.soundjay.com/button/beep-07.wav");
//     beep.play();
//   };

//   // const groupByColor = (data) => {
//   //   const grouped = {};
//   //   for (const category in data) {
//   //     data[category].forEach((test) => {
//   //       if (!grouped[test.color]) {
//   //         grouped[test.color] = [];
//   //       }
//   //       grouped[test.color].push(test.name);
//   //     });
//   //   }
//   //   return grouped;
//   // };

//   // const sortedByColor = groupByColor(jsonData);

//   const handleOpenCamera = (color) => {
//     setCurrentColor(color);
//     setIsCameraOpen(true);
//   };

//   const handleBarcodeChange = (color, value) => {
//     setBarcodes((prev) => ({
//       ...prev,
//       [color]: value,
//     }));
//     setScannedBarcode((prev) => ({
//       ...prev,
//       [color]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     const formattedSamples = Object.keys(barcodes).map((color) => ({
//       barcode: barcodes[color],
//       color: color,
//       tests: sortedByColor[color],
//     }));
//   console.log("formattedSamples  :",formattedSamples)
//     const orderDetails = {
//       orderNumber,
//       patientID: "123456", // יש להחליף בתעודת זהות אמיתית של מטופל
//       doctorName: "אליהו", // יש להחליף בשם רופא אמיתי
//       date: new Date().toLocaleDateString(),
//       time: new Date().toLocaleTimeString(),
//     };

//     try {
//       //  שליחה ל-DB עבור הבדיקות כוללל מספרי ברקוד
//       // await axios.post("http://localhost:3001/api/tests", {
//       //   samples: formattedSamples,
//       // });
//       const response = await doApiMethod("/api/tests", "POST", formattedSamples);
//       console.log("Post")

//       // שליחה ל-DB עבור פרטי ההזמנה הכללי
//       // await axios.post("http://localhost:3001/api/orders", orderDetails);
//       // const response = await doApiMethod("/api/orders", "POST", orderDetails);
//       // console.log("Post")
//     // מעבר לדף הסיכום עם פרטי ההזמנה
//     navigate("/SentToLab", { state: { ...orderDetails } });
//       alert("הנתונים נשלחו בהצלחה!");
//     } catch (error) {
//       console.error("Error sending data:", error);
//       setError("שגיאה בשליחת הנתונים.");
//       // return;
//     }

//   };

//   return (
//     <div className="container-fluid">
//   <div className="container">
//       <h1 className="text-center my-4">סיכום הזמנה</h1>
//       {orderNumber && (
//         <h2 className="text-center text-info p-5">מספר הזמנה: {orderNumber}</h2>
        
//       )}
//       <div className="containerCategory">
//         {Object.keys(sortedByColor).map((color) => (
//           <div
//             key={color}
//             className="mb-4 p-3"
//             style={{
//               border: `3px solid ${color}`,
//               borderRadius: "10px",
//               backgroundColor: "#f9f9f9",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <div className="d-flex align-items-center">
//               <div
//                 style={{
//                   width: "50px",
//                   height: "50px",
//                   borderRadius: "50%",
//                   backgroundColor: color,
//                   marginRight: "10px",
//                 }}
//               ></div>
//               <h3>{color.toUpperCase()} Tests</h3>
//             </div>
//             <ul>
//               {sortedByColor[color].map((test, index) => (
//                 <li key={index}>{test}</li>
//               ))}
//             </ul>
//             <div className="d-flex align-items-center mt-3">
//               <input
//                 type="text"
//                 placeholder="הכנס מספר ברקוד"
//                 className="form-control mt-3"
//                 onChange={(e) => handleBarcodeChange(color, e.target.value)}
//               />
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => handleOpenCamera(color)}
//               >
//                 סרוק ברקוד
//               </button>
//             </div>
//             {scannedBarcode[color] && (
//               <p className="text-success mt-2">ברקוד: {scannedBarcode[color]}</p>
//             )}
//           </div>
//         ))}
//         {isCameraOpen && (
//           <div className="camera-overlay">
//             <BarcodeScannerComponent
//               width={300}
//               height={200}
//               onUpdate={(err, result) => {
//                 if (result) {
//                   handleScan(result.text);
//                 }
//               }}
//             />
//             <button
//               className="btn btn-danger mt-2"
//               onClick={() => setIsCameraOpen(false)}
//             >
//               סגור סורק
//             </button>
//           </div>
//         )}
//       </div>
//       <div className="text-center">
//         <button className="btn btn-primary mt-4" onClick={handleSubmit}>
//           שלח נתונים
//         </button>
//       </div>
//       {error && <p className="text-danger text-center mt-3">{error}</p>}
//     </div>
//     </div>
//   );
// };

// export default SummaryPage;




// לחזור לכאן @#$%^&* *** *** 


// import React, { useState } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { doApiMethod } from "../services/apiservice";
// import { useContext } from 'react';
// import { MyContext } from '../pages/MyProvider';
// import PatientDetails from "./PatientDetails";

// const SummaryPage = () => {
//   const [barcodes, setBarcodes] = useState({});
//   const [scannedBarcode, setScannedBarcode] = useState({});
//   const [error, setError] = useState(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const [currentColor, setCurrentColor] = useState("");
//   const { successMessage } = useContext(MyContext);

//   const location = useLocation();
//   const navigate = useNavigate();

//   // שליפת נתונים שהועברו מהעמוד הקודם
//   const { sortedByColor, orderNumber, patientID, doctorName } = location.state || {
//     sortedByColor: {},
//     orderNumber: null,
//     patientID: "",
//     doctorName: "",
//   };
// console.log( sortedByColor, orderNumber, patientID, doctorName)
//   // סריקת ברקוד ועדכון ברשימת הברקודים
//   const handleScan = (barcode) => {
//     setBarcodes((prev) => ({
//       ...prev,
//       [currentColor]: barcode,
//     }));
//     setScannedBarcode((prev) => ({
//       ...prev,
//       [currentColor]: barcode,
//     }));
//     setIsCameraOpen(false);
//     playBeep();
//   };

//   // ניגון צליל בעת סריקת ברקוד
//   const playBeep = () => {
//     const beep = new Audio("https://www.soundjay.com/button/beep-07.wav");
//     beep.play();
//   };

//   // פתיחת מצלמה לסריקת ברקוד עבור צבע מסוים
//   const handleOpenCamera = (color) => {
//     setCurrentColor(color);
//     setIsCameraOpen(true);
//   };

//   // עדכון ברקוד באופן ידני עבור צבע מסוים
//   const handleBarcodeChange = (color, value) => {
//     setBarcodes((prev) => ({
//       ...prev,
//       [color]: value,
//     }));
//     setScannedBarcode((prev) => ({
//       ...prev,
//       [color]: value,
//     }));
//   };

//   // שליחת הנתונים לשרת
//   const handleSubmit = async () => {
//     // הכנת רשימת הבדיקות בפורמט הדרוש
//     const formattedSamples = Object.keys(barcodes).map((color) => ({
//       barcode: barcodes[color],
//       color: color,
//       tests: sortedByColor[color],
//     }));

//     // פרטי המטופל ומספר ההזמנה
//     const orderDetails = {
//       orderNumber,
//       patientID,
//       doctorName,
//       date: new Date().toLocaleDateString(),
//       time: new Date().toLocaleTimeString(),
//     };

    
// // שליחת נתונים כללי שם ןמספר הזמנה ושם רופא ועוד
// try {
//   const response = await doApiMethod(`/api/tests/${testId}/tube`, "patch", orderDetails);
      
//     console.log("פרטי ההזמנה נשלחו בהצלחה");

// } catch (error) {
//   console.error("Error sending data:", error);
//   setError("שגיאה בשליחת הנתונים.1");
  
// }



// const updateTubeNumber = async (testId, tubeNumber) => {
//   const url = `http://your-server-url/api/tests/${testId}/tube`; // החלף בכתובת ה-URL של השרת שלך

//   const headers = {
//     Authorization: 'Bearer your-auth-token', // אם יש צורך באימות
//   };

//   try {
//     const response = await axios.patch(
//       url,
//       { tubeNumber },
//       { headers }
//     );

//     console.log('Tube number updated successfully:', response.data);
//   } catch (error) {
//     console.error('Error updating tube number:', error.response?.data || error.message);
//   }
// };

// // קריאה לדוגמה
// updateTubeNumber('64f2a0b8c1234abc5678def9', 'TUBE12345');














// // // שליחת מספרי ברקוד לבדיקות שנבחרו בהתאם למס הזמנה 
// // try {
  
// //   const response = await doApiMethod(`/api/tests/${orderNumber}/tube`, "POST", formattedSamples);
// //   // מעבר לדף הסיכום
// //   navigate("/SentToLab", { state: {orderDetails ,formattedSamples } });
// //   alert("הנתונים נשלחו בהצלחה!");
  
// // } catch (error) {
// //   console.error("Error sending data:", error);
// //   setError("שגיאה בשליחת הנתונים.2");



// //   // navigate("/SentToLab", { state: {orderDetails ,formattedSamples } });
 
  
// // }


// // {
// //   "orderDetails": {
// //       "orderNumber": "ORD-1733738092410-9276",
// //       "date": "9.12.2024",
// //       "time": "23:39:25"
// //   },
// //   "formattedSamples": formattedSamples
// // }





//       // try {
//       // const response = await doApiMethod("/api/tests", "POST", formattedSamples);
//       // שליחה של בדיקות למספר ההזמנה
//       // await axios.post("http://localhost:3007/api/tests", formattedSamples);
//       // console.log("בדיקות נשלחו בהצלחה");
//       // const response = await doApiMethod("/api/orders", "POST", formattedData);
//       // שליחה של פרטי הזמנה כלליים
//       // await axios.post("http://localhost:3007/api/orders", orderDetails);
//       // console.log("פרטי ההזמנה נשלחו בהצלחה");
//       // מעבר לדף הסיכום
//       // navigate("/SentToLab", { state: { ...orderDetails } });
//       // alert("הנתונים נשלחו בהצלחה!");
//       // } catch (error) {
//       //   console.error("Error sending data:", error);
//       //   setError("שגיאה בשליחת הנתונים.");
//       // }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="container ">
// {/*Patient_admission  פרטי החולה מיובאים מ */}
//       <div>
//       {successMessage && (
//         <div className="alert alert-success">
//           {successMessage}
//         </div>
//       )}
//     </div>


//         <div className="containerGulery"> 

//           <PatientDetails/>
//         <h1 className="text-center my-4">הבדיקות שנבחרו </h1>
//         {orderNumber && (
//           <h2 className="text-center text-info p-5">מספר הזמנה: {orderNumber}</h2>
//         )}
//         <div className="WindowGalery">
//           {Object.keys(sortedByColor).map((color) => (
//             <div
//               key={color}
//               className="mb-4 p-3"
//               style={{
//                 border: `3px solid ${color}`,
//                 borderRadius: "10px",
//                 backgroundColor: "#f9f9f9",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <div className="d-flex align-items-center">
//                 <div
//                   style={{
//                     width: "50px",
//                     height: "50px",
//                     borderRadius: "50%",
//                     backgroundColor: color,
//                     marginRight: "10px",
//                   }}
//                 ></div>
//                 <h3>{color.toUpperCase()} Tests</h3>
//               </div>
//               <ul>
//                 {sortedByColor[color].map((test, index) => (
//                   <li key={index}>{test}</li>
//                 ))}
//               </ul>
//               <div className="d-flex align-items-center mt-3">
//                 <input
//                   type="text"
//                   placeholder="הכנס מספר ברקוד"
//                   className="form-control mt-3"
//                   onChange={(e) => handleBarcodeChange(color, e.target.value)}
//                 />
//                 <button
//                   className="btn btn-secondary"
//                   onClick={() => handleOpenCamera(color)}
//                 >
//                   סרוק ברקוד
//                 </button>
//               </div>
//               {scannedBarcode[color] && (
//                 <p className="text-success mt-2">ברקוד: {scannedBarcode[color]}</p>
//               )}
//             </div>
//           ))}
//           {isCameraOpen && (
          
//             <div className="scanner-overlay">
//                 <div className="scanner-animation">
//               <BarcodeScannerComponent
//                 width={300}
//                 height={200}
//                 onUpdate={(err, result) => {
//                   if (result) {
//                     handleScan(result.text);
//                   }
//                 }}
//               />
               
//                <div className="red-line " ></div>
//              </div>
//               <button
//                 className="btn btn-danger mt-2 close-scanner"
//                 onClick={() => setIsCameraOpen(false)}
//               >
//                 סגור סורק
//               </button>
//             </div>
//           )}
//         </div>
//         <div className="text-center p-4">
//           <button className="btn btn-primary mt-4" onClick={handleSubmit}>
//             שלח נתונים
//           </button>
//         </div>
//         {error && <p className="text-danger text-center mt-3">{error}</p>}
//         </div>
//       </div>





//       <style>
//         {`
//           .scanner-overlay {
//             position: fixed;
//             top: 300;
//             left: 300;
//             width:400px ;
//             height: 300px;
//             background-color: rgba(0, 0, 0, 0.8);
//              border-radius: 10px;
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//             align-items: center;
//             z-index: 1000;
//             padding: 15px;
//           }
//           .scanner-animation {
//             position: relative;
//             width: 300px;
//             height: 250px;
//             border: 2px solid #fff;
            
//           }
//           .scanner-animation .red-line {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 2px;
//             background-color: red;
//             animation: move-down 2s infinite;
//           }
//           @keyframes move-down {
//             0% { top: 0; }
//             100% { top: 100%; }
//           }
//           .close-scanner {
//             margin-top: 20px;
//           }
//         `}
//       </style>









      
//     </div>
//   );
// };

// export default SummaryPage;






// import React, { useState } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// const SummaryPage = () => {
//   const [barcodes, setBarcodes] = useState({});
//   const [scannedBarcode, setScannedBarcode] = useState({});
//   const [error, setError] = useState(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const [currentTestId, setCurrentTestId] = useState("");
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { order } = location.state || { order: null };
//   const { orderNumber, tests } = order || {};

//   const handleScan = (barcode) => {
//     setBarcodes((prev) => ({
//       ...prev,
//       [currentTestId]: barcode,
//     }));
//     setScannedBarcode((prev) => ({
//       ...prev,
//       [currentTestId]: barcode,
//     }));
//     setIsCameraOpen(false);
//     playBeep();
//   };

//   const playBeep = () => {
//     const beep = new Audio("https://www.soundjay.com/button/beep-07.wav");
//     beep.play();
//   };

//   const handleOpenCamera = (testId) => {
//     setCurrentTestId(testId);
//     setIsCameraOpen(true);
//   };

//   const handleBarcodeChange = (testId, value) => {
//     setBarcodes((prev) => ({
//       ...prev,
//       [testId]: value,
//     }));
//     setScannedBarcode((prev) => ({
//       ...prev,
//       [testId]: value,
//     }));
//   };

//   const updateTubeNumber = async (testId, tubeNumber) => {
//     const url = `/api/tests/${testId}/tube`;

//     try {
//       await axios.patch(url, { tubeNumber });
//       console.log(`Tube number ${tubeNumber} updated successfully for test ${testId}`);
//     } catch (error) {
//       console.error("Error updating tube number:", error.response?.data || error.message);
//       setError("שגיאה בעדכון מספר מבחנה.");
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       await Promise.all(
//         Object.keys(barcodes).map((testId) =>
//           updateTubeNumber(testId, barcodes[testId])
//         )
//       );
//       alert("כל הברקודים נשלחו בהצלחה!");
//       navigate("/SentToLab", { state: { orderNumber } });
//     } catch (error) {
//       console.error("Error sending barcodes:", error);
//       setError("שגיאה בשליחת הברקודים.");
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="text-center">סיכום הזמנה</h1>
//       {orderNumber && <h3>מספר הזמנה: {orderNumber}</h3>}
//       <div className="tests-container">





//         {tests.map((test) => (
//           <div key={test._id} className="test-item">
//             <h4>{test.name}</h4>
//             <ul>
//               {test.attributes.map((attr, index) => (
//                 <li key={index}>{attr}</li>
//               ))}
//             </ul>
//             <input
//               type="text"
//               placeholder="הכנס מספר ברקוד"
//               className="form-control"
//               onChange={(e) => handleBarcodeChange(test._id, e.target.value)}
//             />
//             <button
//               className="btn btn-secondary"
//               onClick={() => handleOpenCamera(test._id)}
//             >
//               סרוק ברקוד
//             </button>
//             {scannedBarcode[test._id] && (
//               <p className="text-success">ברקוד: {scannedBarcode[test._id]}</p>
//             )}
//           </div>
//         ))}
//       </div>
//       {isCameraOpen && (
//         <div className="scanner-overlay">
//           <BarcodeScannerComponent
//             width={300}
//             height={200}
//             onUpdate={(err, result) => {
//               if (result) {
//                 handleScan(result.text);
//               }
//             }}
//           />
//           <button
//             className="btn btn-danger"
//             onClick={() => setIsCameraOpen(false)}
//           >
//             סגור סורק
//           </button>
//         </div>
//       )}
//       <button className="btn btn-primary mt-4" onClick={handleSubmit}>
//         שלח ברקודים
//       </button>
//       {error && <p className="text-danger">{error}</p>}
//     </div>
//   );
// };

// export default SummaryPage;



// import React, { useState, useEffect, useContext } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import { useLocation } from "react-router-dom";

// import { MyContext } from '../pages/MyProvider';
// import PatientDetails from "./PatientDetails";
// import { doApiMethod } from "../services/apiservice";

// const SummaryPage = () => {
//   const [orderData, setOrderData] = useState(null); // נתוני ההזמנה
//   const [barcodes, setBarcodes] = useState({}); // ברקודים להזנה
//   const [loading, setLoading] = useState(false); // מצב טעינה
//   const [error, setError] = useState(null); // הודעת שגיאה
//   const [isCameraOpen, setIsCameraOpen] = useState(false); // מצב סורק מצלמה
//   const [currentTestId, setCurrentTestId] = useState(""); // מזהה הבדיקה הנוכחית לסריקה

//   const { successMessage } = useContext(MyContext);
//   const location = useLocation();

//   // קבלת מספר ההזמנה מהדף הקודם
//   const { orderNumber } = location.state || { orderNumber: null };
//   console.log("orderNumber ::",orderNumber)
//   // שליפת נתוני ההזמנה מהשרת
//   useEffect(() => {
//     const fetchOrderData = async () => {
//       setLoading(true);





//       try {
//         const response = await doApiMethod( `/api/orders?orderNumber=${orderNumber}`, "GET ");
//         // const response = await doApiMethod(`/api/orders/${orderNumber}`, "GET");
//         if (response.data) {
//           console.log("response.data :",response.data)
//           setOrderData(response.data);

//           // יצירת אובייקט ברקודים התחלתי עבור כל מבחנה
//           const initialBarcodes = {};
//           response.data.order.tests.forEach(test => {
//             initialBarcodes[test._id] = ""; // התחלת ערך ריק לכל ברקוד
//           });
//           setBarcodes(initialBarcodes);
//         }
//       } catch (err) {
//         setError("שגיאה בטעינת נתוני ההזמנה ");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (orderNumber) fetchOrderData();
//   }, [orderNumber]);

//   // עדכון ברקוד באופן ידני
//   const handleBarcodeChange = (testId, value) => {
//     setBarcodes((prev) => ({
//       ...prev,
//       [testId]: value, // עדכון הברקוד עבור ה-TestId הרלוונטי
//     }));
//   };

//   // פתיחת מצלמה לסריקת ברקוד
//   const handleOpenCamera = (testId) => {
//     setCurrentTestId(testId); // שמירת ה-TestId לבדיקת המבחנה הספציפית
//     setIsCameraOpen(true);
//   };

//   // טיפול בתוצאה מסורק הברקודים
//   const handleScan = (barcode) => {
//     if (barcode) {
//       setBarcodes((prev) => ({
//         ...prev,
//         [currentTestId]: barcode, // עדכון הברקוד הסרוק
//       }));
//       setIsCameraOpen(false); // סגירת הסורק
//     }
//   };

//   // שליחת הברקודים לשרת
//   const handleSubmit = async () => {
//     try {
//       setLoading(true);

//       // הכנת הפורמט לשליחה לשרת
//       const payload = Object.keys(barcodes).map(testId => ({
//         testId,
//         barcode: barcodes[testId],
//       }));

//       await doApiMethod(`/api/tests/updateBarcodes`, "PATCH", payload);

//       alert("ברקודים עודכנו בהצלחה!");
//     } catch (err) {
//       setError("שגיאה בשליחת הברקודים");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // בדיקות טעינה ושגיאה
//   if (loading) return <div>טוען...</div>;
//   if (error) return <div>שגיאה: {error}</div>;

//   return (
//     <div className="container-fluid">
//       {successMessage && <div className="alert alert-success">{successMessage}</div>}

//       <PatientDetails /> {/* פרטי המטופל */}
//       <h1 className="text-center my-4">בדיקות למספר הזמנה: {orderNumber}</h1>

//       {orderData && (
//         <div className="WindowGalery">
//           {orderData.order.tests.map((test) => (
//             <div
//               key={test._id}
//               className="mb-4 p-3"
//               style={{
//                 border: "3px solid #007bff",
//                 borderRadius: "10px",
//                 backgroundColor: "#f9f9f9",
//                 boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <h3>בדיקה: {test.name}</h3>
//               <input
//                 type="text"
//                 placeholder="הכנס ברקוד"
//                 className="form-control mt-3"
//                 value={barcodes[test._id] || ""}
//                 onChange={(e) => handleBarcodeChange(test._id, e.target.value)}
//               />
//               <button
//                 className="btn btn-secondary mt-3"
//                 onClick={() => handleOpenCamera(test._id)}
//               >
//                 סרוק ברקוד
//               </button>
//               {barcodes[test._id] && (
//                 <p className="text-success mt-2">ברקוד: {barcodes[test._id]}</p>
//               )}
//             </div>
//           ))}

//           {/* סורק הברקודים */}
//           {isCameraOpen && (
//             <div className="scanner-overlay">
//               <BarcodeScannerComponent
//                 width={300}
//                 height={200}
//                 onUpdate={(err, result) => {
//                   if (result) {
//                     handleScan(result.text); // עדכון הברקוד בסריקה
//                   }
//                 }}
//               />
//               <button
//                 className="btn btn-danger mt-3"
//                 onClick={() => setIsCameraOpen(false)}
//               >
//                 סגור סורק
//               </button>
//             </div>
//           )}
//         </div>
//       )}

//       <div className="text-center p-4">
//         <button className="btn btn-primary mt-4" onClick={handleSubmit}>
//           שלח נתונים
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SummaryPage;
