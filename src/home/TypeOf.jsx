import React, { useState, useEffect } from 'react';

const TypeOfBookMaster = () => {
  const [typesOfBook, setTypesOfBook] = useState([
    { Id: 1, Type: 'Novel' },
    { Id: 2, Type: 'Auto-biography' },
    { Id: 3, Type: 'Stories' },
    { Id: 4, Type: 'Poems' },
  ]);

  return (
    <div>
      <h2>Type of Book Master</h2>
      <ul>
        {typesOfBook.map((type) => (
          <li key={type.Id}>{type.Type}</li>
        ))}
      </ul>
    </div>
  );
};

const GenreOfBookMaster = () => {
  const [genresOfBook, setGenresOfBook] = useState([
    { Id: 1, Genre: 'History' },
    { Id: 2, Genre: 'Science' },
    { Id: 3, Genre: 'Arts' },
    { Id: 4, Genre: 'Science Fiction' },
    { Id: 5, Genre: 'Romance' },
  ]);

  return (
    <div>
      <h2>Genre of Book Master</h2>
      <ul>
        {genresOfBook.map((genre) => (
          <li key={genre.Id}>{genre.Genre}</li>
        ))}
      </ul>
    </div>
  );
};

const Book = ({ book }) => {
  return (
    <div className="book">
      <h2>{book.booktitle}</h2>
      <img src={book.imageURL} alt={book.booktitle} />
      <p>Author: {book.author}</p>
      <p>Type of Book: {book.typeofbook}</p>
      <p>Category: {book.category}</p>
      <p>Publication: {book.publication}</p>
      <p>No. of Pages: {book.noofpages}</p>
      <p>Price: {book.priceofbook}</p>
      <p>Description: {book.bookdescriptioon}</p>
    </div>
  );
};

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.Id} book={book} />
      ))}
    </div>
  );
};

const books = [
  {
    Id: "8",
    booktitle: "Wuthering Heights",
    author: "Emily Brontë",
    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Wuthering_Heights_title_page.jpg/220px-Wuthering_Heights_title_page.jpg",
    typeofbook: "Novel",
    category: "Romance",
    publication: "Thomas Cautley Newby",
    noofpages: 320,
    priceofbook: "$13.99",
    bookdescriptioon: "This classic novel tells the story of the tumultuous relationship between Catherine and Heathcliff, two individuals from different social classes, and their struggles with love, family, and identity."
  },
  // Add more books to the array
];

const TypeOf = () => {
  return (
    <div className="app">
      <h1>Book List</h1>
      <TypeOfBookMaster />
      <GenreOfBookMaster />
      <BookList books={books} />
    </div>
  );
};

export default TypeOf;