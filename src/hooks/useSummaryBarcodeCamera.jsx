import React from 'react'

const useSummaryBarcodeCamera = () => {
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


  return {  handleBarcodeChange, handleOpenCamera , handleScan ,setIsCameraOpen }
}

export default useSummaryBarcodeCamera