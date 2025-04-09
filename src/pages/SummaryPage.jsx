import React, { useState, useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { doApiMethod } from "../services/apiservice";
import { useLocation, useNavigate } from "react-router-dom";

const SummaryPage = () => {
  const [AllData, setOrderData] = useState(null);
  const [localBarcodes, setLocalBarcodes] = useState({});
  const [scannedBarcode, setScannedBarcode] = useState({});
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // לשימוש במידע מהדף הקודם
  const { orderNumber } = location.state || {}; // קבלת מספר ההזמנה מה-state
console.log("orderNumber :",orderNumber)

  console.log("updatedTest11s@ :", AllData)
  const handleScan = (tubeId) => {
    setLocalBarcodes((prev) => ({
      ...prev,
      [currentColor]: tubeId,
    }));
    setScannedBarcode((prev) => ({
      ...prev,
      [currentColor]: tubeId,
    }));
    setIsCameraOpen(false);
    playBeep();
  };

  const playBeep = () => {
    // const beep = new Audio("https://www.soundjay.com/button/beep-07.wav");
    const beep = new Audio('/sounds/beep-07a.mp3'); // נתיב לקובץ האודיו שלך
  
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
        const response = await doApiMethod(`/api/orders/${orderNumber}`, "GET");
        console.log("response QQQ: ",response)
        // if (!response.ok) throw new Error("Failed to fetch order data");
        setOrderData(response.data);

        
      } catch (error) {
        console.error(error);
   
      }
     
      if(response){}



    };

    fetchOrderData();
  }, []);


  const handleSubmit = async () => {
    if (!AllData) return;

    const updatedTests = AllData.tests.map((test) => ({
      ...test,
      tubeId: localBarcodes[test.id] || null,
    }));
    
    console.log("updatedTests : ",updatedTests) ;
    const updatedOrder = {
      ...AllData.orderNumber,
      tests: AllData.tests.map((test) => ({
        ...test,
        tubeId: localBarcodes[test.id] || null,
      })),
    };

   
      const testsData = updatedTests
      const AllDataEntupdatedOrder = [{ id: AllData.nationalId , data: updatedOrder }];
      console.log("AllData.nationalId :",AllData.nationalId)
      console.log("AllDataEntupdatedOrder ::",AllDataEntupdatedOrder)
   try {
  
      for (const test of testsData) {
          try {
              const response = await doApiMethod(`/api/tests/${test.id}/${test.tubeId}`, "PATCH");

              console.log(`Barcode updated for test ID ${test.id}:`, response.data);
          } catch (error) {
              console.error(`Failed to update barcode for test ID ${test.id}:`, error);
          }
      }
      
      navigate("/SentToLab", { state:  AllDataEntupdatedOrder  });

    } catch (error) {
      alert(error)
    }
  
  };

  // if (!AllData) return <div className=" text-center p-6 styled-frame m-0"> <p>Loading...</p></div>;
  if (!AllData) return (
    <div className="flex justify-center items-center h-screen">
      <div className="spinner w-16 h-16 border-8"></div>
    </div>
  );
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="containerGulery">
          <div className="d-flex justify-content-center p-5">
            <div className="styled-frame p-5 text-center">
              <h1 className="fw-bold">Order Details</h1>
              {AllData && AllData.orderNumber  ? (
                <>
                  <p>
                    <strong>ID:</strong> {AllData.nationalId}                
                  </p>
                  <p>
                    <strong>Order Number:</strong>{" "}
                    {AllData.orderNumber}
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
              {AllData.tests.map((test) => (
                <div
                  key={test.id}
                  className="mb-4 p-3 min-w-[300px]"
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
                    <h3 className="Assistant fs-3 p-3">{test.name} Test { }</h3>
                  </div>
                  <ul>
                    {test.attributes.map((attribute, index) => (
                      <li key={index}>{attribute}</li>
                    ))}
                  </ul>
                  <div className="d-flex align-items-center mt-3">
    
     
                  {test.tubeId ? (
                    <div className=" mb-4 text-center">

                        <h3 className="text-primary"> ברקוד: {test.tubeId}</h3>
                    </div>
                 ) : ( 
<>
                  <input
                  type="text"
                  placeholder="Enter barcode"
                  className="form-control mt-3"
                  value={localBarcodes[test.id] || ""}
                  onChange={(e) =>
                    handleBarcodeChange(test.id, e.target.value)
                  }
                />
                    <button
                    className="btn btn-secondary mt-3"
                    onClick={() => handleOpenCamera(test.id)}
                  >
                    Scan Barcode
                  </button>
                  </>

                 )} 

                  </div>
                  {localBarcodes[test._id] && (
                    <p className="text-success mt-2">
                      Barcode: {localBarcodes[test.id]}
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
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
