import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './catalog.css';

const Catalog = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({ metal: '', gemstone: '' });
  const [sortOrder, setSortOrder] = useState('');
  const [visibleItems, setVisibleItems] = useState(5); // Початково відображаємо 5 елементів
  const navigate = useNavigate();

  const catalogItems = [
    { id: 1, image: '/images/ring.png', title: 'Silver Ring', description: 'Elegant silver ring with diamonds', price: 530, metal: 'Silver', gemstone: 'Diamond' },
    { id: 2, image: '/images/necklace.png', title: 'Gold Necklace', description: 'Beautiful gold necklace', price: 210, metal: 'Gold', gemstone: 'None' },
    { id: 3, image: '/images/pearl_bracelet.png', title: 'Pearl Bracelet', description: 'Classic pearl bracelet', price: 120, metal: 'Silver', gemstone: 'Pearl' },
    { id: 4, image: '/images/earrings.png', title: 'Aquamarine Earrings', description: 'Aquamarine gemstone earrings, perfect for any occasion', price: 420, metal: 'Silver', gemstone: 'Aquamarine' },
    { id: 5, image: '/images/sapphire_necklace.png', title: 'Sapphire Necklace', description: 'Elegant sapphire pendant on a delicate silver chain', price: 350, metal: 'Silver', gemstone: 'Sapphire' },
    { id: 6, image: '/images/diamond_ring.png', title: 'Diamond Ring', description: 'Luxury diamond ring', price: 1500, metal: 'Platinum', gemstone: 'Diamond' },
    { id: 7, image: '/images/gold_bracelet.png', title: 'Gold Bracelet', description: 'Stylish gold bracelet', price: 600, metal: 'Gold', gemstone: 'None' },
    { id: 8, image: '/images/platinum_earrings.png', title: 'Platinum Earrings', description: 'Elegant platinum earrings', price: 800, metal: 'Platinum', gemstone: 'None' },
    { id: 9, image: '/images/emerald_ring.png', title: 'Emerald Ring', description: 'Luxury emerald ring', price: 700, metal: 'Gold', gemstone: 'Emerald' },
    { id: 10, image: '/images/diamond_necklace.png', title: 'Diamond Necklace', description: 'Shiny diamond necklace', price: 1200, metal: 'Platinum', gemstone: 'Diamond' },
    // Додайте більше елементів за необхідністю
  ];

  // Пошук, фільтрація та сортування
  const filteredItems = catalogItems
    .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter(item => (filter.metal ? item.metal === filter.metal : true))
    .filter(item => (filter.gemstone ? item.gemstone === filter.gemstone : true));

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    }
    return 0;
  });

  const handleViewMore = (id) => {
    navigate(`/item/${id}`);
  };

  // Функція для завантаження ще одного ряду карток
  const loadMoreItems = () => {
    setVisibleItems(prev => prev + 5); // Збільшуємо кількість відображених елементів на 5
  };

  return (
    <div className="catalog-page">
      <h1>Our Products</h1>

      {/* Поле пошуку */}
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Фільтрація за металом */}
      <select onChange={(e) => setFilter({ ...filter, metal: e.target.value })}>
        <option value="">All Metals</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
        <option value="Platinum">Platinum</option>
      </select>

      {/* Фільтрація за каменем */}
      <select onChange={(e) => setFilter({ ...filter, gemstone: e.target.value })}>
        <option value="">All Gemstones</option>
        <option value="Diamond">Diamond</option>
        <option value="Pearl">Pearl</option>
        <option value="Aquamarine">Aquamarine</option>
        <option value="Sapphire">Sapphire</option>
        <option value="Emerald">Emerald</option>
        <option value="None">No Gemstone</option>
      </select>

      {/* Сортування за ціною */}
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>

      {/* Список товарів */}
      <div className="catalog-list">
        {sortedItems.slice(0, visibleItems).map((item) => (
          <div key={item.id} className="catalog-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleViewMore(item.id)}>View more</button>
          </div>
        ))}
      </div>

      {/* Кнопка для завантаження додаткових елементів */}
      {visibleItems < sortedItems.length && (
        <button className="view-more-button" onClick={loadMoreItems}>View More</button>
      )}
    </div>
  );
};

export default Catalog;
