


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // ייבוא axios
// import BloodTestsData from "../BloodTests.json";

// import ComponentB from "./ComponentB";

// const Galery = () => {
//   const categories = BloodTestsData.categories; // Access the categories
//   const [selectedTests, setSelectedTests] = useState([]); // Keep track of selected tests
//   const [patientId] = useState("123456"); // דוגמה של תעודת זהות - ניתן לעדכן במציאות
//   const navigate = useNavigate(); // Hook for navigation

//   const toggleTestSelection = (testName) => {
//     setSelectedTests((prevSelected) =>
//       prevSelected.includes(testName)
//         ? prevSelected.filter((name) => name !== testName)
//         : [...prevSelected, testName]
//     );
//   };

//   const renderTests = (tests) => {
//     return tests.map((test) => (
//       <div
//         key={test.name}
//         onClick={() => toggleTestSelection(test.name)}
//         style={{
//           cursor: "pointer",
//           backgroundColor: selectedTests.includes(test.name)
//             ? test.color
//             : "#f9f9f9",
//           border: `2px solid ${test.color}`,
//           margin: "5px 0",
//           padding: "10px",
//           color: selectedTests.includes(test.name) ? "#fff" : "#000",
//           borderRadius: "5px",
//           transition: "all 0.3s ease",
//         }}
//       >
//         {test.name}
//       </div>
//     ));
//   };

//   const renderCategoryButtons = () => {
//     return categories.map((category, index) => (
//       <button
//         key={index}
//         className="btn btn-primary m-2"
//         onClick={() =>
//           document
//             .getElementById(category.category)
//             .scrollIntoView({ behavior: "smooth" })
//         }
//       >
//         {category.category}
//       </button>
//     ));
//   };

//   const renderCategories = () => {
//     return categories.map((category) => (
//       <div
//         key={category.category}
//         id={category.category}
//         className="windowCategory category-container p-3 mb-4"
//         style={{
//           border: "1px solid #ddd",
//           borderRadius: "10px",
//           backgroundColor: "#f0f0f0",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           width: 350,
//         }}
//       >
//         <h3 className="text-center bg-light p-2 rounded">{category.category}</h3>
//         <div>{renderTests(category.tests)}</div>
//       </div>
//     ));
//   };

//   const handleFinish = async () => {
//     const results = {};

//     categories.forEach((category) => {
//       category.tests.forEach((test) => {
//         if (selectedTests.includes(test.name)) {
//           if (!results[category.category]) {
//             results[category.category] = [];
//           }
//           results[category.category].push({ name: test.name, color: test.color });
//         }
//       });
//     });
//     console.log(results);

//     const groupByColor = (data) => {
//       const grouped = {};
//       for (const category in data) {
//         data[category].forEach((test) => {
//           if (!grouped[test.color]) {
//             grouped[test.color] = [];
//           }
//           grouped[test.color].push(test.name);
//         });
//       }
//       console.log(grouped)
//       return grouped;
//     };
//     // console.log(grouped)
  
//     const sortedByColor = groupByColor(results);
  




    












//     // debugger
//     const confirmation = window.confirm("אתה בטוח בבחירות שלך?");
//     if (confirmation) {
//       console.log("confirmation  ::",confirmation)
//       try {
//         console.log("tests: sortedByColor  :",sortedByColor)
//         // שליחת הנתונים לשרת
//         const response = await axios.post("http://localhost:3007/api/orders", {
//           // patientId,
//           tests: sortedByColor 
//         });

//         // קבלת מספר ההזמנה מהשרת
//         const orderNumber = response.data.orderNumber;

//         // מעבר לדף הסיכום עם המידע הנדרש
//         navigate("/summary", {
//           state: { sortedByColor, orderNumber: orderNumber },
//         });
//       } catch (error) {
//         console.error("Error sending data:", error);
//         alert("שגיאה בשליחת הנתונים לשרת.");
        
//       }
      
//     }

//     navigate("/summary", {
//       state: {sortedByColor},
//     })
//   };

//   return (
//     <>
//     <div className="container-fluid">
//     <div className="container">


// <div>
//       <div> 
//                 <div className=" text-center p-3 ">
//                   <h1>גלריית בדיקות דם</h1>
//                 </div>

//       </div>

