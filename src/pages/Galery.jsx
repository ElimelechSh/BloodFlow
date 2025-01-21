import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BloodTestsData from "../BloodTests.json"; // קובץ JSON של בדיקות דם
import { doApiMethod } from "../services/apiservice"; // פונקציה לשימוש ב-API
import Patient_admission from "./Patient_admission";
import { useDataContext } from "./DataProvider";

const Galery = () => {
  const categories = BloodTestsData.categories; // נתוני קטגוריות מה-JSON
  const [selectedTests, setSelectedTests] = useState([]); // מעקב אחר הבדיקות שנבחרו
  const navigate = useNavigate(); // לשימוש בניווט לעמודי סיכום
  const   { dataFor4 }  = useDataContext();
  const [id, setId] = useState('');
  const [patientData, setPatientData] = useState(null); // סטייט שמאוחסן באבא
  
  
  // שינוי מצב הבדיקה (נבחרה או לא)
  const toggleTestSelection = (testName) => {
    setSelectedTests((prevSelected) =>
      prevSelected.includes(testName)
        ? prevSelected.filter((name) => name !== testName)
        : [...prevSelected, testName]
    );
  };

  // פונקציה לקיבוץ בדיקות לפי צבעים
  const groupByColor = (data) => {
    const grouped = {};
    for (const category in data) {
      data[category].forEach((test) => {
        if (!grouped[test.color]) {
          grouped[test.color] = [];
        }
        grouped[test.color].push(test.name);
      });
    }
    return grouped;
  };

  // רינדור כפתורי קטגוריות (לניווט לקטגוריה)
  const renderCategoryButtons = () => {
    return categories.map((category, index) => (
      <button
        key={index}
        className="btn btn-primary m-2"
        onClick={() =>
          document
            .getElementById(category.category)
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        {category.category}
      </button>
    ));
  };

  // רינדור בדיקות בתוך קטגוריה
  const renderTests = (tests) => {
    return tests.map((test) => (
      <div
        key={test.name}
        onClick={() => toggleTestSelection(test.name)}
        className="testbuttonG"
        style={{
          backgroundColor: selectedTests.includes(test.name)  ? "#ccc" : "#f9f9f9",
          color: selectedTests.includes(test.name) ? "#fff" : "#000",
        }}
      >
        {test.name}
      </div>
    ));
  };

  // רינדור כל הקטגוריות
  const renderCategories = () => {
    return categories.map((category) => (
      <div
        key={category.category}
        id={category.category}
        className="Categories category-container p-3 mb-4"
        
      >
        <h3 className="text-center bg-light p-2 rounded">{category.category}</h3>
        <div>{renderTests(category.tests)}</div>
      </div>
    ));
  };

  // עיצוב הנתונים לשליחה לש

  const formatDataForServer = (data, userId) => ({
    tests: Object.keys(data).flatMap((color) =>
      data[color].map((test) => ({
        name: test, // שדה שם הבדיקה
        attributes: [color], // צבע הבדיקה
      }))
    ),
    user: { _id: userId }, // משתמש לדוגמה
  });
  
  const handleFinish = async () => {
    const results = {};
  
    // קיבוץ הבדיקות שנבחרו לפי קטגוריות
    categories.forEach((category) => {
      category.tests.forEach((test) => {
        if (selectedTests.includes(test.name)) {
          if (!results[category.category]) {
            results[category.category] = [];
          }
          results[category.category].push({ name: test.name, color: test.color });
        }
      });
    });
  
    const sortedByColor = groupByColor(results); // קיבוץ לפי צבעים
    // יצירת מבנה הנתונים בפורמט הנדרש לשרת
    const formattedTests = Object.entries(sortedByColor).map(([color, tests]) => ({
      name: `${color} Tests`, // שם כללי עבור קבוצת צבע
      attributes: tests, // רשימת הבדיקות באותו צבע
    }));
  
    const dataToSend = {
      tests: formattedTests,
      patient: id, // TODO: החלף ב-ID של המטופל האמיתי
    };
    try {
      const response = await doApiMethod("/api/orders", "POST", dataToSend);
      const orderNumber = response.data.order.orderNumber; // קיבלתי מספר הזמנה
      console.log("orderNumber",orderNumber)
            navigate("/summary", { state: { orderNumber } });
    } catch (error) {
      console.error("Error sending data to the server:", error);
      if (error.response) {
        console.error("Server Response:", error.response.data);
      }
      alert("שגיאה בשליחת הנתונים לשרת.");
    }
  };

  return (
   <>
    <div className="container-fluid">
    <Patient_admission setPatientData={setPatientData} id = {id} setId={setId} />
      <div className="container">
        <div className="d-flex justify-content-center flex-wrap p-3 styled-frame classarrButtons">
          {renderCategoryButtons()}
        </div>
        <div className="d-flex justify-content-center containerGulery">
          <div className="WindowGalery mt-4 p-3">{renderCategories()}</div>
        </div>
        <div className="text-center mt-4 p-4 styled-frame">
          <button className="btn btn-success" onClick={handleFinish}>
            סיום
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Galery;