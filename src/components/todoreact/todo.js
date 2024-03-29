import React, { useState, useEffect } from 'react';
import './style.css'
const getLocalData=()=>{
  const lists = localStorage.getItem("myTodo");
  if (lists) {
    return JSON.parse(lists);
  }
  else{
    return [];
  }
}





const Todo = () => {


  const [input, setInput] = useState("");
  const [item, setItem] = useState(getLocalData());
const [isEditItem, setIsEditItem]= useState("")
const [toggleButton, setToggleButton] = useState(false)

// adding the items function
const addItem = () =>{
  if (input === "") {
    alert("Please fill your data")
  }else if(input && toggleButton){
    setItem(
      item.map((curElem)=>{
if(curElem.id===isEditItem){
return {...curElem , name: input};
}

return curElem;
      })

    )


    setInput([]);
setIsEditItem(null);
setToggleButton(false)
  }
  else{
    const myNewInput ={
      id: new Date().getTime().toString(),
      name:input,
    }
    setItem([...item, myNewInput])
    setInput("")
  }
}
// edit the items

const editItem = (index)=>{
const item_todo_edited = item.find((curElem) =>{
  return curElem.id === index;
});
setInput(item_todo_edited.name);
setIsEditItem(index);
setToggleButton(true)

}

// deleting item
const removeItem =(index)=>{
const updatedItem = item.filter((curElem)=>{
  return index !== curElem.id;
})
setItem(updatedItem)
}


// removing all items
const removeAll = ()=>{
  setItem([])
}

console.log({removeAll}, "removeAll");


// adding local storage
useEffect(() => {
   localStorage.setItem("myTodo", JSON.stringify(item))
}, [item])




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
{
toggleButton?(

<i class="far fa-solid fa-edit" onClick={addItem}></i> 
):(

<i class="fa fa-solid fa-plus" onClick={addItem}></i> 

)}
  </div>

  <div className="showItems">

<button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
  
  
  <span>CHECK LIST</span></button>

  </div>

{/* show our items */}


<div className="showItems">
  {item.map((curElem)=>{
    return(
    <div className="eachItem" key={curElem.id}>
    <h3>{curElem.name}</h3>
    <div className="todo-btn">
    <i class="far fa-solid fa-edit" onClick={()=>{
      editItem(curElem.id)
    }}></i> 
    <i class="far fa-solid fa-trash-alt" onClick={()=>{
      removeItem(curElem.id)
    }}></i> 
    
    </div>
    </div>);



  })

  }

  



</div>

{/* I have done a change in the project */}
{/* remove our items */}


</div>
</div>
   </>
  )
}

export default Todo