//       <div className="classarrButtons"> 
//             <div className=" arrButtons d-flex justify-content-center flex-wrap p-3">
//                 {renderCategoryButtons()}
//               </div>

//       </div>

//       <div className=" d-flex justify-content-center">
//             <div  className="WindowGalery mt-4 p-3">{renderCategories()}</div>
//       </div>
      

//       <div>
//       <div className="buttonFinish  text-center mt-4 p-4">
//           <button className="btn btn-success" onClick={handleFinish}>
//             סיום
//           </button>
//         </div>
        
//       </div>
// </div>


  
//       {/* <div className="titleGulery text-center p-3 ">
//         <h1>גלריית בדיקות דם</h1>
//       </div>

//       <main className="container">
//         <div className="arrButtons d-flex justify-content-center flex-wrap p-3">
//           {renderCategoryButtons()}
//         </div>

//         <div className="containerCategory mt-4">{renderCategories()}</div>

//         <div className="text-center mt-4">
//           <button className="btn btn-success" onClick={handleFinish}>
//             סיום
//           </button>
//         </div>
//       </main> */}
//       </div>
//       </div>
//     </>
//   );
// };

// export default Galery;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import BloodTestsData from "../BloodTests.json";
// import { doApiMethod } from "../services/apiservice";

// const Galery = () => {
//   const categories = BloodTestsData.categories; // גישה לקטגוריות מתוך הקובץ JSON
//   const [selectedTests, setSelectedTests] = useState([]); // מעקב אחר הבדיקות שנבחרו
//   const navigate = useNavigate(); // לשימוש בניווט בין עמודים

//   // פונקציה לשינוי מצב הבדיקה - אם נבחרה או לא
//   const toggleTestSelection = (testName) => {
//     setSelectedTests((prevSelected) =>
//       prevSelected.includes(testName)
//         ? prevSelected.filter((name) => name !== testName)
//         : [...prevSelected, testName]
//     );
//   };

//   // יצירת מבנה JSON מקובץ הבדיקות לפי קטגוריות וצבעים
//   const groupByColor = (data) => {
//     const grouped = {};
//     for (const category in data) {
//       data[category].forEach((test) => {
//         if (!grouped[test.color]) {
//           grouped[test.color] = [];
//         }
//         grouped[test.color].push(test.name);
//       });
//     }
//     return grouped;
//   };

//   // רינדור הבדיקות לקטגוריות השונות
//   const renderTests = (tests) => {
//     return tests.map((test) => (
//       <div
//         key={test.name}
//         onClick={() => toggleTestSelection(test.name)}
//         style={{
//           cursor: "pointer",
//           backgroundColor: selectedTests.includes(test.name)
//             ? test.color
//             : "#f9f9f9",
//           border: `2px solid ${test.color}`,
//           margin: "5px 0",
//           padding: "10px",
//           color: selectedTests.includes(test.name) ? "#fff" : "#000",
//           borderRadius: "5px",
//           transition: "all 0.3s ease",
//         }}
//       >
//         {test.name}
//       </div>
//     ));
//   };

//   const renderCategoryButtons = () => {
//     return categories.map((category, index) => (
//       <button
//         key={index}
//         className="btn btn-primary m-2"
//         onClick={() =>
//           document
//             .getElementById(category.category)
//             .scrollIntoView({ behavior: "smooth" })
//         }
//       >
//         {category.category}
//       </button>
//     ));
//   };

//   const renderCategories = () => {
//     return categories.map((category) => (
//       <div
//         key={category.category}
//         id={category.category}
//         className="windowCategory category-container p-3 mb-4"
//         style={{
//           border: "1px solid #ddd",
//           borderRadius: "10px",
//           backgroundColor: "#f0f0f0",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           width: 350,
//         }}
//       >
//         <h3 className="text-center bg-light p-2 rounded">{category.category}</h3>
//         <div>{renderTests(category.tests)}</div>
//       </div>
//     ));
//   };



//   const formatDataForServer = (data, userId) => ({
//     tests: Object.keys(data).flatMap(color =>
//       data[color].map(test => ({
//         name: test.name, 
//         attributes: [color] // משתמש בצבע כ"מאפיין"
//       }))
//     ),
//     user: { _id: userId },
//   });
  

