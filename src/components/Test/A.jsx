import React, { useEffect, useState } from "react";
const AComponent = () => {
  const [tours, setTours] = useState([]);

  // Lấy danh sách tour từ Local Storage khi tải ứng dụng
  useEffect(() => {
    const storedTours = localStorage.getItem("tours");
    if (storedTours) {
      setTours(JSON.parse(storedTours));
    }
  }, []);

  // Thêm một tour vào danh sách và lưu lại vào Local Storage
  const handleAddTour = () => {
    const newTour = {
      id: tours.length + 1,
      title: `Đây là Tour ${tours.length + 1}`,
    };
    const updatedTours = [...tours, newTour];
    setTours(updatedTours);
    localStorage.setItem("tours", JSON.stringify(updatedTours));
  };

  const handleDeleteTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
    localStorage.setItem('tours', JSON.stringify(updatedTours));
  };

  if(tours <= 0) {
    return(
      <div>
          <p>Không có tour </p>
      </div>
    )
  }

  return (
    <div>
      <h1>Thông tin Tour</h1>
      <button onClick={handleAddTour}>Thêm( đây là nút của A)</button>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>
            <p>ID: {tour.id}</p>
            <p>Title: {tour.title}</p>
            <button onClick={() => handleDeleteTour(tour.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AComponent;
