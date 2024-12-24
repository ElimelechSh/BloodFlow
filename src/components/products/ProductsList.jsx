
import Header from '../Header'
// import Footer from '../Footer'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { API_URL } from '../../services/apiservice';
import { Link , useNavigate } from 'react-router-dom';
import ProdactFront from './ProdactFront';



const ProductsList = () => {
    const nav = useNavigate();
    const[ar,setAr]= useState([]);
    
    
      useEffect(() =>{
        doApi();
      },[])
      
      const doApi = async () =>{
        const url = API_URL + "/products"
        const resp =await axios.get(url);
        console.log(resp.data)
        setAr(resp.data);
    
      }
       const deletProduct = async(_idDel) =>{
        if(window.confirm("Delete item?"))
        try {
          const url = API_URL + "/products/"+ _idDel ;
          const resp =await axios({
            url:url,
            method:"DELETE",
            data:{}
         })
       if(resp.data.deletProduct){
        doApi();
       }
        } catch (error) {
          console.log(error)
        }
       }




  return (
    <div>
        <Header/>

<main>

<div className='container-fluid'>
        <div className='container'>
             <h2>Products List:</h2>
              <Link className='btn btn-info p-2' to="/Products/add">הוספת רשומה </Link>
      
             
           
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>name</th>
                  <th>info</th>
                  <th>date</th>
                  <th>price</th>
        
                  <th></th>
                  <th>del/edit</th>
                </tr>
              </thead>
              <tbody>
                {ar.map((item,i) => {
                  return(
                   
                   <tr kay={item._id}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td titel={item.info} >{item.info.substring(0,15)}...</td>
                    <td>{item.date_created.substring(0,10)}</td>
                    <td>{item.price}</td>
                    <td><button className='bg-danger' onClick={() =>{
                      deletProduct(item._id);
                    }} >x</button></td>
                    <td><button className='bg-info ms-2 ' onClick={() =>{
                      nav(`/Products/edit/${item._id}`)
                      //deletProduct(item._id);
                    }} >Edit</button></td>
                  </tr>

                  )
                })}

              </tbody>
</table>
          </div>
        </div>

</main>
<ProdactFront/>
{/* <Footer/> */}
    </div>
  )
}

export default ProductsList








// import Header from '../Header'
// import Footer from '../Footer'
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// import { API_URL } from '../../services/apiservice';
// import { Link , useNavigate } from 'react-router-dom';
// import ProdactFront from './ProdactFront';



// const ProductsList = () => {
//     const nav = useNavigate();
//     const[ar,setAr]= useState([]);
    
    
//       useEffect(() =>{
//         doApi();
//       },[])
      
//       const doApi = async () =>{
//         const url = API_URL + "/products"
//         const resp =await axios.get(url);
//         console.log(resp.data)
//         setAr(resp.data);
    
//       }
//        const deletProduct = async(_idDel) =>{
//         if(window.confirm("Delete item?"))
//         try {
//           const url = API_URL + "/products/"+ _idDel ;
//           const resp =await axios({
//             url:url,
//             method:"DELETE",
//             data:{}
//          })
//        if(resp.data.deletProduct){
//         doApi();
//        }
//         } catch (error) {
//           console.log(error)
//         }
//        }




//   return (
//     <div>
//         <Header/>

// <main>

// <div className='container-fluid'>
//         <div className='container'>
//              <h2>Products List:</h2>
//               <Link className='btn btn-info p-2' to="/Products/add">הוספת רשומה </Link>
      
             
           
//             <table className="table table-striped table-hover">
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>name</th>
//                   <th>info</th>
//                   <th>date</th>
//                   <th></th>
//                   <th>del/edit</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {ar.map((item,i) => {
//                   return(
                   
//                    <tr kay={item._id}>
//                     <td>{i+1}</td>
//                     <td>{item.name}</td>
//                     <td titel={item.info} >{item.info.substring(0,15)}...</td>
//                     <td>{item.date_created.substring(0,10)}</td>
//                     <td><button className='bg-danger' onClick={() =>{
//                       deletProduct(item._id);
//                     }} >x</button></td>
//                     <td><button className='bg-info ms-2 ' onClick={() =>{
//                       nav(`/Products/edit/${item._id}`)
//                       //deletProduct(item._id);
//                     }} >Edit</button></td>
//                   </tr>

//                   )
//                 })}

//               </tbody>
// </table>
//           </div>
//         </div>

// </main>
// <ProdactFront/>
// <Footer/>
//     </div>
//   )
// }

// export default ProductsList



