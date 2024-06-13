'use client';

import React, { useState } from 'react';
import Star from './Star';

export const StarRating = ({ maxRatting, color, size }) => {
  const [userRatting, setUserRatting] = useState(0);
  const [temp, setTemp] = useState(0);

  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: maxRatting }, (_, i) => (
        <Star
          className="cursor-pointer"
          key={i}
          full={temp ? temp >= i + 1 : userRatting >= i + 1}
          size={size}
          onRate={() => {
            setUserRatting(i + 1);
          }}
          onHoverIn={() => setTemp(i + 1)}
          onHoverOut={() => setTemp(0)}
          color={color}
        />
      ))}
    </div>
  );
};
