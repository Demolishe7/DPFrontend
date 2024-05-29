// Target.js
import React, { useState } from 'react';

const Target = ({ id, initialText, onTextChange, onTextClick }) => {
  const [text, setText] = useState(initialText);
  const [isVisible, setIsVisible] = useState(true);

  const handleTextChange = (event) => {
    setText(event.target.value);
    onTextChange(event, id);
  };

  const handleTextClick = () => {
    setIsVisible(false);
    onTextClick(id);
  };

  return (
    <div className="target_item">
      <div className="target_name">
        <div className="round orange"></div>
        {isVisible ? (
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            className="target-text"
            placeholder="Название цели" // Плейсхолдер для ввода текста
          />
        ) : (
          <p onClick={handleTextClick}>{text}</p>
        )}
      </div>
    </div>
  );
};

export default Target;