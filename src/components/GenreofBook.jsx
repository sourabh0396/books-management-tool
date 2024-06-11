// TypeOfBook.js
import React, { useState, useEffect } from 'react';
import './GenreofBook.css';

function GenreofBook() {
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/all-books`)
     .then((res) => res.json())
     .then((data) => {
        setBooks(data);
        setAllBooks(data);
      })
     .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedGenre === '') {
      setBooks(allBooks);
    } else {
      const filteredBooks = allBooks.filter((book) => book.category === selectedGenre);
      setBooks(filteredBooks);
    }
  }, [selectedGenre, allBooks]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div>
      <h1>Genre Of Book</h1>
      <div>
        <label htmlFor="genre">Select Genre:</label>
        <select className='form-control m-4 w-25' id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="">All Genres</option>
          <option value="History">History</option>
          <option value="Science">Science</option>
          <option value="Arts">Arts</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fiction">Fiction</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>booktitle</th>            
            <th>author</th>
            <th>typeofbook</th>
            <th>category</th>
            <th>publication</th>
            <th>noofpages</th>
            <th>priceofbook</th>
            <th>bookdescriptioon</th>
            <th>imageURL</th>

          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.Id}</td>
              <td>{book.booktitle}</td>
              <td>{book.author}</td>
              <td>{book.typeofbook}</td>
              <td>{book.category}</td>
              <td>{book.publication}</td>
              <td>{book.noofpages}</td>
              <td>{book.priceofbook}</td>
              <td>{book.bookdescriptioon}</td>
              <td><img src={book.imageURL} alt="" height='250px' width='150px'/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GenreofBook;
