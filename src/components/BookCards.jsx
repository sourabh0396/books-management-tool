import React from 'react'
import  { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartShopping } from 'react-icons/fa6'
// import './styles.css';
// import required modules
import { Pagination } from 'swiper/modules';

const BookCards = ({headline, books}) => {
    console.log(books);
  return (
    <div >
        <h2 className='text-center font-bold text-black my-5'>{headline}</h2>
                                        {/* cards */}
        <div>
        <Swiper 
        slidesPerView={1} 
        spaceBetween={10} 
        pagination={{clickable: true, }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full w-100">
        {
        books.map(book => <SwiperSlide key={book._id} height="350px" width="200px" style={{display:'flex',marginBlock:"20px"}}>
                <Link to={`/book/${book._id}`}> 
                <div>
                                    <div className='relative'>
                    {/* <img src={book.imageURL} alt="" /> */}
                        <div className='absolute top-3 right-3'>
                            <span className='bi bi-cart-check-fill position-relative btn-warning'></span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>{book.booktitle}</h3>
                            <p>{book.author}</p>
                        </div>
                        <div>
                            <p>{book.priceofbook}</p>
                        </div>
                </div>
                </div>
                </Link>
            </SwiperSlide>)
            }

      </Swiper>
        </div>
    </div>
  )
}

export default BookCards