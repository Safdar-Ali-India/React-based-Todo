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
<input type="text" placeholder='Please Add ➕ Your Items Here' 
className='form-control' />
<i class="fa fa-solid fa-plus"></i> 
  </div>

  <div className="showItems">

<button className="btn effect04" data-sm-link-text="Remove All">
  
  
  <span>CHECK LIST</span></button>

  </div>
</div>
</div>
   </>
  )
}

export default Todo