// Card.js
import React from 'react';
import './Card.css';

const Card = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="cardImage" className="card-image" />
    </div>
  );
};

export default Card;
