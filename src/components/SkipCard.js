import React from 'react';
import './SkipCard.css';

const SkipCard = ({ skip, isSelected, onSelect }) => {
  return (
    <div 
      className={`skip-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(skip.id)}
    >
      <div className="skip-image-container">
        <img 
          // src={`/images/skip-${skip.size}.png`} 
          src={`/images/yarder-skip.jpg`} 
          alt={`${skip.size} yard skip`} 
          className="skip-image"
        />
        {skip.roadRestriction && (
          <div className="warning-badge">
            <span className="warning-icon">⚠️</span>
            <span className="warning-text">Not Allowed On The Road</span>
          </div>
        )}
      </div>
      
      <div className="skip-details">
        <h2 className="skip-size">{skip.size} yard</h2>
        <p className="hire-period">{skip.hirePeriod}-Day Hire</p>
        <p className="price">£{skip.price}</p>
      </div>
      
      <button className={`select-button ${isSelected ? 'selected' : ''}`}>
        {isSelected ? 'Selected' : 'Select This Skip'}
      </button>
    </div>
  );
};

export default SkipCard;
