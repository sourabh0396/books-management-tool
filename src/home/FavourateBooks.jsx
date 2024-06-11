import React, { useState } from 'react'
import BookCards from '../components/BookCards';

const FavourateBooks = () => {
    const [books, setBooks]=useState([]);
    useState(()=>{
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,8)))
    },[]);

  return (
    <div>
      <BookCards books={books} headline="Best seller Books"/>
    </div>
  )
}

export default FavourateBooks