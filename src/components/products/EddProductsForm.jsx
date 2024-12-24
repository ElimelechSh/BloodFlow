import React from 'react'
import { useForm } from "react-hook-form"

import { API_URL } from '../../services/apiservice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EddProductsForm = () => {
    const nav = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubForm =(_bodeData) => {
        console.log(_bodeData)
        doApiPost(_bodeData)
    }

    const doApiPost =async(_bodeData) => {
        try {
            const url = API_URL + "/products"
            const resp = await axios({
               url:url,
               method:"POST",
               data:_bodeData
            })
            if(resp.data._id){
                alert("nwe prodect added");
                nav("/ProductsList")
            }
            console.log(resp.data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container'>
            <h1 className='text-center'>הוספת רשומה:</h1>

            <form className='col-md-6 mx-auto border p-2' onSubmit={handleSubmit(onSubForm)} id="id_form" >
                <label>name</label>
                <input {...register("name", { required: true, minLength: 2 })} className="form-control" type="text" />
                {errors.name && <div className="text-danger">* Enter valid name</div>}
                <label>info</label>
                <textarea {...register("info", { required: true, minLength: 2 })} className="form-control" type="textarea" ></textarea>
                {errors.info && <div className="text-danger">* Enter valid info</div>}
                <label>img_url</label>
                <input {...register("img_url", { required: true, minLength: 2 })} className="form-control" type="text" />
                {errors.img_url && <div className="text-danger">* Enter valid img_url</div>}
                <label>price</label>
                <input {...register("price", { required: true, minLength: 2 })} className="form-control" type="text" />
                {errors.name && <div className="text-danger">* Enter valid price</div>}
                <button className='mt-2'>הסף חדש </button>
            </form>


        </div>
    )
}

export default EddProductsForm





// import React from 'react'
// import { useForm } from "react-hook-form"

// import { API_URL } from '../../services/apiservice';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const EddProductsForm = () => {
//     const nav = useNavigate();
//     const { register, handleSubmit, formState: { errors } } = useForm();
    
//     const onSubForm =(_bodeData) => {
//         console.log(_bodeData)
//         doApiPost(_bodeData)
//     }

//     const doApiPost =async(_bodeData) => {
//         try {
//             const url = API_URL + "/products"
//             const resp = await axios({
//                url:url,
//                method:"POST",
//                data:_bodeData
//             })
//             if(resp.data._id){
//                 alert("nwe prodect added");
//                 nav("/ProductsList")
//             }
//             console.log(resp.data);
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <div className='container'>
//             <h1 className='text-center'>הוספת רשומה:</h1>

//             <form className='col-md-6 mx-auto border p-2' onSubmit={handleSubmit(onSubForm)} id="id_form" >
//                 <label>name</label>
//                 <input {...register("name", { required: true, minLength: 2 })} className="form-control" type="text" />
//                 {errors.name && <div className="text-danger">* Enter valid name</div>}
//                 <label>info</label>
//                 <textarea {...register("info", { required: true, minLength: 2 })} className="form-control" type="textarea" ></textarea>
//                 {errors.info && <div className="text-danger">* Enter valid info</div>}
//                 <label>img_url</label>
//                 <input {...register("img_url", { required: true, minLength: 2 })} className="form-control" type="text" />
//                 {errors.img_url && <div className="text-danger">* Enter valid img_url</div>}
//                 <button className='mt-2'>הסף חדש </button>
//             </form>


//         </div>
//     )
// }

// export default EddProductsForm