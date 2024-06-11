import React from 'react'
import Banner from '../components/Banner'
import FavourateBooks from './FavourateBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'

const Home = () => {
  return (
    <div>
        <Banner/>
        <FavourateBooks/>
        <FavBook/>
        <PromoBanner/>
    </div>
  )
}

export default Home