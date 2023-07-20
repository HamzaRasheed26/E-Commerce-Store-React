import React from 'react'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Navbar from './navbar'
import Footer from './footer'
import ProductCards from './productCards';


export default function Home() {
  return (
    <div >
      <Navbar />
      
        <h2
          style={{
            color: '#100f3d',
            fontWeight: 'bold',
            fontFamily: 'bahnschrift',
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '35px',
          }} >
          Previous Products
        </h2>

        <ProductCards/>
        
      <Footer />
    </div>
  )
}
