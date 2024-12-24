import React from 'react'
import Header from '../components/Header';
// import Footer from '../components/Footer';



import { useNavigate } from 'react-router-dom'


  


const From = () => {

  const nav = useNavigate();
  const sub = (e) => {
      e.preventDefault();
      alert("הטופס נשלח בהצלחה!");
      nav("/");
  }

  
  return (




    <div>
<Header/>



<main dir="rtl" className="justify-content-center fontStyle">
      <br/>
      <div className="container w-75 ">
        <h2>צור קשר</h2>

        <form onSubmit={sub}>
            <div className="form-row ">
                <div className="form-group col-md-6">
                    <label for="fullName">שם מלא:</label>
                    <input type="text" className="form-control" id="fullName" placeholder="הזן את שמך המלא" required/>
                </div>
                <br/>
                <div className="form-group col-md-6">
                    <label for="email">כתובת אימייל:</label>
                    <input type="email" className="form-control" id="email" placeholder="הזן כתובת אימייל" required/>
                </div>
                <br/>
            </div>
            <div className="form-group">
                <label for="message">הודעה:</label>
                <textarea className="form-control" id="message" rows="5" placeholder="הזן את ההודעה שלך" required></textarea>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">שלח הודעה</button>
        </form>
        <br/>

    </div>

    </main>



{/* <Footer/> */}
    </div>
  )
}

export default From

.header{
    position: sticky;
    top: 0;
    z-index: 9;
    height: 25px;
  }
  .arrButtons{
    position: sticky;
    top: 0;
    z-index: 9;
    height: 150px;
    background-color: rgba(19, 121, 152, 0.7);
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */
    /* background: linear-gradient(90deg, #ff7f50, #1e90ff); */
    background: linear-gradient(45deg, #ceedf6, #537fd7, #43e8c4);

    font-family: Arial, sans-serif;
  }
  
  .container {
    width: 80%; /* הגבלת רוחב התוכן */
    max-width: 1200px; /* רוחב מקסימלי */
    text-align: center; /* מרכז טקסט */
    padding: 20px;
    background: #66a8c2; /* צבע רקע לבן */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* הצללה */
    border-radius: 8px; /* פינות מעוגלות */
  }



   .containerLogin{
  
   text-align: center; 
   
   

 } 
  
   /* .formLogin{
    text-align: center;
   min-width: 900px; 
    margin: 0;
    justify-content: center;
    align-items: center;
   
  }  */

  .containerCategory {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* רווח בין החלונות */
  }
  
  .windowCategory {
    flex: 0 0 calc(50% - 10px); /* 50% מהרוחב הכולל, מינוס הרווח */
    box-sizing: border-box; /* חשוב לכלול ריווח פנימי וחיצוני בחישוב */
    border: 1px solid #ccc; /* גבול מסביב לחלון */
    padding: 10px; /* ריווח פנימי */
    text-align: center; /* מרכז טקסט */
  }
  







.userot{
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #4A5568;
  background-color: #F7FAFC;
}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.link{
    text-decoration: none;
    font-weight: bold;

    transition: 1000ms;
    color: brown;
    text-decoration: none;
    padding: 10px;
}


.link:hover{
    transform: scale(1.2);
    color: green;
}
.active{
    color: white; 
    transform: none !important;
}

.pstayle{
    text-align: justify;
    columns: 3;
}

.buttonWithMargin {
    margin-right: 5px;
    margin-bottom: 10px;
  }
.h2Froit{
    width: 400px;
    border-radius: 20px;
    text-align: center;
    margin: 0;
}
.imgFroit{
    width: 400px;
   
}
.text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
     margin: 0;
    text-align: center;
    width: 200px;

  } 

  .image-container {
    position: relative;
    padding: 40px;
  }
  .imgF{
    width: 800px;
    height: 400px;
   
}
  


.image-containers {
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
}


.left img,
.right img {
    width: 80%; 
    height: auto;
    display: block;
    margin: 0 auto;
    transition: filter 0.8s ease-out;
}

