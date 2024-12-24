

// import React, { useState, useEffect } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import { doApiMethod } from "../services/apiservice";
// const Tests = () => {
//   // JSON דוגמה לנתונים במצב שאין שרת
//   const mockData = {
//     message: "Order created successfully",
//     order: {
//       orderNumber: "ORD-1734944441382-7256",
//       tests: [
//         {
//           _id: "676926b9e81f475451268e17",
//           name: "red",
//           attributes: ["Hemoglobin"],
//           barcode: null,
//         },
//         {
//           _id: "676926b9e81f475451268e18",
//           name: "brown",
//           attributes: ["Iron"],
//           barcode: null,
//         },
//         {
//           _id: "676926b9e81f475451268e19",
//           name: "green",
//           attributes: ["Vitamin D", "Tumor Markers", "CEA"],
//           barcode: null,
//         },
//       ],
//       createdAt: "2024-12-23T09:00:41.382Z",
//       createdBy: {
//         _id: "6744842bacd184d57fc590f7",
//         name: "John Doe",
//         role: "doctor",
//       },
//     },
//   };

//   const [AllData, setOrderData] = useState(null);
//   const [localBarcodes, setLocalBarcodes] = useState({});
//   const [barcodes, setBarcodes] = useState({});
//   const [scannedBarcode, setScannedBarcode] = useState({});
//   const [error, setError] = useState(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);



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







//   // Fetch order data from the server or use mockData
//   useEffect(() => {
//     const fetchOrderData = async () => {
//       try {

//         const response = await doApiMethod("/api/orders", "POST", orderNumber);
        
//         const responseData = response.data; // קיבלתי את כל ההזמנה
//       console.log("responseData :", responseData);
  


//         if (!response.ok) throw new Error("Failed to fetch order data");

//         const data = await responseData.json();
//         setOrderData(data);
//       } catch (error) {
//         console.error(error);
//         alert("Using local mock data due to server error.");
//         setOrderData(mockData);
//       }
//     };

//     fetchOrderData();
//   }, []);

//   // Update local barcodes
// //   const handleBarcodeChange = (testId, value) => {
// //     setLocalBarcodes((prev) => ({ ...prev, [testId]: value }));
// //   };

//   // Submit updated barcodes to the server
//   const handleSubmit = async () => {
//     if (!AllData) return;

//     const updatedTests = AllData.order.tests.map((test) => ({
//       ...test,
//       barcode: localBarcodes[test._id] || null,
//     }));

//     const updatedOrderData = {
//       ...AllData,
//       order: {
//         ...AllData.order,
//         tests: updatedTests,
//       },
//     };

//     try {

//         const response = await doApiMethod(`/api/tests/${orderNumber}`, "fetch", updatedOrderData);
//           console.log("sendgin new data: ", updatedOrderData)
//       if (!response.ok) throw new Error("Failed to update order");

//       const data = await response.json();
//       alert(`Order updated: \n${JSON.stringify(data, null, 2)}`);
//       setOrderData(data);
//     } catch (error) {
//       console.error(error);
//       alert(`Using local data: \n${JSON.stringify(updatedOrderData, null, 2)}`);
//       setOrderData(updatedOrderData);
//     }
//   };

//   if (!AllData) return <p>Loading...</p>;

//   return (

// <div>
        
// <div className="container-fluid">
// <div className="container ">



//   <div className="containerGulery"> 


//     <div style={{ padding: "20px" }}>
//       <h1>Order Details</h1>
//       <p><strong>Order Number:</strong> {AllData.order.orderNumber}</p>
//       <p><strong>Created By:</strong> {AllData.order.createdBy.name} ({AllData.order.createdBy.role})</p>
//       <p><strong>Created At:</strong> {new Date(AllData.order.createdAt).toLocaleString()}</p>

//       <h2>Tests</h2>
      



//       <div className="WindowGalery">
//     {AllData.order.tests.map((test) => (
//       <div
//         key={color}
//         className="mb-4 p-3"
//         style={{
//           border: `3px solid ${color}`,
//           borderRadius: "10px",
//           backgroundColor: "#f9f9f9",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <div className="d-flex align-items-center">
//           <div
//             style={{
//               width: "50px",
//               height: "50px",
//               borderRadius: "50%",
//               backgroundColor: color,
//               marginRight: "10px",
//             }}
//           ></div>
//           <h3>{color.toUpperCase()} Tests</h3>
//         </div>
//         <ul>
//           {sortedByColor[color].map((test, index) => (
//             <li key={index}>{test}</li>
//           ))}
//         </ul>
//         <div className="d-flex align-items-center mt-3">
//           <input
//             type="text"
//             placeholder="הכנס מספר ברקוד"
//             className="form-control mt-3"
//             onChange={(e) => handleBarcodeChange(color, e.target.value)}
//           />
//           <button
//             className="btn btn-secondary"
//             onClick={() => handleOpenCamera(color)}
//           >
//             סרוק ברקוד
//           </button>
//         </div>
//         {scannedBarcode[color] && (
//           <p className="text-success mt-2">ברקוד: {scannedBarcode[color]}</p>
//         )}
//       </div>
//     ))}
//     {isCameraOpen && (
    
