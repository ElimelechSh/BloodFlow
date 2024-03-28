import React from 'react'

const Footer = () => {
  return (

<>

  <div className="container-fluid bg-primary-subtle">
    <div className="row">
      <div className="col-md-4 row">
       <div className="col-md-6"><img width="150" height="150" src="../imges/logo_transparent.png" alt="logo"/></div> 
        <div className="col-md-6 p-4"> <h3>תלמוד ירושלמי 22 ב"ש 0547648848</h3></div>
      </div>
      <div className="col-md-4">
        <h3 className="p-2">חפשו אותנו גם...</h3>
        <div className=" p-3 row">
          <div className="col-3">
         
         <i className="bi bi-whatsapp whatsapp"></i>
          </div>
           <div className="col-3">
          
          <i className="bi bi-instagram instagram"></i>
        </div>
          <div className="col-3">
         
         <i className="bi bi-youtube youtube"></i>
          </div>
          <div className="col-3">
   
          <i className="bi bi-facebook facebook"></i>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-4 ">
        "בריאות ותזונה נכונה הם היסוד לחיים בריאים. אנחנו כאן כדי לספק לך מידע ועצות בנושאים שונים הקשורים לתזונה וסגנון חיים בריא. יחד נשמור על גוף ונפש חזקים!" </div>
      </div>
    </div>


  </>



  )
}

export default Footer