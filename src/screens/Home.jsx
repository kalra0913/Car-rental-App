import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import CarsCardsSlider from '../components/CarsCardsSlider'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <CarsCardsSlider/>
      <Footer/>
    </div>
  )
}

export default Home
