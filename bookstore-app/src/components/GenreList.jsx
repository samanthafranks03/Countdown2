import React from 'react';
import Book from './Book';

function GenreList({ genre, books }) {
  return (
    <div className="genre">
      <h2>{genre}:</h2>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
}

export default GenreList;