import React, { useState } from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';


const Shop = () => {
  const [books,setBooks] =useState([]);

  useState(()=>{
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  },[])
  return (
    <div>
      <h2 style={{font:'bold',textAlign:'center'}}>All Books Here</h2>
      <div style={{display:'grid',gridTemplateColumns:'3fr 3fr 3fr 3fr',gap:'40px',margin:'40px'}}>
        {
          books.map(book => <Card
            className="max-w-sm" 
            // imgAlt="Meaningful alt text for an image that is not purely decorative"
            // imgSrc="/images/blog/image-1.jpg"
          >
            <img src={book.imageURL} alt="" className='w-100' height='350px'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.booktitle}</p>
            </h5>
            <p style={{height:'60px',overflow:'scroll'}} className="font-normal text-gray-700 dark:text-gray-400">
              {book.bookdescriptioon}
            </p>
            <Link to={`http://localhost:5173/singlebook/${book._id}`}><button className='btn btn-primary w-100'>Get Getails of Book</button></Link>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop