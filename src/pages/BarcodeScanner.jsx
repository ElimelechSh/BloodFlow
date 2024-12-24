// import React from "react";
// import BarcodeScannerComponent from "react-qr-barcode-scanner";


// const BarcodeScanner = ({ onScan, onClose }) => {






//   return (
//     <div className="scanner-overlay">
//       <BarcodeScannerComponent
//         onUpdate={(err, result) => {
//           if (result) {
//             onScan(result.text); // שולח את הברקוד להורה
//           }
//         }}
//       />
//       <div className="scanner-animation">

      
//         <div className="red-line"></div>
//       </div>
//       <button className="btn btn-danger close-scanner" onClick={onClose}>
//         סגור סורק
//       </button>








//       <style>
//         {`
//           .scanner-overlay {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background-color: rgba(0, 0, 0, 0.8);
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//             align-items: center;
//             z-index: 1000;
//           }
//           .scanner-animation {
//             position: relative;
//             width: 300px;
//             height: 200px;
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
//   );
// };

// export default BarcodeScanner;



import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const BarcodeScanner = ({ onScan, onClose }) => {
  return (
    <div className="scanner-overlay">
      <BarcodeScannerComponent
        width={300}
        height={200}
        onUpdate={(err, result) => {
          if (result) {
            onScan(result.text); // שולח את הברקוד להורה
          }
        }}
      />
      <div className="scanner-animation">
        <div className="red-line"></div>
      </div>
      <button className="btn btn-danger close-scanner" onClick={onClose}>
        סגור סורק
      </button>

      <style>
        {`
          .scanner-overlay {
            position: fixed;
            top: 20%;
            left: 50%;
            transform: translate(-50%, -20%);
            width: 320px;
            height: 280px;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            border-radius: 10px;
          }
          .scanner-animation {
            position: relative;
            width: 300px;
            height: 200px;
            border: 2px solid #fff;
            margin-bottom: 10px;
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
  );
};

const App = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [barcode, setBarcode] = useState("");

  const handleScan = (scannedBarcode) => {
    setBarcode(scannedBarcode); // שמור את הברקוד
    setShowScanner(false); // סגור את המצלמה
    playBeep(); // השמע צליל
  };

  const playBeep = () => {
    const beep = new Audio(
      "https://www.soundjay.com/button/beep-07.wav"
    ); // לינק לצליל ביפ
    beep.play();
  };

  return (
    <div className="container">
      <h1>סריקת ברקוד</h1>
      <div className="form-group">
        <label>ברקוד:</label>
        <input
          type="text"
          value={barcode}
          readOnly
          className="form-control"
        />
        <button
          className="btn btn-primary mt-2"
          onClick={() => setShowScanner(true)}
        >
          פתח סורק
        </button>
      </div>

      {showScanner && (
        <BarcodeScanner
          onScan={handleScan}
          onClose={() => setShowScanner(false)}
        />
      )}
    </div>
  );
};

export default App;

