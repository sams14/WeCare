import React from 'react'
import HeroDescription from '../components/HeroSection/HeroDescription';
import HeroLabDescription from '../components/HeroSection/HeroLabDescription';
import Hero from '../components/HeroSection/Hero';
import HeroAppDownload from '../components/HeroSection/HeroAppDownload';
import Statistic from '../components/Statistics/Statistic';
import Features from '../components/Features/Features';

const Home = () => {
    return (
        <div>
            <Hero />
            <HeroDescription />
            <HeroLabDescription />
            <Features />
            <Statistic />
            <HeroAppDownload />
        </div>
    )
}

export default Home;