//       <div className="scanner-overlay">
//           <div className="scanner-animation">
//         <BarcodeScannerComponent
//           width={300}
//           height={200}
//           onUpdate={(err, result) => {
//             if (result) {
//               handleScan(result.text);
//             }
//           }}
//         />
         
//          <div className="red-line " ></div>
//        </div>
//         <button
//           className="btn btn-danger mt-2 close-scanner"
//           onClick={() => setIsCameraOpen(false)}
//         >
//           סגור סורק
//         </button>
//       </div>
//     )}
//   </div>

//     <div className="text-center p-4">
//     <button className="btn btn-primary mt-4" onClick={handleSubmit}>
//       שלח נתונים
//     </button>
//   </div>
//   {error && <p className="text-danger text-center mt-3">{error}</p>}
//   </div>
// </div>


// {/* <style>
//   {`
//     .scanner-overlay {
//       position: fixed;
//       top: 300;
//       left: 300;
//       width:400px ;
//       height: 300px;
//       background-color: rgba(0, 0, 0, 0.8);
//        border-radius: 10px;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       z-index: 1000;
//       padding: 15px;
//     }
//     .scanner-animation {
//       position: relative;
//       width: 300px;
//       height: 250px;
//       border: 2px solid #fff;
      
//     }
//     .scanner-animation .red-line {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 2px;
//       background-color: red;
//       animation: move-down 2s infinite;
//     }
//     @keyframes move-down {
//       0% { top: 0; }
//       100% { top: 100%; }
//     }
//     .close-scanner {
//       margin-top: 20px;
//     }
//   `}
// </style> */}

// </div>

// </div>
// </div>

//   );
// };

// export default Tests;














// import React, { useState, useEffect } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import { doApiMethod } from "../services/apiservice";

// const Tests = () => {
//   const mockData = {
//     message: "Order created successfully",
//     order: {
//       orderNumber: "ORD-1734944441382-7256",
//       tests: [
//         {
//           _id: "676926b9e81f475451268e17",
//           name: "red",
//           attributes: ["Hemoglobin"],
//           barcode: null,
//         },
//         {
//           _id: "676926b9e81f475451268e18",
//           name: "brown",
//           attributes: ["Iron"],
//           barcode: null,
//         },
//         {
//           _id: "676926b9e81f475451268e19",
//           name: "green",
//           attributes: ["Vitamin D", "Tumor Markers", "CEA"],
//           barcode: null,
//         },
//       ],
//       createdAt: "2024-12-23T09:00:41.382Z",
//       createdBy: {
//         _id: "6744842bacd184d57fc590f7",
//         name: "John Doe",
//         role: "doctor",
//       },
//     },
//   };

//   const [AllData, setOrderData] = useState(null);
//   const [localBarcodes, setLocalBarcodes] = useState({});
//   const [scannedBarcode, setScannedBarcode] = useState({});
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const [currentColor, setCurrentColor] = useState(""); // הוספת משתנה currentColor
//   const [error, setError] = useState(null);

//   const handleScan = (barcode) => {
//     setLocalBarcodes((prev) => ({
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

//   const handleOpenCamera = (color) => {
//     setCurrentColor(color);
//     setIsCameraOpen(true);
//   };

//   const handleBarcodeChange = (color, value) => {
//     setLocalBarcodes((prev) => ({
//       ...prev,
//       [color]: value,
//     }));
//     setScannedBarcode((prev) => ({
//       ...prev,
//       [color]: value,
//     }));
//   };

//   useEffect(() => {
//     const fetchOrderData = async () => {
//       try {
//         const response = await doApiMethod("/api/orders", "POST", {}); // בדוק את הפרמטרים כאן
//         if (!response.ok) throw new Error("Failed to fetch order data");
//         setOrderData(response.data);
//       } catch (error) {
//         console.error(error);
//         alert("Using local mock data due to server error.");
//         setOrderData(mockData);
//       }
//     };

//     fetchOrderData();
//   }, []);

//   const handleSubmit = async () => {
//     if (!AllData) return;

//     const updatedTests = AllData.order.tests.map((test) => ({
//       ...test,
//       barcode: localBarcodes[test._id] || null,
//     }));

