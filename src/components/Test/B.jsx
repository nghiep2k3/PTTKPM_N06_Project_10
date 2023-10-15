import React from 'react';

const BComponent = () => {
  const titleB = 'Đây là file B';
  const priceB = 2;

  const handleSaveToLocalStorage = () => {
    // Lưu title và price vào Local Storage
    localStorage.setItem('titleB', titleB);
    localStorage.setItem('priceB', priceB.toString());
    console.log('Dữ liệu từ file B đã được lưu vào Local Storage.');
  };

  return (
    <div>
      <p>Title B: {titleB}</p>
      <p>Price B: {priceB}</p>
      <button onClick={handleSaveToLocalStorage}>Lưu vào Local Storage</button>
    </div>
  );
};

export default BComponent;
