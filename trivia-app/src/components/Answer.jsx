import React from 'react';

function Answer({ options, onSelect }) {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={() => onSelect(option)} >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Answer;