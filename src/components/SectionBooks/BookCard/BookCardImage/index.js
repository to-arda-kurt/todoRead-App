import React from 'react';

const BookCardImage = ({ cover, name }) => {
  return (
    <div className="BookCardImage">
      <img src={cover} alt={name} />
    </div>
  );
};

export default BookCardImage;
