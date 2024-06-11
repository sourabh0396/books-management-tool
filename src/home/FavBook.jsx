import React from 'react';
import FavBookImg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom';

const FavBook = () => {
  return (
    <div style={{marginTop:"40px",display:'grid',gridTemplateColumns:'6fr 6fr',gap:'60px',alignItems:'center',justifyContent:'space-between'}}
    className='px-4 lg:px-24 my-20'>
        <div>
            <img src={FavBookImg} alt="" height="500px" width="600px" />
        </div>
        <div style={{margin:'20px'}}>
            <h2 style={{fontWeight:'bold',fontSize:'50px',marginBottom:'30px'}} >Find Your Favourate <span style={{color:'blue'}}><br/> Book Here ! </span></h2>
            <p style={{textIndent:'50px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
         Asperiores quos, vero ullam ex praesentium, tempore iure incidunt a aperiam, 
         expedita consequatur corrupti nostrum excepturi maxime recusandae. Beatae soluta labore perferendis?</p>

            <div className='d-flex gap-5'>
                <div>
                    <h3 className='text-black font-bold'>8000+</h3>
                    <p className='text-dark font-bold'>Book Lisning</p>
                </div>
                <div>
                    <h3 className='text-black font-bold'>8000+</h3>
                    <p className='text-dark font-bold'>Register user</p>
                </div>
                <div>
                    <h3 className='text-black font-bold'>8000+</h3>
                    <p className='text-dark font-bold'>PDF Downlaod</p>
                </div>
            </div>
            <Link to="/shop"><button className='btn btn-primary w-50' style={{border:'none',padding:'10px',}}>Explore More Here</button></Link>
        </div>
        {/* <div>
            <h2>Type of Book</h2>
            
        Auto-biography, Novel, Stories, Poems
        </div> */}
    </div>
  )
}

export default FavBook