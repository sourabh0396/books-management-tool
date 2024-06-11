import React from 'react'
import { Link } from 'react-router-dom';
const PromoBanner = () => {
  return (
    <div style={{marginTop:'20px',backgroundColor:' #ccff99'}}>
        <div>
            <div>
                <h2 style={{alignItems:'center'}}>Genre of Book 
                    {/* History, Science, Arts, Science Fiction */}

                </h2>
                <Link to="/shop"><button className='btn btn-primary w-25'>boosk</button></Link>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner;
