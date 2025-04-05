import { useState } from 'react'
import GenreList from './components/GenreList';
import Button from './components/Button';
import './App.css'

const bookData = {
  "fiction": [
    { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00 },
    { "title": "1984", "author": "George Orwell", "price": 8.50 },
    { "title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80 }
  ],
  "non-fiction": [
    { "title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00 },
    { "title": "In Cold Blood", "author": "Truman Capote", "price": 12.00 },
    { "title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00 }
  ],
  "children": [
    { "title": "Charlotte's Web", "author": "E.B. White", "price": 5.00 },
    { "title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00 },
    { "title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00 }
  ]
};

function App() {
  const [genresShown, setGenresShown] = useState({
    fiction: true,
    "non-fiction": true,
    children: true,
  });

  const changeVisibility = (genre) => {
    const newGenresShown = { ...genresShown };
    newGenresShown[genre] = !newGenresShown[genre];
    setGenresShown(newGenresShown);
  };
  
  return (
    <div className="Bookstore">
      <h1>Online Bookstore</h1>

      {Object.keys(bookData).map((genre) => (
        <Button
          key={genre}
          genre={genre}
          changeVisibility={changeVisibility}
          isVisible={genresShown[genre]}
        />
      ))}

      {Object.keys(bookData).map((genre) => (
        genresShown[genre] && (
          <GenreList
            key={genre}
            genre={genre}
            books={bookData[genre]}
          />
        )
      ))}
    </div>
  );
}

export default App;