.left img:hover,
.right img:hover {
    filter: blur(0); 
}

.image-containers p {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    width: 80%; /* גודל יחסי של הטקסט לתמונה */
    padding: 10px;
    margin: 0;
    opacity: 0; /* הטקסט מתחיל בכדי שלא יהיה נראה בהתחלה */
    transition: opacity 0.8s ease-out;
}

.left:hover p,
.right:hover p {
    opacity: 1; /* הטקסט יתמלא כאשר העכבר מועבר מעל התמונה */
}

.left {
    animation: slideInLeft 1s ease-out; /* אנימציה כניסה מימין */
}

.right {
    animation: slideInRight 1s ease-out; /* אנימציה כניסה משמאל */
}

@keyframes slideInLeft {
    from {
        transform: translateX(100%);
        filter: blur(8px); /* התמונה מתחילה עם אפקט מטושטש */
    }
    to {
        transform: translateX(0);
        filter: blur(0); /* התמונה מתפשטת לבהירות כאשר האנימציה מסתיימת */
    }
}

@keyframes slideInRight {
    from {
        transform: translateX(-100%);
        filter: blur(8px); /* התמונה מתחילה עם אפקט מטושטש */
    }
    to {
        transform: translateX(0);
        filter: blur(0); /* התמונה מתפשטת לבהירות כאשר האנימציה מסתיימת */
    }

   
} 
.font-montserrat {
font-family: 'Montserrat', sans-serif;
text-align: justify;

}
.imgFroit{
    width: 250px;
    height: 300px;
   
}
.imgCrosel{
height: 550px;
 border-radius: 20px;
 
}

.fw-semibold{
    border-radius: 60px;
    text-align: center;
    
  }
  /* .products {
    display: flex;
    flex-wrap: wrap;
  } */
  
  .prode {
    flex: 1 0 25%;
  }
  /* שות  */
  .fw-semibold{
    border-radius: 60px;
    text-align: center;
    
  }

    .imgi{

      width:100%;
      height: 200px;
      border-radius: 60px;
      justify-content: center;
      text-align: center;
      margin:0;
      padding: 10px;
    }

    .accordion-body{
background-color:green;
color: brown;
    }
  .accordion-button{
      background-color:rgb(32, 222, 194);
      color: brown;
    }




    iframe{
border-radius: 15px;
}
.cit{
border-radius: 60px; 
}
.cit:hover{
color: brown;
transform:rotate(5deg)
}  
.divacordion{
    min-height: 950px;
}






.yout{
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-color: antiquewhite;
position: sticky;
top: 0;
}

iframe{
border-radius: 15px;
}
iframe:hover{
border-radius: 60px; 
}
.h2:hover{
background-color: brown;
transform:rotate(5deg)
}  

.h2Gallery{
      color: rgb(25, 66, 25);
      font-size: 20px;
}
.h2nemeGallery{
    font-size: 24px;
   

}

.whatsapp{
color: darkgreen;
font-size:48px;

}

.instagram{
color:brown;
font-size:48px;
}
.youtube{
color: darkred;
font-size:48px;
}
.facebook{
color: darkblue;
font-size:48px;
}

.ButtonB{
  padding: 12px;
  outline: none; 
  
      }

    .active2{
        background-color:gray;
    }
    .arrow{
        font-size:42px;
        color: darkblue;
    }


.image-containerShaike {
        position: relative;
        width: 500px;
        height: 350px;
      }
      
