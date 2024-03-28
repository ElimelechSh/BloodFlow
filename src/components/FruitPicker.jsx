import React , { useState } from 'react';
 import { Button} from 'react-bootstrap';


const FruitPicker = () => {
    // רשימת הפירות הקיימת
  const fruitsList = ["תפוח", "בננה", "אפרסק", "ענבים", "דובדבן", "פסיפלורה", "מלון", "רימון", "מנגו", "אננס"];
    // משתנה סטייט לשמירת הפירות שנבחרו
  const [selectedFruits, setSelectedFruits] = useState([]);
   // משתנה סטייט לשמירת ההודעה על המיץ
  const [juiceMessage, setJuiceMessage] = useState("");

  const [displayMessage, setDisplayMessage] = useState(false);

  // פונקציה לטיפול בבחירת פרי
  const handleFruitSelection = (fruit) => {
 // בדיקה אם הפרי כבר נבחר ולפי זאת נוסיף או נסיר אותו מהרשימה
    if (selectedFruits.includes(fruit)) {
      setSelectedFruits(selectedFruits.filter((selected) => selected !== fruit));
    } else {
      setSelectedFruits([...selectedFruits, fruit]);
    }
  };

  // פונקציה לטיפול בלחיצה על כפתור הסיום
  const handleFinish = () => {
    // יצירת הודעת המיץ מהפירות שנבחרו
    const juiceMessage = `המיץ שלך מורכב מ: ${selectedFruits.join(", ")}`;
    // שמירת ההודעה בסטייט
    setJuiceMessage(juiceMessage);
    setDisplayMessage(true); // שינוי הסטייט להצגת ההודעה
  };

  return (
    <>
    
    <div className='text-center p-3'>
      <h2 className="h2Froit text-bg-info text-center ">שייק מיוחד בהרכבה עצמית</h2>
      </div>
 
        {fruitsList.map((fruit) => (
          <Button
            key={fruit}
            variant={selectedFruits.includes(fruit) ? "success" : "primary"}
            onClick={() => handleFruitSelection(fruit)}  className="buttonWithMargin"
          >
            {fruit}
          </Button>
        ))}
       <br />
      <div className='text-center'>
        <button className="btn btn-info" variant="primary" onClick={handleFinish}>
          סיום
        </button></div>

  

      <div className=".image-containerShaike">
       <img  className="imgFroitShaike" src="../imges/שייק.png" alt="" />
         <div className="text-overlayShaike">

      {juiceMessage && <div className='w-25'>{juiceMessage}</div>}
     
       </div>
    </div>

<button className="btn btn-info">שלח</button>





      
     
    
</>
  );
};

export default FruitPicker;
