import React, { useState } from 'react';
import './ModalWindow.css';

function ModalWindow(props) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    props.onSubmit(text);
    setText('');
    props.onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3 className="text-style">Add New To Do:</h3>
        <textarea 
        className="Input-content"
          type="text" 
          value={text} 
          onChange={handleChange} 
          placeholder="Your text"
        
        />
        <button className="add-button" onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
}

export default ModalWindow;