.text-overlayShaike {
        /* position: absolute;
        top: 178%;
        left: 38%; */
        transform: translate(-35%, -1000%);
        color:black;
        text-align: center;
      }
      .imgFroitShaike{
        width: 400px;
       
       
    }      
   .Auth-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
   
  
  .Auth-form {
    width: 420px;
    box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
    padding-top: 30px;
    padding-bottom: 20px;
    border-radius: 8px;
    background-color: white;
  }
  
  .Auth-form-content {
    padding-left: 12%;
    padding-right: 12%;
  }
  
  .Auth-form-title {
    text-align: center;
    margin-bottom: 1em;
    font-size: 24px;
    color: rgb(34, 34, 34);
    font-weight: 800;
  }
    
  label {
    font-size: 14px;
    font-weight: 600;
    color: rgb(34, 34, 34);
  }



  .title {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5em;
    font-weight: bold;
    color: #2E4A62; /* צבע כחול-רפואי */
    text-align: center;
    border-bottom: 2px solid #5D9CEC; /* קו תחתון בצבע רך */
    padding-bottom: 10px;
    width: 100%;
  }
  
  .titleGulery {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.5em;
    font-weight: bold;
    color: #2E4A62;
    text-align: center;
    border-bottom: 2px solid #5D9CEC; 
    padding-bottom: 10px;
  }


  .containerSummaryPage{

    width: 80%; /* הגבלת רוחב התוכן */
    max-width: 1000px; /* רוחב מקסימלי */
    text-align: center; /* מרכז טקסט */
    padding: 25px;
    background: #fff; /* צבע רקע לבן */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* הצללה */
    border-radius: 8px; /* פינות מעוגלות */

  }

  
  .Haeder{

    width: 80%; /* הגבלת רוחב התוכן */
    max-width: 1000px; /* רוחב מקסימלי */
    text-align: center; /* מרכז טקסט */
    padding: 25px;
    background: #fff; /* צבע רקע לבן */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* הצללה */
    border-radius: 8px; /* פינות מעוגלות */
    position: fixed; /* קיבוע למיקום */
    top: 0; /* צמוד לחלק העליון */
    left: 50%; /* מרכז את האלמנט אופקית */
    transform: translateX(-50%); /* מפצה על מרכז היישור */
    z-index: 1000; /* שכבתיות גבוהה יותר */
  }





  
  .container_Patient_admission {
    width: 100%;
    height: 80%;
  }
  
   */
  









  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
  
  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .container-fluid {
    padding: 0;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 10px 0;
  }
  
  button {
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: #fff;
  }
  
  .btn-primary:hover {
    background-color: #0069d9;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: #fff;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268;
  }
  
  .btn-success {
    background-color: #28a745;
    color: #fff;
  }
  
  .btn-success:hover {
    background-color: #20983c;
  }



   /* גוף הדף */
   body {
    margin: 0;
    font-family: Arial, sans-serif;
  }

  /* עיצוב הכותרת */
  .title1 {
    border: 2px solid black; /* מסגרת שחורה */
    text-align: center; /* יישור טקסט לאמצע */
    padding: 20px; /* רווח פנימי */
    font-size: 2rem; /* גודל הטקסט */
    box-sizing: border-box; /* כולל מסגרת ורווחים בחישוב הרוחב */
    width: 100%; /* כל רוחב המסך */
  }

  /* עיצוב הטקסט */
  .text {
    margin: 20px; /* רווח מסביב לטקסט */
    font-size: 1rem; /* גודל טקסט קטן יותר */
    line-height: 1.5; /* מרווח בין השורות */
  }
















  /* כללי */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
}

.container-fluid {
  padding: 0;
}

.container {
  width: 80%;
  margin: 0 auto;
}

