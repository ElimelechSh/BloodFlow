import React from 'react'

const Frut = (props) => {
  return (
    
    <div className='col-md-3 rounded-2 border border-2 p-4 m-2 bg-info-subtle shadow'>
    <h2 className='h2nemeGallery'><span className='lead text-info-emphasis
    fw-bold '>{props.name}</span></h2>
    <img src={props.imageSrc} alt="" className='rounded-2' width="100%"
    height={200} />
    

    <h2 className='h2Gallery'>קטגוריה : <span className='lead text-secondary fw-bold'>{props.categori}</span></h2>

    <h2 className='h2Gallery' >עונה : <span className='lead text-secondary
    fw-bold'>{props.season}</span></h2>
<h2 className='h2Gallery'> ערכים תזונתיים :</h2>
      <ul>
        <li>Calories: {props.nutrition.calories}</li>
        <li>Fiber: {props.nutrition.fiber}</li>
        <li>Sodium: {props.nutrition.sodium}</li>
        <li>Calcium: {props.nutrition.calcium}</li>
        <li>Iron: {props.nutrition.iron}</li>
        {/* <li>Vitamin C: {props.nutrition.vitaminC}</li>
        <li>Vitamin A: {props.nutrition.vitaminA}</li> */}
      </ul>
    </div>


  )
}

export default Frut