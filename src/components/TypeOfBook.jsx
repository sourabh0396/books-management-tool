// TypeOfBook.js
import React, { useState, useEffect } from 'react';
import './TypeOfBook.css';

function TypeOfBook() {
  const [books, setBooks] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/all-books`)
      .then((res) => res.json())
      .then((data) => setAllBooks(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedType === '') {
      setBooks(allBooks);
    } else {
      const filteredBooks = allBooks.filter((book) => book.typeofbook === selectedType);
      setBooks(filteredBooks);
    }
  }, [selectedType, allBooks]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };
  return (
    <div>
      <h1>Type Of Book</h1>
      <div>
      <label htmlFor="type">Select Type:</label>
        <select className='form-control m-4 w-25' id="type" value={selectedType} onChange={handleTypeChange}>
          <option value="">All Types</option>
          <option value="Auto-biography">Auto-biography</option>
          <option value="Novel">Novel</option>
          <option value="Stories">Stories</option>
          <option value="Poems">Poems</option>
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

export default TypeOfBook;
