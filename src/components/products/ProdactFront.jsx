
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { API_URL } from '../../services/apiservice';


const ProdactFront = () => {
   
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
       


  return (
    <>
      

<main>
        <div className='container-fluid'>
             <div className='container'>
                        <h2>Products List:</h2>

                        <div className="row">
                            {ar.map((item, i) => (
                                <div key={item._id} className='col-md-3 rounded-2 border border-2 p-4 m-2 bg-info-subtle shadow'>
                                    <h2 className='h2nemeGallery'>
                                        <span className='lead text-info-emphasis fw-bold   '>
                                            {item.name}
                                        </span>
                                    </h2>
                                    <img src={item.img_url} alt={item.name} className='rounded-2' width="100%" height={200} />
                                    
                                    <h2 className='h2nemeGallery'>
                                        <span className='lead text-info-emphasis fw-bold   '>
                                            {item.price} $
                                        </span>
                                    </h2>

                                    <h2 className='h2Gallery'>רכיבים : 
                                        <span className='lead text-secondary fw-bold'>
                                            {item.info}
                                        </span>
                                    </h2>
                                    
                                </div>
                            ))}
                        </div>





                       
            </div>
        </div>
         

</main>

    </>
  )
}

export default ProdactFront