//     try {
//       const response = await doApiMethod(
//         `/api/tests/${AllData.order.orderNumber}`,
//         "POST",
//         { tests: updatedTests }
//       );
//       if (!response.ok) throw new Error("Failed to update order");
//       setOrderData(response.data);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to update order. Check console for details.");
//     }
//   };

//   if (!AllData) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>Order Details</h1>
//       <p>Order Number: {AllData.order.orderNumber}</p>
//       <div className="WindowGalery">

//       {AllData.order.tests.map((test) => (
//         <div key={test._id} 
//           className="mb-4 p-3"
//          style={{
//             border: "3px solid #007bff",
//             borderRadius: "10px",
//             backgroundColor: "#f9f9f9",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}>


//          <div className="d-flex align-items-center">
//             <div
//                   style={{
//                     width: "50px",
//                     height: "50px",
//                     borderRadius: "50%",
//                     backgroundColor: color,
//                     marginRight: "10px",
//                   }}
//                 ></div>
//                   <p>{test.name} Test</p>

//               </div>
//               <ul>
//                 {AllData[color].map((test, index) => (
//                   <li key={index}>{test}</li>
//                 ))}
//               </ul>

            
        


//           <input
//            type="text"
//            placeholder="הכנס ברקוד"
//            className="form-control mt-3"
//             value={localBarcodes[test._id] || ""}
//             onChange={(e) => handleBarcodeChange(test.name, e.target.value)}
//           />
//           <button
//            className="btn btn-secondary mt-3"
//           onClick={() => handleOpenCamera(test.name)}>
//             Scan Barcode
//           </button>
//           {localBarcodes[test._id] && (
//                 <p className="text-success mt-2">ברקוד: {localBarcodes[test._id]}</p>
//               )}
//         </div>
//       ))}
//       {isCameraOpen && (
//          <div className="scanner-overlay">
//         <BarcodeScannerComponent
//           width={300}
//           height={200}
//           onUpdate={(err, result) => {
//             if (result) handleScan(result.text);
//           }}
//         />
//        <button
//                 className="btn btn-danger mt-3"
//                 onClick={() => setIsCameraOpen(false)}
//               >
//                 סגור סורק
//               </button>
// </div>
//       )}
//       </div>
//       <div className="text-center p-4">
//         <button className="btn btn-primary mt-4" onClick={handleSubmit}>
//           שלח נתונים
//         </button>
//       </div>



//       <style>
//   {`
//     .scanner-overlay {
//       position: fixed;
//       top: 300;
//       left: 300;
//       width:400px ;
//       height: 300px;
//       background-color: rgba(0, 0, 0, 0.8);
//        border-radius: 10px;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//       z-index: 1000;
//       padding: 15px;
//     }
//     .scanner-animation {
//       position: relative;
//       width: 300px;
//       height: 250px;
//       border: 2px solid #fff;
      
//     }
//     .scanner-animation .red-line {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 2px;
//       background-color: red;
//       animation: move-down 2s infinite;
//     }
//     @keyframes move-down {
//       0% { top: 0; }
//       100% { top: 100%; }
//     }
//     .close-scanner {
//       margin-top: 20px;
//     }
//   `}
// </style>


//     </div>
//   );
// };

// // export default Tests;



// import React, { useState, useEffect } from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";
// import { doApiMethod } from "../services/apiservice";

// const Tests = () => {
//     const mockData = {
//         message: "Order created successfully",
//         order: {
//           orderNumber: "ORD-1734944441382-7256",
//           patientDetails: {
//             name: "Jane Smith",
//             id: "123456789",
//             birthDate: "1985-07-15",
//           },
//           tests: [
//             {
//               _id: "676926b9e81f475451268e17",
//               name: "red",
//               attributes: ["Hemoglobin"],
//               barcode: null,
//             },
//             {
//               _id: "676926b9e81f475451268e18",
//               name: "brown",
//               attributes: ["Iron"],
//               barcode: null,
//             },
//             {
//               _id: "676926b9e81f475451268e19",
//               name: "green",
//               attributes: ["Vitamin D", "Tumor Markers", "CEA"],
//               barcode: null,
//             },
//           ],
//           createdAt: "2024-12-23T09:00:41.382Z",
//           createdBy: {
//             _id: "6744842bacd184d57fc590f7",
//             name: "John Doe",
//             role: "doctor",
//           },
//         },
//       };
      

//   const [AllData, setOrderData] = useState(null);
//   const [localBarcodes, setLocalBarcodes] = useState({});
//   const [scannedBarcode, setScannedBarcode] = useState({});
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const [currentColor, setCurrentColor] = useState("");

//   const handleScan = (barcode) => {
//     setLocalBarcodes((prev) => ({
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

//   const handleOpenCamera = (color) => {
//     setCurrentColor(color);
//     setIsCameraOpen(true);
//   };

