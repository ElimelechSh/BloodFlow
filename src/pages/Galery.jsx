import React , { useState }  from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Frut from '../components/Frut';
import frutArray from "../Frut.json";
import FruitPicker from '../components/FruitPicker';



const Galery = () => {
  
   
    const originArray = frutArray;
    const CARS_PER_PAGE = 3;
    const [arr, setArr] = useState(originArray.slice(0, CARS_PER_PAGE));
    const [start, setStart] = useState(0); 
    

//משתנה לשמירת הקלט מאותחל כמחרוזת ריקה
const [searchValue, setSearchValue] = useState("");
//נשתנה state עבור הבחירה בסלקטבוקס.
const [choice, setChoice] = useState("categori");

const [totalPages, setTotalPages] =
useState(Math.ceil(originArray.length / CARS_PER_PAGE));
const [filterArr,setFilterArr]=useState(originArray)


//לפי סוג החיפוס שהמשתמש בחר יפי זה ייבנה מערך של קומפוננטות ירקות אם זה לפי מחיר או לפי שנה או חברה
//וגם משווה בין אותיות גדולות לקטנות
const filterArray = () => {
let newArray = frutArray.filter((item) => {
  if (choice === "name")
    return (
      item.name.toLocaleLowerCase() === searchValue.toLocaleLowerCase()
    );
  else if (choice === "category")
    return (
      item.category.toLocaleLowerCase() === searchValue.toLocaleLowerCase()
    );
    else if (choice === "season")
    return (
      item.season.toLocaleLowerCase() === searchValue.toLocaleLowerCase()
    );
 
  
});
return newArray;
};






const handleSubmit = (e) => {
  e.preventDefault();
  const filterArr = filterArray();

  if (filterArr.length > 0) {
    setArr(filterArr.slice(0, CARS_PER_PAGE));
    setFilterArr(filterArr); // Update filterArr state here
    setTotalPages(Math.ceil(filterArr.length / CARS_PER_PAGE));
  } else {
    // Handle case when no items match the filter
    alert("No matching items found. Please try again.");
    // Reset to original array
    setArr(originArray.slice(0, CARS_PER_PAGE));
    setFilterArr(originArray); // Reset filterArr state
    setTotalPages(Math.ceil(originArray.length / CARS_PER_PAGE));
  }
};








const arrayButoons= ()=>{
const butoons = [];
for( let i=1 ;i<=totalPages ;i++){
butoons.push(
<button
    key={i}
       className='btn btn-primary m-2'
onClick={() => onEachBtn(i)}
>
{i}
</button>

);
}
return butoons;
}

//עדכן את משתנה start בלחיצה על אחד מהכפתורים 1-10 מיכוון שהצגת
//העמוד הבא מתבצעת ביחס לעמוד הנוכחי בו אנו עומדים
const onEachBtn = (pageNum) => {

const startIndex = (pageNum - 1) *CARS_PER_PAGE;
const endIndex = startIndex +  CARS_PER_PAGE;
const tempArr = originArray.slice(startIndex,endIndex);
setArr(tempArr);
//עדכון סטארט למספר התא הראשון של העמוד הנוכחי 
  setStart(startIndex)
};



//butoon next
    const onNextBtn = () => {
      const startIndex = start + CARS_PER_PAGE;
      const tempArr = filterArr.slice(startIndex,
      startIndex + CARS_PER_PAGE);
      setArr(tempArr);
      setStart(startIndex);
      };

   


 //butoon back   
      const onBackBtn = () => {
        const startIndex = start - CARS_PER_PAGE;
        const tempArr = filterArr.slice(startIndex,
        startIndex + CARS_PER_PAGE);
        setArr(tempArr);
        setStart(startIndex);
        };




//לכאן ייכנסו הפרטים מהג'ייסון לפי מה שהמשתמש בחר
const createAllFrut = (arr) => {
const compsArr = arr.map((item) => {
  return (
    <Frut
    name={item.name}
     imageSrc={item.imageSrc}
      categori={item.category}
      season={item.season}
      nutrition={item.nutrition}
     
    />
  );
});

return compsArr;
};



return (
<div >

    <Header />

<main className="container-fluid bg-light row">
  <div className='col-12'>
    <div className="container text-center p-5">
     
    <div class="fw-semibold bg-dark-subtle  shadow-lg  fs-2 text-center p-1">גלריית הערכים התזונתיים של פירות וירקות</div>

    <form onSubmit={handleSubmit} className="text-center pt-4 p-3">
        <input onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          className=" w-25 m-auto " />

        <select onChange={(e) => setChoice(e.target.value)} className="m-2">
        <option value="name">שם</option>
          <option value="category">סוג</option>
          <option value="season">עונה</option>
         
        </select>
        <button
          className="btn btn-warning">
          חיפוש
        </button>
      </form>

    <div className="container mt-4 mb-4 ">
<div className="row justify-content-evenly p-5">
{createAllFrut(arr)}


</div>

<div  className='d-flex justify-content-center pb-4 '> 

<button className='btn btn-dark me-2 ' onClick={onBackBtn} disabled={start === 0}>הקודם</button>
<div className='d-none d-md-block'>
{arrayButoons()}
</div>
<button className='btn btn-dark me-2 ' onClick={onNextBtn} disabled={start + CARS_PER_PAGE >=
filterArr.length}>הבא</button>

</div>
</div>
</div>
</div>
      <div className='col-12  container text-center p-5'>

<FruitPicker/>


      </div>

 



  </main>
    <Footer/>
</div>
  )
}

export default Galery