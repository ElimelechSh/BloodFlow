import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Acordion from '../components/Acordion'

const Qewtshtion = () => {
  return (

    <div>
    <Header/>
   
   <main>
    <div className="container-fluid">
    <div className="container">
       
      
      
      

<div className="row p-2">

<div className="col-md-6 p-5 divacordion">

  <div className="title">
    <h2 className="fw-semibold bg-dark-subtle p-2 shadow-lg">
        " שאלות נפוצות בנושא תפקידים ותכליתם של  ויטמינים, ומינרלים בתזונה הבריאה"</h2>
</div>












  
<div className="p-2 text-center ">
  <div className="s1 text-center row "><h2 className="h2">הסבר על תזונה בריאה </h2>
    <iframe className="col-12" width="560" height="315" src="https://www.youtube.com/embed/UtKEtXxylVE?si=8s2kzxjRauM6S5vq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

<Acordion/>


</div>



<div className="col-md-6 row p-5">

  <div className="fw-semibold bg-dark-subtle  shadow-lg  fs-2 text-center p-1">6 טיפים שאתם חייבים כל יום !</div>

<div className="col-12 row p-3">
  <div className="col-md-6"> <div className="">
    <div className="cit fw-semibold bg-dark-subtle p-2 shadow-lg">שתו הרבה מים</div>
    <div> <img className="imgi"  src="../imges/שמו מים.jpg" alt="מים"/></div>
  </div></div>
  <div className="col-md-6 "> 
    <div className="">
      <div className="cit fw-semibold bg-dark-subtle p-2 shadow-lg">צאו להליכה</div>
      <div> <img className="imgi" src="../imges/ריצה.jpg" alt="הליכה"/></div>
    </div>
    </div>
</div>




<div className="col-12 row ">
  <div className="my-div col-md-6"> <div className="">
    <div className="cit fw-semibold bg-dark-subtle p-2 shadow-lg">ארוחות קטנות</div>
    <div> <img className="imgi" src="../imges/ארוחה קטנה.jpg" alt="ארוחה קטנה "/></div>
  </div></div>
  <div className="col-md-6"> 
    <div className="">
      <div className="cit fw-semibold bg-dark-subtle p-2 shadow-lg">אכלו סלטים</div>
      <div> <img className="imgi" src="../imges/סלט תמונה.jpg" alt="סלט"/></div>
    </div>
    </div>
</div>


<div className="col-12 row ">
  <div className="col-md-6"> <div className="">
    <div className="cit fw-semibold bg-dark-subtle p-2 shadow-lg">עשו כושר</div>
    <div> <img className="imgi" src="../imges/כושר תמונה.jpg" alt="כושר"/></div>
  </div></div>
  <div className="col-md-6"> 
    <div className="">
      <div className="cit fw-semibold bg-dark-subtle p-2 shadow-lg">הימנעו מסוכר</div>
      <div> <img className="imgi" src="../imges/Avoid sugar.jpg" alt=""/></div>
    </div>
    </div>
</div>

</div>

</div>
      </div>
  </div>
  </main>
<Footer/>
</div>
  )
}

export default Qewtshtion