//   const handleBarcodeChange = (color, value) => {
//     setLocalBarcodes((prev) => ({
//       ...prev,
//       [color]: value,
//     }));
//     setScannedBarcode((prev) => ({
//       ...prev,
//       [color]: value,
//     }));
//   };

//   useEffect(() => {
//     const fetchOrderData = async () => {
//       try {
//         const response = await doApiMethod("/api/orders", "POST", {});
//         if (!response.ok) throw new Error("Failed to fetch order data");
//         setOrderData(response.data);
//       } catch (error) {
//         console.error(error);
//         alert("Using local mock data due to server error.");
//         setOrderData(mockData);
//       }
//     };

//     fetchOrderData();
//   }, []);

//   const handleSubmit = async () => {
//     if (!AllData) return;

//     const updatedTests = AllData.order.tests.map((test) => ({
//       ...test,
//       barcode: localBarcodes[test._id] || null,
//     }));

//     try {
//       const response = await doApiMethod(
//         `/api/tests/${AllData.order.orderNumber}`,
//         "POST",
//         { tests: updatedTests }
//       );
//       if (!response.ok) throw new Error("Failed to update order");
//       setOrderData(response.data);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to update order. Check console for details.");
//     }
//   };

//   if (!AllData) return <p>Loading...</p>;

//   return (
//     <div className="container-fluid">
//       <div className="container ">

//         <div className="containerGulery">
//              <div className="d-flex justify-content-center  p-5">  
//             <div className=" styled-frame p-5 text-center">
//              <h1 className="fw-bold">Order Details</h1>
//     {AllData && AllData.order && AllData.order.patientDetails ? (
//       <>
//         <p>
//           <strong>Patient Name:</strong> {AllData.order.patientDetails.name}
//         </p>
//         <p>
//           <strong>ID:</strong> {AllData.order.patientDetails.id}
//         </p>
//         <p>
//           <strong>Birth Date:</strong>{" "}
//           {new Date(AllData.order.patientDetails.birthDate).toLocaleDateString()}
//         </p>
//         <p>
//           <strong>Order Number:</strong> {AllData.order.orderNumber}
//         </p>
//       </>
//     ) : (
//         <div className="styled-frame">
//       <p>Loading patient details...</p>
//       </div>
//     )}
//     </div>
//       </div>
//       <div className="d-flex justify-content-center  p-5">
//       <div className="WindowGalery">
//         {AllData.order.tests.map((test) => (
//           <div
//             key={test._id}
//             className="mb-4 p-3"
//             style={{
//               border: `3px solid ${test.name}`,
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
//                   backgroundColor: test.name,
//                   marginRight: "10px",
//                 }}
//               ></div>
//               <h3>{test.name} Test</h3>
//             </div>
//             <ul>
//               {test.attributes.map((attribute, index) => (
//                 <li key={index}>{attribute}</li>
//               ))}
//             </ul>
//             <div className="d-flex align-items-center mt-3">
//             <input
//               type="text"
//               placeholder="Enter barcode"
//               className="form-control mt-3"
//               value={localBarcodes[test._id] || ""}
//               onChange={(e) => handleBarcodeChange(test.name, e.target.value)}
//             />
//             <button
//               className="btn btn-secondary mt-3"
//               onClick={() => handleOpenCamera(test.name)}
//             >
//               Scan Barcode
//             </button>
//             </div>
//             {localBarcodes[test._id] && (
//               <p className="text-success mt-2">Barcode: {localBarcodes[test._id]}</p>
//             )}
//           </div>
//         ))}
//         {isCameraOpen && (
//           <div className="scanner-overlay">
//                  <div className="scanner-animation">
//             <BarcodeScannerComponent
//               width={300}
//               height={200}
//               onUpdate={(err, result) => {
//                 if (result) handleScan(result.text);
//               }}
//             />
//              <div className="red-line " ></div>
//              </div>
//             <button
//                 className="btn btn-danger mt-2 close-scanner"
//               onClick={() => setIsCameraOpen(false)}
//             >
//               Close Scanner
//             </button>
//           </div>
//         )}
//       </div>
//       </div>
//       <div className="text-center p-4">
//         <button className="btn btn-primary mt-4" onClick={handleSubmit}>
//           Submit Data
//         </button>
//       </div>

//       <style>
//         {`
//           .scanner-overlay {
//             position: fixed;
//             top: 300;
//             left: 300;
//             width: 400px;
//             height: 300px;
//             background-color: rgba(0, 0, 0, 0.8);
//             border-radius: 10px;
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
//         `}
//       </style>
//     </div>
//     </div>
//     </div>
  
//   );
// };

// export default Tests;



import React, { useState, useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { doApiMethod } from "../services/apiservice";

const Tests = () => {
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

export default Tests;










