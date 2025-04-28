import React from 'react';
import './TourCard.css'; // Optional: Add styles for the card

function TourCard({ tour, onRemove }) {
  return (
    <div className="tour-card">
      <img src={tour.image} alt={tour.name} className="tour-image" />
      <div className="tour-details">
        <h3>{tour.name}</h3>
        <p>{tour.info}</p>
        <p><strong>Price:</strong> ${tour.price}</p>
        <button className="remove-btn" onClick={() => onRemove(tour.id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;