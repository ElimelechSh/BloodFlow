import React, { useState, useEffect } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { doApiMethod } from "../services/apiservice";
import { useLocation, useNavigate } from "react-router-dom";
import * as SUMMARY_STUB from "../stubs/SUMMARY_STUBS.json"

const SummaryPage = () => {
  const [AllData, setOrderData] = useState(null);
  const [localBarcodes, setLocalBarcodes] = useState({});
  const [scannedBarcode, setScannedBarcode] = useState({});
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // לשימוש במידע מהדף הקודם
  const { orderNumber } = location.state || {}; // קבלת מספר ההזמנה מה-state


  const mockData = SUMMARY_STUB
  console.log("updatedTest11s@ :", AllData)
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
        const response = await doApiMethod("/api/orders", "POST", {orderNumber});
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

    // const updatedTests = AllData.order.tests.map((test) => ({
    //   ...test,
    //   barcode: localBarcodes[test._id] || null,
    // }));
    
    const updatedOrder = {
      ...AllData.order,
      tests: AllData.order.tests.map((test) => ({
        ...test,
        barcode: localBarcodes[test._id] || null,
      })),
    };


    console.log("Updated Tests AAA:", updatedOrder);


    try {
      const response = await doApiMethod(`/api/tests/${AllData.order.orderNumber}`,"POST",
        { tests: updatedOrder.tests }
      );
      if (!response.ok) throw new Error("Failed to update order");
      // setOrderData(response.data);
    // מעבר לדף הבא 
      navigate("/SentToLab", { state:  updatedTests  });
      // alert("הנתונים נשלחו בהצלחה!");
    } catch (error) {
      console.error("error::",error);
      console.log("updatedTests :", AllData)
      navigate("/SentToLab", { state: { order: updatedOrder } });
      alert("Failed to update order. Check console for details.");
    }
  };

  if (!AllData) return <div className=" text-center p-6 styled-frame m-0"> <p>Loading...</p></div>;

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
                    <h3 className="Assistant fs-3 p-3">{test.name} Test { }</h3>
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
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;



