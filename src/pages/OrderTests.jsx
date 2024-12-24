import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderTests = () => {
  const [orderNumber, setOrderNumber] = useState("ORD-1734371563393-9878"); // ניתן לשנות להזנה דינמית
  const [orderData, setOrderData] = useState(null);
  const [barcodes, setBarcodes] = useState({}); // ברקודים להזנה ידנית
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // שליפת המידע מהשרת
  useEffect(() => {
    const fetchOrderData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`{{url}}/api/orders/${orderNumber}`);
        setOrderData(response.data);
        // יצירת מבנה ברקודים התחלתי ריק
        const initialBarcodes = {};
        response.data.order.tests.forEach(test => {
          initialBarcodes[test._id] = "";
        });
        setBarcodes(initialBarcodes);
      } catch (err) {
        setError("Failed to fetch order data");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderData();
  }, [orderNumber]);

  // עדכון ברקוד בהזנה
  const handleBarcodeChange = (testId, value) => {
    setBarcodes({
      ...barcodes,
      [testId]: value,
    });
  };

  // שליחת הנתונים לשרת
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const payload = orderData.order.tests.map(test => ({
        testId: test._id,
        barcode: barcodes[test._id],
      }));

      await axios.patch(`{{url}}/api/tests/674497addf3f33e3ea16fba5/tube`, payload);
      alert("Barcodes updated successfully!");
    } catch (err) {
      setError("Failed to update barcodes");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Order Tests</h1>
      {orderData && (
        <div>
          <h2>Order Number: {orderData.order.orderNumber}</h2>
          <p>Created By: {orderData.order.createdBy.name} ({orderData.order.createdBy.role})</p>
          <p>Created At: {new Date(orderData.order.createdAt).toLocaleString()}</p>

          <div>
            <h3>Tests</h3>
            {orderData.order.tests.map(test => (
              <div key={test._id} style={{ marginBottom: "20px" }}>
                <h4>{test.name}</h4>
                <ul>
                  {test.attributes.map((attr, index) => (
                    <li key={index}>{attr}</li>
                  ))}
                </ul>
                <label>
                  Barcode:
                  <input
                    type="text"
                    value={barcodes[test._id] || ""}
                    onChange={e => handleBarcodeChange(test._id, e.target.value)}
                  />
                </label>
              </div>
            ))}
          </div>
          <button onClick={handleSubmit}>Submit Barcodes</button>
        </div>
      )}
    </div>
  );
};

export default OrderTests;
