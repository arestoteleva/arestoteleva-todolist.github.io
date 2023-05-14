import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import ModalWindow from './Components/ModalInput/ModalWindow.jsx';
import { useState } from 'react';
import SingleTodo from './Components/SingleTodo';

function App() {

  const [showModal, setShowModal] = useState(false);
const [todoList, setToDoList] = useState([]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (inputText) => {
    const newTodo = {
      id: uuidv4(),
      name: inputText,
      status: "todo"
    };
    setToDoList([...todoList, newTodo]);

    handleCloseModal();
  };

  const [activeStatus, setActiveStatus] = useState("todo")
  
  const changestatus = (status) => {
    setActiveStatus(status);
  };

  const changeStatusSingleToDo = (id, changedStatus) => {
    const changedItem = todoList.find((item) => item.id === id);
    changedItem.status = changedStatus;
    const newToDoList = todoList.filter((item) => item.id !== id);
    setToDoList([...newToDoList, changedItem]);
  };
  
  const filteredToDos = todoList.filter((item) => item.status === activeStatus);
  
// Status buttons changing style when pressed 
  const [isStatusPressed, setIsStatusPressed] = useState(null);

  const handleButtonClick = (buttonName) => {
    setIsStatusPressed(buttonName);
  };

  const getButtonStyle = (buttonName) =>
    `my-button ${isStatusPressed === buttonName ? "Buttons-pressed" : "Buttons"}`;
// ---------------------------------------------------------------

  return (
    
    <div className="Main">
    <header>
        <p className="App-header"> Simple To Do List </p>
        <p className="Subheader"> Today is awesome day. The weather is awesome, you are awesome too! </p>
    </header>
    
    <div className="line2">
    <div>
    {/* <button className="Button-black">+</button> */}
    <button className="Button-black" onClick={handleOpenModal}>+</button>
      {showModal && (
        <ModalWindow 
          onClose={handleCloseModal} 
          onSubmit={handleSubmit} 
        />
      )}
    </div>

    <div className="Buttons-style">
    <button className={getButtonStyle("button1")} onClick={() => {
      handleButtonClick("button1");
      changestatus("todo");
    }}>
      <p>To do</p> </button>


      <button className={getButtonStyle("button2")} onClick={() => {
        handleButtonClick("button2");
        changestatus("done");
      }}>
      <p>Done</p>
      </button>


      <button className={getButtonStyle("button3")} onClick={() => {
        handleButtonClick("button3");
        changestatus("trash");
      }}>
      <p>Trash</p>
      </button>
    </div>
    </div>

    <header className="Subheader2">{activeStatus === "todo" ? "To Do" : activeStatus === 'done' ? "Done" : 'Trash'}</header>

<div className="Items-list">
{filteredToDos.map((item, _i) =>(
      <SingleTodo 
      key={_i} 
      item ={item} 
      changeStatusSingleToDo={changeStatusSingleToDo}
      />
     ))}
</div>

<div className="final-part">
  <p className="nfactext">Made with ❤️ at nFactorial in 2022.</p>
  <p className="creditstext">Credits: icons from Icons8.</p>
</div>
    </div>
  );
}


export default App;


{/* <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> */}
