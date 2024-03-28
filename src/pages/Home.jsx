
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from 'react-bootstrap';



const Home = () => {
  return (
    <div>
        <Header />

       
        <main>
  <div className="container-fluid">
    <div className="container">


    


    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="imgCrosel d-block w-100 "
          src="../imges/ברזל.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>חשיבות הברזל בדם</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgCrosel d-block  w-100 "
          src="../imges/וויטמינים.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
         <h3>אלו וויטמינים עלינו לצרוך</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgCrosel d-block w-100 "
          src="../imges/קערת ירק.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h2>האוצר שבצומח</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 












  <div className="bg-dark-subtle shadow-lg">
    <div className="d-flex px-5 py-5 ">
      <div className="row">
        <div className="col-lg-4 align-items-center">


          <div className="d-flex w-100 justify-content-center ">

              <img className="rounded-pill w-50" src="../imges/וויטמינים.jpg" alt="" />
          </div>  
          <h2 className="fw-normal text-center">עולם הוויטמינים</h2>
        
          <p className="text-center  "><div className="fontpost">עולם הוויטמינים הוא מרתק וחיוני לבריאות ולרווחה הכללית שלנו. ויטמינים הם תרכובות אורגניות שגופנו דורש בכמויות קטנות כדי לתמוך בתפקודים חיוניים שונים. הם ממלאים תפקיד מכריע בשמירה על חילוף חומרים תקין, צמיחה, התפתחות ובריאות כללית.

            להלן כמה היבטים חשובים של עולם הויטמינים:
            
            1. סיווג: ויטמינים מסווגים לשתי קטגוריות על סמך מסיסותם: ויטמינים מסיסים במים (כגון ויטמין C וויטמיני B) וויטמינים מסיסים בשומן (כגון ויטמינים A, D, E ו-K). ויטמינים מסיסים במים אינם מאוחסנים בגוף ויש למלא אותם באופן קבוע, בעוד ויטמינים מסיסים בשומן מאוחסנים ברקמות השומן ועלולים להצטבר לרמות רעילות בצריכה מוגזמת.
            
            2. פונקציות: לכל ויטמין יש תפקידים ספציפיים בתוך הגוף. לדוגמה, ויטמין C ידוע בסגולותיו נוגדות החמצון ובתפקידו בסינתזה של קולגן, בעוד ויטמין D חיוני לספיגת סידן ולבריאות העצם. ויטמיני B מסייעים בייצור אנרגיה ותפקוד עצבי, בעוד ויטמין A תומך בראייה ובתפקוד החיסון.
            
            3. מקורות מזון: ניתן להשיג ויטמינים ממגוון מקורות מזון. למשל, פירות וירקות הם מקורות מצוינים לויטמין C, בעוד ויטמין A ניתן למצוא במזונות כמו גזר, בטטה ותרד. דגים שומניים, מוצרי חלב מועשרים וחשיפה לאור השמש הם מקורות לויטמין D.
            
            4. מחסור ורעילות: צריכה לא מספקת של ויטמינים עלולה להוביל למחסור, ולגרום לבעיות בריאותיות שונות. </div>
           
            <Button  href="https://he.wikipedia.org/wiki/%D7%95%D7%99%D7%98%D7%9E%D7%99%D7%9F">ראה עוד</Button>
      
            </p>
             </div>

        <div className="col-lg-4">
          <div className="d-flex w-100 justify-content-center">
            <div className="d-flex w-100 justify-content-center ">

              <img className="rounded-pill w-50" src="../imges/מערכת העיכול.jpg" alt="" />
          </div>  
        </div>
          <h2 className="fw-normal text-center">מערכת העיכול</h2>
       
          <p className="text-center "><div className="fontpost">
            בחרו בתזונה מאוזנת היטב: הזינו את מערכת העיכול שלכם במגוון מזונות מלאים, כולל פירות, ירקות, דגנים מלאים, חלבונים רזים ושומנים בריאים.
            2. לחות נאותה: שמור על לחות מערכת העיכול שלך על ידי שתיית מים מספקת לאורך כל היום כדי לתמוך בעיכול תקין וביציאות קבועות.
            
            3. תרגלו אכילה מודעת: קח את הזמן ללעוס את האוכל שלך ביסודיות ולהיות נוכח בזמן האכילה, לאפשר לגוף שלך לעכל ולספוג כראוי חומרים מזינים.
            
            4. גדלי מנות נפש: הימנע מאכילת יתר על ידי תרגול שליטה במנות, בחירה בארוחות קטנות יותר ותכופות ולא בארוחות גדולות וכבדות כדי להקל על העומס על מערכת העיכול שלך.
            
            5. צמצמו למינימום מזון וסוכרים מעובדים: הגבל את הצריכה של מזונות מעובדים וסוכרים, מכיוון שהם עלולים לשבש את האיזון של חיידקי המעי ועלולים להוביל לבעיות עיכול.
            
            6. נהלו מתחים ביעילות: שלבו טכניקות בריאות לניהול מתחים כמו פעילות גופנית, מדיטציה או עיסוק בפעילויות שאתם נהנים מהם כדי להפחית את רמות המתח ולתמוך במערכת עיכול בריאה.
            
            7. זהה מזונות טריגר: שימו לב לכל מזון או משקאות שעלולים לגרום לאי נוחות או גירוי למערכת העיכול שלכם והגבילו או הימנעו מהם בהתאם.
            
            8. תעדוף היגיינה טובה: שמרו על שיטות היגיינה טובות כמו שטיפת ידיים ביסודיות לפני אכילה או הכנת מזון כדי למנוע בליעת חיידקים מזיקים.
          </div>
          <Button
           onClick={() => console.log("click")} href="https://he.wikipedia.org/wiki/%D7%95%D7%99%D7%98%D7%9E%D7%99%D7%9F">
            ראה עוד
            </Button>

          


            </p>
          
        </div>
        <div className="col-lg-4">
          <div className="d-flex w-100 justify-content-center">
            <div className="d-flex w-100 justify-content-center ">

              <img className="rounded-pill w-50 " src="../imges/ברזל.jpg" alt="" />
          </div>  
        </div>
          <h2 className="fw-normal text-center">חשיבות הברזל בגוף האדם</h2>
        
          <p className="text-center "><div className="fontpost">ל תפקידו המכריע בתהליכים פיזיולוגיים שונים. הנה כמה סיבות מדוע ברזל חשוב:

            1. הובלת חמצן: ברזל הוא מרכיב מרכזי בהמוגלובין בתאי הדם האדומים, המוביל חמצן מהריאות לכל רקמות הגוף. זה עוזר ביצירת תאי דם אדומים בריאים, מבטיח אספקת חמצן תקינה לאיברים ולרקמות.
            
            2. ייצור אנרגיה: ברזל מעורב בייצור של אדנוזין טריפוספט , מטבע האנרגיה העיקרי של הגוף. הוא הכרחי לניצול יעיל של אנרגיה מהמזון והתהליכים המטבוליים היוצרים אנרגיה.
            
            3. תפקוד מערכת החיסון: לברזל תפקיד חיוני בתפקוד תקין של מערכת החיסון. זה חיוני לשגשוג והתמיינות של תאי מערכת החיסון, לשיפור יכולת הגוף להילחם בזיהומים ומחלות.
            
            4. תפקוד המוח: הברזל הכרחי להתפתחות ולתפקוד המוח. זה מסייע בייצור של נוירוטרנסמיטורים, החיוניים לאיתות עצבי תקין ולתהליכים קוגניטיביים.
            
            5.  לשמירה על הבריאות והרווחה הכלליתסינתזת דנ"א: ברזל מעורב בסינתזת הדנ"א, החיונית לחלוקת תאים ולגדילה. זה מבטיח התפתחות ותחזוקה תקינים של תאים בכל הגוף.
            
            מחסור בברזל, המכונה אנמיה מחוסר ברזל, יכול להוביל לעייפות, חסינות מוחלשת, פגיעה בתפקוד קוגניטיבי ובעיות בריאותיות אחרות. לכן, צריכת כמות נאותה של מזונות עשירים בברזל היא חיונית לשמירה על הבריאות והרווחה הכללית. 
            ומבטיחה התפתחות ותחזוקה תקינים של תאים בכל הגוף
            </div>
            <Button  href="https://www.wikirefua.org.il/w/index.php/%D7%91%D7%A8%D7%96%D7%9C_-_Iron">ראה עוד</Button>
         
          </p>
         
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

export default Home