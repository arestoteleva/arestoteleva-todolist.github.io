import './SingleTodo.css';
import buttonImage from './ModalInput/images/Vector.png' 
import React, { useState } from 'react';
import TrashImage from './ModalInput/images/trashcan.png'
import MoveBack from './ModalInput/images/Move.png'

export default function SingleTodo({
    item, 
    changeStatusSingleToDo,
}) {
    // Modal Window for todo & done
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

//----------------------------------------
 
//Modal Window for trash
const [showModalTrash, setShowModalTrash] = useState(false);

const handleButtonClickTrash = () => {
    setShowModalTrash(true);
};

const handleCloseModalTrash = () => {
    setShowModalTrash(false);
};
//-----------------------------------------
    
   
    return (
    <div class = "todoList"> 

    <button className = "threeDotsStyle" onClick={
        item.status !== "trash" ? handleButtonClick : handleButtonClickTrash }>
    <img className='buttonImage-style' src={buttonImage} alt="Button Image" /> 
    </button>
      
      {showModal && (
        <div className="trash-modal">
            <button className = "trash-button" onClick={() => {
                changeStatusSingleToDo(item.id, "trash");
                handleCloseModal ();
                }} > 
                <img className='TrashImage-style' src={TrashImage} alt="Button Image" /> 
                Move to Trash</button>
        </div>
        )}

      {showModalTrash && (
        <div className="trash-modal">
            <button className = "trash-button" onClick={() => {
                changeStatusSingleToDo(item.id, "delete");
                handleCloseModal ();
                }} > 
                <img className='TrashImage-style' src={TrashImage} alt="Button Image" /> 
                Delete forever</button>
                <button className = "trash-button" onClick={() => {
                changeStatusSingleToDo(item.id, "todo");
                handleCloseModal ();
                }} > 
                <img className='MoveBack' src={MoveBack} /> 
                Move back to To Do </button>
        </div>
        )}  

     <div>
      <input 
       className="checkbox-style"
       type = "checkbox" 
       checked={item.status === "done"}
       onChange={
        item.status === "done" 

         ? () => changeStatusSingleToDo(item.id, "todo")
         : () => changeStatusSingleToDo(item.id, "done")
       }
       />
      
    </div>
    <p
      style={{
        textDecoration: item.status === "done" ? "line-through" : "none",
      }}> 
      {" "}
      
      {item.name}</p> 


      {/* <button onClick={() => changeStatusSingleToDo(item.id, "trash")}>
      <img className='Image-style' src={buttonImage} alt="Button Image" /> 
    trash
    </button> */}


    </div>
    
    );

}
