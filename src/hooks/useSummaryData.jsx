import React, { useEffect, useState } from 'react'
import { doApiMethod } from '../services/apiservice';
import * as SUMMARY_STUB from "../stubs/SUMMARY_STUBS.json"
import { useNavigate } from 'react-router-dom';

const useSummaryData = () => {
    const [AllData, setOrderData] = useState(null);
    const navigate = useNavigate();
    const mockData = SUMMARY_STUB
    const [localBarcodes, setLocalBarcodes] = useState({});
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [currentColor, setCurrentColor] = useState("");

    
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
  const handleOpenCamera = (id) => {
    setCurrentColor(id);
    setIsCameraOpen(true);
  };

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
          navigate("/SentToLab", { state: { updatedTests } });
          alert("הנתונים נשלחו בהצלחה!");
        } catch (error) {
          console.error("error::",error);
          navigate("/SentToLab", { state: { AllData } });
          alert("Failed to update order. Check console for details.");
        }
      };

      return { handleSubmit, AllData ,handleBarcodeChange, handleOpenCamera , handleScan ,setIsCameraOpen  }
}

export default useSummaryData