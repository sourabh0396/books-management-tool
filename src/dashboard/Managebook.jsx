import React  from 'react';
import './Managebook.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Managebook = () => {
    const [allBooks,setAllBooks]=useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
    },[])
    // Delete book
    const handleDelete = (id)=>{
        console.log(id);
        fetch(`http://localhost:5000/book/${id}`,{
            method:"DELETE",
        }).then(res => res.json()).then(data => {alert("Book is Deleted sucessfully")
            // setAllBooks(data);
        })
    }
  return (
    <div>
        <h2>Manage All Books</h2>
        <table >
        <thead>
          <tr>
            <th className='border border-black '>Id</th>
            <th className='border border-black '>booktitle</th>            
            <th className='border border-black '>author</th>
            <th className='border border-black '>typeofbook</th>
            <th className='border border-black '>category</th>
            <th className='border border-black '>publication</th>
            <th className='border border-black '>noofpages</th>
            <th className='border border-black '>priceofbook</th>
            <th className='border border-black '>bookdescriptioon</th>
            <th className='border border-black '>imageURL</th>
            <th className='border border-black '>Edit / Manage</th>

          </tr>
        </thead>
        <tbody>
          {allBooks.map((book) => (
            <tr key={book._id}>
              <td  className='border border-black border-solid'>{book.Id}</td>
              <td  className='border border-black border-solid'>{book.booktitle}</td>
              <td  className='border border-black border-solid'>{book.author}</td>
              <td  className='border border-black border-solid'>{book.typeofbook}</td>
              <td  className='border border-black border-solid'>{book.category}</td>
              <td  className='border border-black border-solid'>{book.publication}</td>
              <td  className='border border-black border-solid'>{book.noofpages}</td>
              <td  className='border border-black border-solid'>{book.priceofbook}</td>
              <td  className='border border-black border-solid' style={{overflow:'hidden'}}>{book.bookdescriptioon}</td>
              <td  className='border border-black border-solid'><img src={book.imageURL} alt="" height='250px' width='150px'/></td>
              <td  className='border border-black border-solid'>
                <Link to={`http://localhost:5173/admin/dashboard/edit-book/${book._id}`}>
                <span className='bi bi-pen-fill btn btn-warning m-1'>Edit</span>
                </Link>
                <button onClick={()=> handleDelete(book._id)} className='bi bi-trash btn btn-danger m-1'>Delete</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Managebook