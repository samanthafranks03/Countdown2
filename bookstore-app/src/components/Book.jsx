import React from 'react';

function Book({ book }) {
  return (
    <div className="book">
      <p>{book.title}, {book.author}, ${book.price.toFixed(2)}</p>
    </div>
  );
}

export default Book;