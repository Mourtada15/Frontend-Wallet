import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript

import CarouselMain from '../components/CarouselMain';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <Header/>
    <h2 className='container text-info text-center m-3 p-3'>Welcome to CoinConnect: Your Gateway to Seamless Transactions! </h2>
    <CarouselMain/>

    <Footer />
    </>
  );
}

export default Home;
