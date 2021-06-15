import React from 'react';

const BookCardInfoExtra = ({ publisher, page, language }) => {
  return (
    <div className="BookCardInfoExtra">
      <p>
        <span>Publisher </span>: {publisher}
      </p>
      <p>
        {language}, {page} pages.
      </p>
    </div>
  );
};

export default BookCardInfoExtra;
