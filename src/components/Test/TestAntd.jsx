import React, { useState } from 'react';

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div>
      <button
        className={selectedButton === 'a' ? 'selected' : ''}
        onClick={() => handleButtonClick('a')}
      >
        Button A
      </button>
      <button
        className={selectedButton === 'b' ? 'selected' : ''}
        onClick={() => handleButtonClick('b')}
      >
        Button B
      </button>
      <button
        className={selectedButton === 'c' ? 'selected' : ''}
        onClick={() => handleButtonClick('c')}
      >
        Button C
      </button>
      <button
        className={selectedButton === 'd' ? 'selected' : ''}
        onClick={() => handleButtonClick('d')}
      >
        Button D
      </button>
    </div>
  );
};

export default ButtonGroup;
