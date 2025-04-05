import React from 'react';

function Button({ genre, changeVisibility, isVisible }) {
  return (
    <button onClick={() => changeVisibility(genre)}>
      {isVisible ? `Hide ${genre}` : `Show ${genre}`}
    </button>
  );
}

export default Button;