//   const handleFinish = async () => {
//     const results = {};
  
//     categories.forEach((category) => {
//       category.tests.forEach((test) => {
//         if (selectedTests.includes(test.name)) {
//           if (!results[category.category]) {
//             results[category.category] = [];
//           }
//           results[category.category].push({ name: test.name, color: test.color });
//         }
//       });
//     });
  
//     const sortedByColor = groupByColor(results);
//     console.log("Data sent to server:", sortedByColor);
  
//     const userId = "userIdFromLocalStorage"; // לדוגמה, משוך מזהות המשתמש
//     const formattedData = formatDataForServer(sortedByColor, userId);
//     console.log("formattedData :",formattedData)
  
//     try {
      // const response = await doApiMethod("/api/orders", "POST", formattedData);
      // console.log("Order response:", response.data);
      // const orderNumber = response.data.order.orderNumber;
      // navigate("/summary", { state: { sortedByColor, orderNumber } });
//     } catch (error) {
//       console.error("Error sending data to the server:", error);
//       if (error.response) {
//         console.error("Server Response:", error.response.data);
//       }
//       alert("שגיאה בשליחת הנתונים לשרת.");
//     }
//   };
  
//   return (
//     <div className="container-fluid">
//       <div className="container">
//         <div className="text-center p-3">
//           <h1>גלריית בדיקות דם</h1>
//         </div>
//         <div className="d-flex justify-content-center flex-wrap p-3">
//           {renderCategoryButtons()}
//         </div>
//         <div className="d-flex justify-content-center">
//           <div className="WindowGalery mt-4 p-3">{renderCategories()}</div>
//         </div>
//         <div className="text-center mt-4 p-4">
//           <button className="btn btn-success" onClick={handleFinish}>
//             סיום
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Galery;








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
        style={{
          cursor: "pointer",
          backgroundColor: selectedTests.includes(test.name)
            ? test.color
            : "#f9f9f9",
          border: `2px solid ${test.color}`,
          margin: "5px 0",
          padding: "10px",
          color: selectedTests.includes(test.name) ? "#fff" : "#000",
          borderRadius: "5px",
          transition: "all 0.3s ease",
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
        className="windowCategory category-container p-3 mb-4"
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "#f0f0f0",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: 350,
        }}
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
  
  // טיפול בסיום ושליחת נתונים לשרת
//   const handleFinish = async () => {
//     const results = {};

//     // קיבוץ הבדיקות שנבחרו לפי קטגוריות
//     categories.forEach((category) => {
//       category.tests.forEach((test) => {
//         if (selectedTests.includes(test.name)) {
//           if (!results[category.category]) {
//             results[category.category] = [];
//           }
//           results[category.category].push({ name: test.name, color: test.color });
//         }
//       });
//     });

//     const sortedByColor = groupByColor(results); // קיבוץ לפי צבע
//     console.log("categories:", categories);

//     console.log("Data sent to server:", sortedByColor);

    
//     const formattedData = formatDataForServer(sortedByColor);
//     console.log("Formatted Data:", formattedData);
   
 


// const newformattedData = {
//   tests: formattedData.tests,
//   patient: "123456789",   //לקבל את הID מהעדר TODO
//   user: { _id: "64abcdef1234567890abcdef" }, // 
// };

  
// console.log("newformattedData::",newformattedData)

//     try {
//       const response = await doApiMethod("/api/orders", "POST",newformattedData);
//       console.log("Formatted Data:", formattedData);
//       console.log("Order response:", response.data);

//       const orderNumber = response.data.order.orderNumber; //קיבלתי מספר הזמנה 
//       console.log("orderNumber  ::",orderNumber )
//       navigate("/summary", { state: { sortedByColor, orderNumber } });
//     } catch (error) {
       
