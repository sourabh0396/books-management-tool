import React from 'react';
import BannerCard from '../home/BannerCard';
import { Grid } from 'swiper/modules';

const Banner = () => {
  return (
    <div className='align-items-cente' style={{width:'100%',backgroundColor:'pink',border:'none',borderRadius:'30px'}}>
        {/* className='flex w-full md:flex-row justify-between items-center gap-12 py-40 flex-col' */}
        <div  className='d-flex justify-content-around w-100 overflow-hidden align-items-center' style={{marginRight:"50px"}}>
            {/* Left */}
            <div className='text-black' style={{margin:"10px"}}>
                <h2 style={{fontWeight:'bold',fontSize:'40px'}}>Buy and Sell Your Books</h2><span className='font-bold'style={{fontWeight:'bold',color:'blue',fontSize:'30px'}}>for the Best Prices</span>
                <p className='font-bold' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odio,
                   nostrum dolore nihil incidunt eligendi maiores dolor qui adipisci,
                    minus mollitia nam illum beatae harum, provident perferendis hic magnam. Provident.</p>
                  <div className='d-flex m-2'>
                      <input type="search" name="search" id="search" placeholder='Search a Book' className='form-control w-25 mr-2'/>
                      <button className='btn btn-primary p-2'> Search </button>
                  </div>
            </div>
            {/* Right */}
            <div className='font-bold'>
              <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner