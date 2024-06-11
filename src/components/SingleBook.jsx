import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './SingleBook.css';

const SingleBook = () => {
    const {id} =useParams();
    const {Id,booktitle,author,imageURL,typeofook,category,publication,noofpages,priceofbook,bookdescriptioon} = useLoaderData();
  return (
    <div id='main'>
        <h2> See Book Details</h2>
        <div className="book-card">
          <div className='imagestyle'>
          <img src={imageURL} alt={booktitle} />
          </div>
          <div className="book-details">
            <h2>{booktitle}</h2>
            <p><strong>Book ID:</strong> {Id}</p>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Type:</strong> {typeofook}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Publication:</strong> {publication}</p>
            <p><strong>No. of Pages:</strong> {noofpages}</p>
            <p><strong>Price:</strong> {priceofbook}</p>
            <p>{bookdescriptioon}</p>
          </div>
    </div>
    </div>
  )
}

export default SingleBook