import React, { useState } from 'react';
import './style.css'
const Todo = () => {


  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
// adding the items function
const addItem = () =>{
  if (input === "") {
    alert("Please fill your data")
  }
  else{
    setItem([...item, input])
    setInput("")
  }
}
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
className='form-control' 
value={input}
onChange={(e) => setInput(e.target.value)}/>

<i class="fa fa-solid fa-plus" onClick={addItem}></i> 
  </div>

  <div className="showItems">

<button className="btn effect04" data-sm-link-text="Remove All">
  
  
  <span>CHECK LIST</span></button>

  </div>

{/* show our items */}


<div className="showItems">
  {item.map((curElem, index)=>{
    return(<div className="eachItem" key={index}>
    <h3>{curElem}</h3>
    <div className="todo-btn">
    <i class="far fa-solid fa-edit"></i> 
    <i class="far fa-solid fa-trash-alt"></i> 
    
    </div>
    </div>);
  })

  }

  



</div>


{/* remove our items */}


</div>
</div>
   </>
  )
}

export default Todo