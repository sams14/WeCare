import React from 'react'
import HeroDescription from '../components/HeroSection/HeroDescription';
import Hero from '../components/HeroSection/Hero';
import  HeroAppDownload  from '../components/HeroSection/HeroAppDownload';
import Statistic from '../components/Statistics/Statistic';
import Footer from '../components/Footer/Footer';
import Features from '../components/Features/Features';

const Home = () => {
    return (
        <div>
            <Hero />
            <HeroDescription />
            <HeroAppDownload/>
            <Statistic/>
            <Footer/>
            <Features />
        </div>
    )
}

export default Home;