/* העדר */
.header {
  width: 100%;
  background-color: #3c5f8f;
  color: white;
  padding: 15px 20px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* טפסי התחברות */
.Auth-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.Auth-form {
  background: linear-gradient(135deg, #6b9dc7, #3c5f8f);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

.Auth-form h3 {
  color: white;
  text-align: center;
  margin-bottom: 20px;
}

.Auth-form .form-control {
  border: 2px solid #3c5f8f;
  border-radius: 5px;
  transition: 0.3s;
}

.Auth-form .form-control:focus {
  border-color: #6b9dc7;
  box-shadow: 0 0 5px rgba(107, 157, 199, 0.5);
}

.Auth-form button {
  background-color: #6b9dc7;
  border: none;
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  transition: 0.3s;
}

.Auth-form button:hover {
  background-color: #3c5f8f;
}

/* כפתורים */
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

/* תוכן מרכזי */
.main-content {
  padding: 40px 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

/* גלריה */
.category-container {
  margin: 20px auto;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.category-container:hover {
  transform: scale(1.02);
}

/* סיכום */
.summary-container {
  background-color: #f9f9f9;
  border: 2px solid #3c5f8f;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
}
















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

//     const orderDetails = {
//       orderNumber,
//       patientID: "123456", // יש להחליף בתעודת זהות אמיתית של מטופל
//       doctorName: "אליהו", // יש להחליף בשם רופא אמיתי
//       date: new Date().toLocaleDateString(),
//       time: new Date().toLocaleTimeString(),
//     };

//     try {
//       // שליחה ל-DB עבור הבדיקות
//       // await axios.post("http://localhost:3001/api/tests", {
//       //   samples: formattedSamples,
//       // });
//       const response = await doApiMethod("/api/test", "POST", formattedSamples);
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
//         <h2 className="text-center text-info">מספר הזמנה: {orderNumber}</h2>
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










// // פונקציה לשליחת פרטי ההזמנה
// async function sendOrderDetails(orderDetails) {
//   try {
//     const response = await doApiMethod("/api/orders", "POST", orderDetails);

//     if (response.ok) {
//       console.log("פרטי ההזמנה נשלחו בהצלחה");
//     } else {
//       console.error("שגיאה בנתוני ההזמנה:", response.statusText);
//       setError("שגיאה בשליחת הנתונים.1");
//     }
//   } catch (error) {
//     console.error("Error sending order details:", error);
//     setError("שגיאה בשליחת הנתונים.1");
//   }
// }

// // פונקציה לשליחת מספרי הברקוד
// async function sendBarcodes(orderNumber, formattedSamples, orderDetails, navigate) {
//   try {
//     const response = await doApiMethod(`/api/tests/${orderNumber}/tube`, "POST", formattedSamples);

//     if (response.ok) {
//       console.log("הברקודים נשלחו בהצלחה");
//       alert("הנתונים נשלחו בהצלחה!");
//       navigate("/SentToLab", { state: { orderDetails, formattedSamples } });
//     } else {
//       console.error("שגיאה בשליחת הברקודים:", response.statusText);
//       setError("שגיאה בשליחת הנתונים.2");
//     }
//   } catch (error) {
//     console.error("Error sending barcodes:", error);
//     setError("שגיאה בשליחת הנתונים.2");

//     // במקרה של שגיאה, ייתכן שתרצה להחליט אם להמשיך או לא
//     navigate("/SentToLab", { state: { orderDetails, formattedSamples } });
//   }
// }

// // קריאה לפונקציות אלו
// async function handleSubmit(orderDetails, orderNumber, formattedSamples, navigate) {
//   await sendOrderDetails(orderDetails);
//   await sendBarcodes(orderNumber, formattedSamples, orderDetails, navigate);
// }















// // // שליחת נתונים כללי שם ןמספר הזמנה ושם רופא ועוד
// // try {
// //   const response = await doApiMethod("/api/orders", "POST", orderDetails);
      
// //     console.log("פרטי ההזמנה נשלחו בהצלחה");



// // } catch (error) {
// //   console.error("Error sending data:", error);
// //   setError("שגיאה בשליחת הנתונים.1");
  
// // }


// // // שליחת מספרי ברקוד לבדיקות שנבחרו בהתאם למס הזמנה 
// // try {
  
// //   const response = await doApiMethod(`/api/tests/${orderNumber}/tube`, "POST", formattedSamples);
// //   // מעבר לדף הסיכום
// //   navigate("/SentToLab", { state: {orderDetails ,formattedSamples } });
// //   alert("הנתונים נשלחו בהצלחה!");
  
// // } catch (error) {
// //   console.error("Error sending data:", error);
// //   setError("שגיאה בשליחת הנתונים.2");



// //   navigate("/SentToLab", { state: {orderDetails ,formattedSamples } });
 
  
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
