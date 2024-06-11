import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const EditBook = () => {
    const {id} =useParams();
    const {Id,booktitle,author,imageURL,typeofook,category,publication,noofpages,priceofbook,bookdescriptioon} = useLoaderData();

    const bookCategory=["History", "Science", "Arts", "Science Fiction","Fiction"]
    const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategory[0]);
    const handleChangeSelectedValue =(event)=>{
        console.log(event.target.value);
        selectedBookCategory(event.target.value);
    }

    const bookType=["Auto-biography", "Novel", "Stories", "Poems"]
    const [selectedBookType, setSelectedBookType] = useState (bookType[0]);
    const handleChangeSelectedType =(event)=>{
        console.log(event.target.value);
        selectedBookType(event.target.value);
    }

// handle book submision
    const handleUpdate  =(event)=>{
        event.preventDefault();
        const form = event.target;
        
        
        // const Id = form.Id.value;
        const booktitle = form.booktitle.value;
        const author = form.author.value;
        const imageURL = form.imageURL.value;
        const typeofook = form.typeofook.value;
        const category = form.category.value;
        const publication = form.publication.value;
        const noofpages = form.noofpages.value;
        const priceofbook = form.priceofbook.value;
        const bookdescriptioon = form.bookdescriptioon.value;
        // console.log(booktitle)

        const UpdateBookObj={booktitle,author,imageURL,typeofook,category,publication,noofpages,priceofbook,bookdescriptioon}
        // console.log(bookObj);

        // Send data to db
        fetch(`http://localhost:5000/book/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(UpdateBookObj)
        }).then(res => res.json()).then(data =>{
            alert("Book is Updated Sucessfully ")
        })
    }
  return (
    <div style={{width:'100%',margin:'30px'}}>
        <h2>Update / Edit the Book</h2>
        <form onSubmit={handleUpdate} className="flex max-w-md flex-col gap-4">
        <div className='w-100'>
            <dl className=''>
                <dt>Id</dt>
                <dt><input defaultValue={Id} type="text" name="Id" id="Id" placeholder='above 100 id select' className='form-control' /></dt>
                <dt>Book Name</dt>
                <dd><input defaultValue={booktitle} type="text" className='form-control' placeholder="Book Name" required name="booktitle" id="booktitle" /></dd>
                <dt>Author Name</dt>
                <dd><input defaultValue={author} type="text" className='form-control' placeholder="Author Name" required name="author" id="author" /></dd>
                <dt>imageURL</dt>
                <dd><input defaultValue={imageURL} type="text" className='form-control' placeholder="imageURL" required name="imageURL" id="imageURL" /></dd>
                <dt>Type Of Book</dt>
                <dd>
                    {/* <input type="text" className='form-control' placeholder="typeofbook" required name="typeofbook" id="typeofbook" /> */}
                    <select defaultValue={typeofook} value={selectedBookType} onChange={handleChangeSelectedType} name="typeofook" id="typeofook" className='form-control'>
                        {
                            bookType.map((option)=> <option key={option} value={option}>{option}</option>)
                        }
                        
                    </select>
                </dd>
                <dt>Genre of Book / Category</dt>
                <dd>
                    {/* <input type="text" className='form-control' placeholder="Genre of Book / category" required name="category" id="category" /> */}
                    <select defaultValue={category} value={selectedBookCategory} onChange={handleChangeSelectedValue} name="category" id="category" className='form-control'>
                        {
                            bookCategory.map((option)=> <option key={option} value={option}>{option}</option>)
                        }
                        
                    </select>
                </dd>
                <dt>Publication</dt>
                <dd><input defaultValue={publication} type="text" className='form-control' placeholder="publication" required name="publication" id="publication" /></dd>
                <dt>No Of Pages</dt>
                <dd><input defaultValue={noofpages} type="text" className='form-control' placeholder="noofpages" required name="noofpages" id="noofpages" /></dd>
                <dt>Price Of Book</dt>
                <dd><input defaultValue={priceofbook} type="text" className='form-control' placeholder="priceofbook" required name="priceofbook" id="priceofbook" /></dd>
                
                <dt>Book Descriptioon</dt>
                <dd><textarea defaultValue={bookdescriptioon} type="text" className='form-control' placeholder=" Write Your Book Descriptioon" required name="bookdescriptioon" id="bookdescriptioon"></textarea></dd>
                {/* <dt>Book PDF</dt>
                <dd><input type="text" className='form-control' placeholder="pdf Book URL" required name="bookpdf" id="bookpdf"/></dd> */}
            </dl>
            <button className='btn btn-warning w-100'>Update this Book</button>
        </div>
        {/* <div>
            <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
            </div>
            <input id="password1" type="password" className='form-control w-100' required />
        </div> */}
        </form>
    </div>
  )
}

export default EditBook