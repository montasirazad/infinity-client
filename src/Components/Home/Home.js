import React from 'react';
import BannerOne from '../shared/Banners/Banner1/BannerOne';
import BannerTwo from '../shared/Banners/Banner2/BannerTwo';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';



const Home = () => {
    return (
        <div>
            <Header />
            <BannerOne />
            <BannerTwo />

            <Footer />

        </div>
    );
};

export default Home;