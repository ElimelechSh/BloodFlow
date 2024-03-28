import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
//import { DivEllemnts} from '../components/DivEllemnts';



import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';

  


const From = () => {

  const nav = useNavigate();
  const sub = (e) => {
      e.preventDefault();
      alert("הטופס נשלח בהצלחה!");
      nav("/");
  }

  
  return (




    <div>
<Header/>
<Button >
sdfghjk
</Button>



<main dir="rtl" className="justify-content-center fontStyle">
      <br/>
      <div className="container w-75 ">
        <h2>צור קשר</h2>

        <form onSubmit={sub}>
            <div className="form-row ">
                <div className="form-group col-md-6">
                    <label for="fullName">שם מלא:</label>
                    <input type="text" className="form-control" id="fullName" placeholder="הזן את שמך המלא" required/>
                </div>
                <br/>
                <div className="form-group col-md-6">
                    <label for="email">כתובת אימייל:</label>
                    <input type="email" className="form-control" id="email" placeholder="הזן כתובת אימייל" required/>
                </div>
                <br/>
            </div>
            <div className="form-group">
                <label for="message">הודעה:</label>
                <textarea className="form-control" id="message" rows="5" placeholder="הזן את ההודעה שלך" required></textarea>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">שלח הודעה</button>
        </form>
        <br/>

    </div>

    </main>



<Footer/>
    </div>
  )
}

export default From