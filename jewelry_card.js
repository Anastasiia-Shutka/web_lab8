import React from 'react';
import { useNavigate } from 'react-router-dom';
import './jewelry_card.css';

const JewelryCard = ({ id, image, title, description, price }) => {
    const navigate = useNavigate();

    const handleViewMore = () => {
        navigate(`/item/${id}`); // Перенаправляємо на сторінку товару за його id
    };

    return (
        <div className="jewelry-card">
            <div className="jewelry-card-content">
                <img className="jewelry-image" src={image} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
                <p className="jewelry-price">Price: ${price}</p>
                <button className="view-more-button" onClick={handleViewMore}>View more</button> {/* Додаємо кнопку */}
            </div>
        </div>
    );
};

export default JewelryCard;
