import React, { useState, useRef, useEffect } from 'react';
import SkipCard from './SkipCard';
import './SkipCarousel.css';

const SkipCarousel = ({ skips, selectedSkipId, onSelectSkip }) => {
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    checkScrollPosition();
  
    if (selectedSkipId && carouselRef.current) {
      const selectedCard = document.getElementById(`skip-card-${selectedSkipId}`);
      if (selectedCard) {
        const containerRect = carouselRef.current.getBoundingClientRect();
        const cardRect = selectedCard.getBoundingClientRect();
        const scrollPosition = carouselRef.current.scrollLeft + cardRect.left - containerRect.left - (containerRect.width / 2) + (cardRect.width / 2);
        
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [selectedSkipId]);

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    
      setTimeout(checkScrollPosition, 400);
    }
  };

  return (
    <div className="carousel-container">
      {showLeftArrow && (
        <button 
          className="carousel-arrow left-arrow" 
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          &#10094;
        </button>
      )}
      
      <div 
        className="carousel" 
        ref={carouselRef}
        onScroll={checkScrollPosition}
      >
        {skips.map(skip => (
          <div 
            key={skip.id} 
            id={`skip-card-${skip.id}`}
            className="carousel-item"
          >
            <SkipCard 
              skip={skip} 
              isSelected={skip.id === selectedSkipId}
              onSelect={onSelectSkip}
            />
          </div>
        ))}
      </div>
      
      {showRightArrow && (
        <button 
          className="carousel-arrow right-arrow" 
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          &#10095;
        </button>
      )}
    </div>
  );
};

export default SkipCarousel;
