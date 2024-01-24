import React from 'react';
import './style.css'
const Todo = () => {
  return (
   <>
   <div className="main-div">

<div className="child-div">
  <figure>
    <img src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector.svg&w=3840&q=100"  style={{ width: '400px', height: '200px' }}/>
  <figcaption>Add Your List Here 👌</figcaption>
  
  </figure>

  <div className="addItems">
<input type="text" placeholder='Please Add ➕ Your Items Here' className='form-control' />


  </div>
</div>



   </div>
   </>
  )
}

export default Todo