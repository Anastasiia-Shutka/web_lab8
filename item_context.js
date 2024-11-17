import React from 'react';
import { useParams } from 'react-router-dom';

const ItemPage = () => {
  const { id } = useParams(); // Отримуємо id товару з URL

  // Тут можна знайти товар у списку catalogItems, використовуючи id
  // або завантажити дані з сервера чи Context

  return (
    <div>
      <h1>Item Details</h1>
      {/* Тут відображайте деталі товару */}
    </div>
  );
};

export default ItemPage;
