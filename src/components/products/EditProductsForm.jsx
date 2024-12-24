import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"

import { API_URL } from '../../services/apiservice';
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

const EditProductsForm = () => {
    const [item , setItem] = useState({})
    const nav = useNavigate();
    const params = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    useEffect(() =>{
       doApiInit();
    },[])
   const doApiInit =async() => {
    try {
        const url = API_URL + "/products/single/" + params["id"]
        const resp = await axios.get(url)
        console.log(resp.data);
        setItem(resp.data)
    } catch (error) {
        console.log(error)
    }
}


    const onSubForm =(_bodeData) => {
        console.log(_bodeData)
        doApiPut(_bodeData)
    }

    const doApiPut =async(_bodeData) => {
        try {
            const url = API_URL + "/Products/"+ params["id"]
            const resp = await axios({
               url:url,
               method:"PUT",
               data:_bodeData
            }) 
            if(resp.data.modifiedCount){
                alert("prodect updated");
                nav("/ProductsList")
            }
            console.log(resp.data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container'>
            <h1 className='text-center'>עריכת רשומה:</h1>
                {item.name ?
            <form className='col-md-6 mx-auto border p-2' onSubmit={handleSubmit(onSubForm)} id="id_form" >
                <label>name</label>
                <input defaultValue={item.name}{...register("name", { required: true, minLength: 2 })} className="form-control" type="text" />
                {errors.name && <div className="text-danger">* Enter valid name</div>}
                <label>info</label>
                <textarea defaultValue={item.info}{...register("info", { required: true, minLength: 2 })} className="form-control" type="textarea" ></textarea>
                {errors.info && <div className="text-danger">* Enter valid info</div>}
                <label>img_url</label>
                <input defaultValue={item.img_url}{...register("img_url", { required: true, minLength: 2 })} className="form-control" type="text" />
                {errors.img_url && <div className="text-danger">* Enter valid img_url</div>}
                <label>price</label>
                <input defaultValue={item.price}{...register("price", { required: true, minLength: 2 })} className="form-control" type="text" />
                {errors.price && <div className="text-danger">* Enter valid price</div>}
                <button className='mt-2'> Update </button>
            </form>:<h2>Loading...</h2>
             }


        </div>
    )
}

export default EditProductsForm