//       console.log("newformattedData::",newformattedData)
//       console.log("Data sent to server:", sortedByColor);
//       console.log("Formatted Data:", formattedData);
//       console.error("Error sending data to the server:", error);
//       if (error.response) {
//         console.error("Server Response:", error.response.data ,newformattedData);
//       }
//       alert("שגיאה בשליחת הנתונים לשרת.");
//     }
//   };





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
    console.log("categories:", categories);
    console.log("Grouped by color:", sortedByColor);
  
    // יצירת מבנה הנתונים בפורמט הנדרש לשרת
    const formattedTests = Object.entries(sortedByColor).map(([color, tests]) => ({
      name: `${color} Tests`, // שם כללי עבור קבוצת צבע
      attributes: tests, // רשימת הבדיקות באותו צבע
    }));
  
    const dataToSend = {
      tests: formattedTests,
      patient: id, // TODO: החלף ב-ID של המטופל האמיתי
    };
  
    console.log("Data to send:", dataToSend);
  
    try {
   
      
      const response = await doApiMethod("/api/orders", "POST", dataToSend);
      console.log("Order response:", response.data);
      
  
      const orderNumber = response.data.order.orderNumber; // קיבלתי מספר הזמנה
      console.log("Order Number:", orderNumber);
  
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



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import BloodTestsData from "../BloodTests.json"; // קובץ JSON של בדיקות דם
// import { doApiMethod } from "../services/apiservice"; // פונקציה לשימוש ב-API
// import Patient_admission from "./Patient_admission";
// import { useDataContext } from "./DataProvider";

// const Galery = () => {
//   const categories = BloodTestsData.categories; // נתוני קטגוריות מה-JSON
//   const [selectedTests, setSelectedTests] = useState([]); // מעקב אחר הבדיקות שנבחרו
//   const navigate = useNavigate(); // לשימוש בניווט לעמודי סיכום
//   const { dataFor4 } = useDataContext(); // שליפת נתוני המטופל מהקונטקסט

//   // וידוא שהנתונים זמינים
//   if (!dataFor4 || !dataFor4.id) {
//     console.error("נתוני המטופל חסרים או לא נטענו כראוי.");
//   }

//   // שינוי מצב הבדיקה (נבחרה או לא)
//   const toggleTestSelection = (testName) => {
//     setSelectedTests((prevSelected) =>
//       prevSelected.includes(testName)
//         ? prevSelected.filter((name) => name !== testName)
//         : [...prevSelected, testName]
//     );
//   };

//   // פונקציה לקיבוץ בדיקות לפי צבעים
//   const groupByColor = (data) => {
//     const grouped = {};
//     for (const category in data) {
//       data[category].forEach((test) => {
//         if (!grouped[test.color]) {
//           grouped[test.color] = [];
//         }
//         grouped[test.color].push(test.name);
//       });
//     }
//     return grouped;
//   };

//   // רינדור כפתורי קטגוריות (לניווט לקטגוריה)
//   const renderCategoryButtons = () => {
//     return categories.map((category, index) => (
//       <button
//         key={index}
//         className="btn btn-primary m-2"
//         onClick={() =>
//           document
//             .getElementById(category.category)
//             .scrollIntoView({ behavior: "smooth" })
//         }
//       >
//         {category.category}
//       </button>
//     ));
//   };

//   // רינדור בדיקות בתוך קטגוריה
//   const renderTests = (tests) => {
//     return tests.map((test) => (
//       <div
//         key={test.name}
//         onClick={() => toggleTestSelection(test.name)}
//         style={{
//           cursor: "pointer",
//           backgroundColor: selectedTests.includes(test.name)
//             ? test.color
//             : "#f9f9f9",
//           border: `2px solid ${test.color}`,
//           margin: "5px 0",
//           padding: "10px",
//           color: selectedTests.includes(test.name) ? "#fff" : "#000",
//           borderRadius: "5px",
//           transition: "all 0.3s ease",
//         }}
//       >
//         {test.name}
//       </div>
//     ));
//   };

//   // רינדור כל הקטגוריות
//   const renderCategories = () => {
//     return categories.map((category) => (
//       <div
//         key={category.category}
//         id={category.category}
//         className="windowCategory category-container p-3 mb-4"
//         style={{
//           border: "1px solid #ddd",
//           borderRadius: "10px",
//           backgroundColor: "#f0f0f0",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           width: 350,
//         }}
//       >
//         <h3 className="text-center bg-light p-2 rounded">
//           {category.category}
//         </h3>
//         <div>{renderTests(category.tests)}</div>
//       </div>
//     ));
//   };

//   // עיצוב הנתונים לשליחה לשרת
//   const formatDataForServer = (data, userId) => ({
//     tests: Object.keys(data).flatMap((color) =>
//       data[color].map((test) => ({
//         name: test, // שדה שם הבדיקה
//         attributes: [color], // צבע הבדיקה
//       }))
//     ),
//     user: { _id: userId }, // משתמש לדוגמה
//   });

//   // טיפול בסיום ושליחת נתונים לשרת
//   const handleFinish = async () => {
//     if (!dataFor4 || !dataFor4.id) {
//       alert("נתוני המטופל חסרים. לא ניתן להמשיך.");
//       return;
//     }

//     const results = {};

//     // קיבוץ הבדיקות שנבחרו לפי קטגוריות
//     categories.forEach((category) => {
//       category.tests.forEach((test) => {
//         if (selectedTests.includes(test.name)) {
//           if (!results[category.category]) {
//             results[category.category] = [];
//           }
//           results[category.category].push({
//             name: test.name,
//             color: test.color,
//           });
//         }
//       });
//     });

//     const sortedByColor = groupByColor(results); // קיבוץ לפי צבע
//     console.log("Data sent to server:", sortedByColor);

//     const formattedData = formatDataForServer(sortedByColor);
//     const newFormattedData = {
//       tests: formattedData.tests,
//       patient: dataFor4.id,
//       user: { _id: "64abcdef1234567890abcdef" }, // החלף ל-ID אמיתי אם יש
//     };

//     try {
//       const response = await doApiMethod("/api/orders", "POST", newFormattedData);
//       console.log("Order response:", response.data);

//       const orderNumber = response.data.order.orderNumber;
//       navigate("/summary", { state: { sortedByColor, orderNumber } });
//     } catch (error) {
//       console.error("Error sending data to the server:", error);
//       if (error.response) {
//         console.error("Server Response:", error.response.data);
//       }
//       alert("שגיאה בשליחת הנתונים לשרת.");
//     }
//   };

//   return (
//     <>
//       <div className="container-fluid">
//         <Patient_admission />
//         <div className="container">
//           <div className="d-flex justify-content-center flex-wrap p-3 arrButtons">
//             {renderCategoryButtons()}
//           </div>
//           <div className="d-flex justify-content-center containerGulery">
//             <div className="WindowGalery mt-4 p-3">{renderCategories()}</div>
//           </div>
//           <div className="text-center mt-4 p-4 buttonFinish">
//             <button className="btn btn-success" onClick={handleFinish}>
//               סיום
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Galery;









// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import BloodTestsData from "../BloodTests.json"; // קובץ JSON של בדיקות דם
// import { doApiMethod } from "../services/apiservice"; // פונקציה לשימוש ב-API
// import Patient_admission from "./Patient_admission";
// import { useDataContext } from "./DataProvider";




// const Galery = () => {
//   const categories = BloodTestsData.categories; // נתוני קטגוריות מה-JSON
//   const [selectedTests, setSelectedTests] = useState([]); // מעקב אחר הבדיקות שנבחרו
//   const navigate = useNavigate(); // לשימוש בניווט לעמודי סיכום
//   const   { dataFor4 }  = useDataContext();

//   const [patientData, setPatientData] = useState(null); // סטייט שמאוחסן באבא
  
  
//   // שינוי מצב הבדיקה (נבחרה או לא)
//   const toggleTestSelection = (testName) => {
//     setSelectedTests((prevSelected) =>
//       prevSelected.includes(testName)
//         ? prevSelected.filter((name) => name !== testName)
//         : [...prevSelected, testName]
//     );
//   };

//   // פונקציה לקיבוץ בדיקות לפי צבעים
//   const groupByColor = (data) => {
//     const grouped = {};
//     for (const category in data) {
//       data[category].forEach((test) => {
//         if (!grouped[test.color]) {
//           grouped[test.color] = [];
//         }
//         grouped[test.color].push(test.name);
//       });
//     }
//     return grouped;
//   };

//   // רינדור כפתורי קטגוריות (לניווט לקטגוריה)
//   const renderCategoryButtons = () => {
//     return categories.map((category, index) => (
//       <button
//         key={index}
//         className="btn btn-primary m-2"
//         onClick={() =>
//           document
//             .getElementById(category.category)
//             .scrollIntoView({ behavior: "smooth" })
//         }
//       >
//         {category.category}
//       </button>
//     ));
//   };

//   // רינדור בדיקות בתוך קטגוריה
//   const renderTests = (tests) => {
//     return tests.map((test) => (
//       <div
//         key={test.name}
//         onClick={() => toggleTestSelection(test.name)}
//         style={{
//           cursor: "pointer",
//           backgroundColor: selectedTests.includes(test.name)
//             ? test.color
//             : "#f9f9f9",
//           border: `2px solid ${test.color}`,
//           margin: "5px 0",
//           padding: "10px",
//           color: selectedTests.includes(test.name) ? "#fff" : "#000",
//           borderRadius: "5px",
//           transition: "all 0.3s ease",
//         }}
//       >
//         {test.name}
//       </div>
//     ));
//   };

//   // רינדור כל הקטגוריות
//   const renderCategories = () => {
//     return categories.map((category) => (
//       <div
//         key={category.category}
//         id={category.category}
//         className="windowCategory category-container p-3 mb-4"
//         style={{
//           border: "1px solid #ddd",
//           borderRadius: "10px",
//           backgroundColor: "#f0f0f0",
//           boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           width: 350,
//         }}
//       >
//         <h3 className="text-center bg-light p-2 rounded">{category.category}</h3>
//         <div>{renderTests(category.tests)}</div>
//       </div>
//     ));
//   };

//   // עיצוב הנתונים לשליחה לשרת
//   // const formatDataForServer = (data, userId) => ({
//   //   tests: Object.keys(data).flatMap((color) =>
//   //     data[color].map((test) => ({
//   //       name: test, // שדה שם הבדיקה
//   //       attributes: [color], // צבע הבדיקה
//   //     }))
//   //   ),
//   //   user: { _id: userId }, // משתמש לדוגמה
//   // });

//   const formatDataForServer = (data, userId) => {
//     const payload = { data, user: { _id: userId } };
    
//   };
  




//   const handleFinish = async () => {
//     const results = {};
  
//     // קיבוץ הבדיקות שנבחרו לפי קטגוריות
//     categories.forEach((category) => {
//       category.tests.forEach((test) => {
//         if (selectedTests.includes(test.name)) {
//           if (!results[category.category]) {
//             results[category.category] = [];
//           }
//           results[category.category].push({ name: test.name, color: test.color });
//         }
//       });
//     });
  
//     const sortedByColor = groupByColor(results); // קיבוץ לפי צבעים
//     console.log("categories:", categories);
//     console.log("Grouped by color:", sortedByColor);
  
//     // יצירת מבנה הנתונים בפורמט הנדרש לשרת
//     const formattedTests = Object.entries(sortedByColor).map(([color, tests]) => ({
//       name: `${color} Tests`, // שם כללי עבור קבוצת צבע
//       attributes: tests, // רשימת הבדיקות באותו צבע
//     }));
  
//     const dataToSend = {
//       tests: formattedTests,
//       patient: "123456789", // TODO: החלף ב-ID של המטופל האמיתי
//     };
  
//     console.log("Data to send:", dataToSend);
  
//     try {
//       const response = await doApiMethod("/api/orders", "POST", dataToSend);
//       console.log("Order response:", response.data);
  
//       const orderNumber = response.data.order.orderNumber; // קיבלתי מספר הזמנה
//       console.log("Order Number:", orderNumber);
  
//       navigate("/summary", { state: { sortedByColor, orderNumber } });
//     } catch (error) {
//       console.error("Error sending data to the server:", error);
//       if (error.response) {
//         console.error("Server Response:", error.response.data);
//       }
//       alert("שגיאה בשליחת הנתונים לשרת.");
//     }
//   };
  













//   return (
//    <>
//     <div className="container-fluid">
//     <Patient_admission setPatientData={setPatientData} />
//       <div className="container">
//         <div className="d-flex justify-content-center flex-wrap p-3 arrButtons">
//           {renderCategoryButtons()}
//         </div>
//         <div className="d-flex justify-content-center containerGulery">
//           <div className="WindowGalery mt-4 p-3">{renderCategories()}</div>
//         </div>
//         <div className="text-center mt-4 p-4 buttonFinish">
//           <button className="btn btn-success" onClick={handleFinish}>
//             סיום
//           </button>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Galery;




