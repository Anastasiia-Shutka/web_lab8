import React from 'react';
import { useParams } from 'react-router-dom';
import './item_page.css';

const ItemPage = ({ items }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default ItemPage;