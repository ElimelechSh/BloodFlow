
import React, { useState } from 'react';
import Dashboard from '../../pages/Dashboard';

const tests = [
  { name: "Glucose", color: "gray" },
  { name: "Cholesterol", color: "red" },
  { name: "Triglycerides", color: "red" },
  { name: "ALT", color: "red" },
  { name: "AST", color: "red" },
  { name: "Sodium", color: "green" },
  { name: "Potassium", color: "green" },
  { name: "Calcium", color: "green" },
  { name: "Vitamin D", color: "yellow" },
  { name: "TSH", color: "yellow" },
  { name: "CRP", color: "yellow" },
  { name: "HbA1c", color: "purple" },
  { name: "Iron", color: "red" },
];

const colorLabels = {
  red: "Red (סרום)",
  gray: "Gray (גלוקוז)",
  green: "Green (פלזמה)",
  yellow: "Yellow (סרום עם ג'ל)",
  purple: "Purple (דם מלא)",
};

const Biochimia = () => {
  const [selectedTests, setSelectedTests] = useState([]);

  const toggleTest = (testName) => {
    setSelectedTests((prev) =>
      prev.includes(testName)
        ? prev.filter((test) => test !== testName)
        : [...prev, testName]
    );
  };

  const handleFinish = () => {
    const results = {};
    tests.forEach((test) => {
      if (selectedTests.includes(test.name)) {
        if (!results[test.color]) {
          results[test.color] = [];
        }
        results[test.color].push(test.name);
      }
    });
    console.log(results);
    alert(JSON.stringify(results, null, 2));
  };

  return (
    
  <div className="container-fluid">
  <div className="container">
<Dashboard/>

    <div style={{ padding: "20px" }}>
      <h2>בחירת בדיקות דם - ביוכימיה</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tests.map((test) => (
          <li
            key={test.name}
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
            }}
            onClick={() => toggleTest(test.name)}
          >
            {test.name} ({colorLabels[test.color]})
          </li>
        ))}
      </ul>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleFinish}
      >
        סיום
      </button>
    </div>
    </div>
    </div>
  );
};
                     
export default Biochimia;



// import React from "react";

// const tests = [
//   { name: "Glucose", color: "gray" },
//   { name: "Cholesterol", color: "red" },
//   // שאר הבדיקות...
// ];

// const Biochimia = ({ selectedTests, toggleTest }) => {
//   return (
//     <div>
//       <h2>ביוכימיה</h2>
//       <ul style={{ listStyleType: "none", padding: 0 }}>
//         {tests.map((test) => (
//           <li
//             key={test.name}
//             style={{
//               cursor: "pointer",
//               backgroundColor: selectedTests.Biochimia.includes(test.name)
//                 ? test.color
//                 : "#f9f9f9",
//               border: `2px solid ${test.color}`,
//               margin: "5px 0",
//               padding: "10px",
//               color: selectedTests.Biochimia.includes(test.name) ? "#fff" : "#000",
//               borderRadius: "5px",
//             }}
//             onClick={() => toggleTest("Biochimia", test.name)}
//           >
//             {test.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Biochimia;






// import React, { useContext } from 'react';
// import { TestSelectionContext } from '../../App';

// const Biochimia = () => {
//   const { updateSelectedTests } = useContext(TestSelectionContext);

//   const tests = [
//     { name: "Glucose", color: "gray" },
//     { name: "Cholesterol", color: "red" },
//     { name: "Triglycerides", color: "red" },
//     // בדיקות נוספות...
//   ];

//   const handleSelect = (selectedTests) => {
//     updateSelectedTests("Biochimia", selectedTests);
//   };

//   return (
//     <div>
//       <h2>Biochimia</h2>
//       {/* רכיבים לבחירת בדיקות */}
//       <button onClick={() => handleSelect(["Glucose", "Cholesterol"])}>בחר בדיקות</button>
//     </div>
//   );
// };

// export default Biochimia;




// import React, { useContext, useState } from "react";
// // import { TestSelectionContext } from "../../App";
// import Dashboard from "../../pages/Dashboard";

// const Biochimia = () => {
//   const { updateSelectedTests } = useContext(TestSelectionContext);

//   const tests = [
//     { name: "Glucose", color: "gray" },
//     { name: "Cholesterol", color: "red" },
//     { name: "Triglycerides", color: "blue" },
//     { name: "Uric Acid", color: "green" },
//     { name: "Glucose", color: "gray" },
//   { name: "Cholesterol", color: "red" },
//   { name: "Triglycerides", color: "red" },
//   { name: "ALT", color: "red" },
//   { name: "AST", color: "red" },
//   { name: "Sodium", color: "green" },
//   { name: "Potassium", color: "green" },
//   { name: "Calcium", color: "green" },
//   { name: "Vitamin D", color: "yellow" },
//   { name: "TSH", color: "yellow" },
//   { name: "CRP", color: "yellow" },
//   { name: "HbA1c", color: "purple" },
//   { name: "Iron", color: "red" },
//   ];

//   const [selectedTests, setSelectedTests] = useState([]);

//   const toggleTest = (testName) => {
//     setSelectedTests((prevSelected) => {
//       const isSelected = prevSelected.includes(testName);
//       const updatedTests = isSelected
//         ? prevSelected.filter((test) => test !== testName)
//         : [...prevSelected, testName];

//       // עדכון הסטייט המרכזי דרך context
//       updateSelectedTests("Biochimia", updatedTests);

//       return updatedTests;
//     });
//   };

//   return (
//     <div>
      
//       <Dashboard/>
//       <h2>בחירת בדיקות דם - ביוכימיה</h2>
//       <ul style={{ listStyleType: "none", padding: 0 }}>
//         {tests.map((test) => (
//           <li
//             key={test.name}
//             style={{
//               cursor: "pointer",
//               backgroundColor: selectedTests.includes(test.name)
//                 ? test.color
//                 : "#f9f9f9",
//               border: `2px solid ${test.color}`,
//               margin: "5px 0",
//               padding: "10px",
//               color: selectedTests.includes(test.name) ? "#fff" : "#000",
//               borderRadius: "5px",
//               textAlign: "center",
//             }}
//             onClick={() => toggleTest(test.name)}
//           >
//             {test.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Biochimia;
