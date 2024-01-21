import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"


const ToDo = ({text, updateMode, deleteToDo}) => {
  console.log("text:", text);
  
  const handleUpdateClick = () => {
    // Ensure updateMode is a function before calling it
    if (typeof updateMode === 'function') {
      updateMode();
    }
  };


  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
          <BiEdit className='icons' onClick={handleUpdateClick} />
          <AiFillDelete className='icons' onClick={deleteToDo} />
      </div>
    </div>
  )
}

export default ToDo