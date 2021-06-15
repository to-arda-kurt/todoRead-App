import React from 'react';

const BookCardInfo = ({ name, author }) => {
  return (
    <div className="BookCardInfo">
      <h3>{name}</h3>
      <p>{author}</p>
    </div>
  );
};

export default BookCardInfo;
