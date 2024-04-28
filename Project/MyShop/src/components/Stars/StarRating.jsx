import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => handleClick(ratingValue)}
            style={{ color: ratingValue <= rating ? 'gold' : 'grey', cursor: 'pointer' }}
          >
            {ratingValue <= rating ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;