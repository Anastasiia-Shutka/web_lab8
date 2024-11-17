// HomePage.js
import React, { useState } from 'react';
import JewelryCard from './jewelry_card';
import StoreDescription from './store_description';
import './home_page.css';

const HomePage = () => {
  const jewelryItems = [
    { 
      id: 1, 
      image: '/images/ring.png', 
      title: 'Silver Ring', 
      description: 'Elegant silver ring with diamonds', 
      price: 530, 
      details: "This silver ring is crafted with high-quality materials and designed to last. It is perfect for any formal occasion or as an everyday piece.",
      care: "To keep your ring in perfect condition, avoid contact with harsh chemicals. Clean it with a soft cloth after each use.",
      warranty: "We offer a one-year warranty on this ring. Contact us if you experience any issues with the product."
    },
    { 
      id: 2, 
      image: '/images/necklace.png', 
      title: 'Gold Necklace', 
      description: 'Beautiful gold necklace', 
      price: 210, 
      details: "This elegant gold necklace is a timeless piece. It is designed to complement both casual and formal outfits.",
      care: "Avoid exposure to water and perfume. Store it in a dry place to maintain its shine.",
      warranty: "This necklace comes with a two-year warranty. Reach out if you need assistance with it."
    },
    { id: 3, image: '/images/pearl_bracelet.png', title: 'Pearl Bracelet', description: 'Classic pearl bracelet', price: 120 },
    { id: 4, image: '/images/earrings.png', title: 'Aquamarine Earrings', description: 'Aquamarine gemstone earrings, perfect for any occasion', price: 420 },
    { id: 5, image: '/images/sapphire_necklace.png', title: 'Sapphire Necklace', description: 'Elegant sapphire pendant on a delicate silver chain', price: 350 },
    { id: 6, image: '/images/diamond_ring.png', title: 'Diamond Ring', description: 'Luxury diamond ring', price: 1500 },
    { id: 7, image: '/images/gold_bracelet.png', title: 'Gold Bracelet', description: 'Stylish gold bracelet', price: 600 },
    { id: 8, image: '/images/platinum_earrings.png', title: 'Platinum Earrings', description: 'Elegant platinum earrings', price: 800 },
    { id: 9, image: '/images/emerald_ring.png', title: 'Emerald Ring', description: 'Luxury emerald ring', price: 700, metal: 'Gold', gemstone: 'Emerald' },
    { id: 10, image: '/images/diamond_necklace.png', title: 'Diamond Necklace', description: 'Shiny diamond necklace', price: 1200, metal: 'Platinum', gemstone: 'Diamond' },
  ];

  const [visibleItems, setVisibleItems] = useState(5); // Початково відображаємо 5 елементів

  // Функція для завантаження ще одного ряду карток (5 елементів)
  const loadMoreItems = () => {
    setVisibleItems(prev => prev + 5); // Збільшуємо кількість відображених елементів на 5
  };

  return (
    <div className="home-page">
      <StoreDescription />
      <div className="jewelry-list">
        {jewelryItems.slice(0, visibleItems).map((item) => (
          <JewelryCard
            key={item.id}    // уникаємо дублювання id
            id={item.id}      // передаємо id до JewelryCard
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      {/* Кнопка для завантаження додаткових елементів */}
      {visibleItems < jewelryItems.length && (
        <button className="view-more-button" onClick={loadMoreItems}>View More</button>
      )}
    </div>
  );
};

export default HomePage;
