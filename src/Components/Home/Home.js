import React from 'react';
import Products from '../Products/Products';
import BannerOne from '../shared/Banners/Banner1/BannerOne';
import BannerTwo from '../shared/Banners/Banner2/BannerTwo';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './Home.css';


const Home = () => {
    return (
        <div className='home-div'>
            <Header />
            <BannerOne />
            {/* <Products /> */}
            <BannerTwo />
            <Footer />

        </div>
    );
};

export default Home;