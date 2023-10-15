import React from 'react';

const AComponent = () => {
  const titleA = 'Đây là file A';
  const priceA = 15;

  const handleSaveToLocalStorage = () => {
    // Lưu title và price vào Local Storage
    localStorage.setItem('titleA', titleA);
    localStorage.setItem('priceA', priceA.toString());
    console.log('Dữ liệu từ file A đã được lưu vào Local Storage.');
  };

  return (
    <div>
      <p>Title A: {titleA}</p>
      <p>Price A: {priceA}</p>
      <button onClick={handleSaveToLocalStorage}>Lưu vào Local Storage</button>
    </div>
  );
};

export default AComponent;
