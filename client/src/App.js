import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navigationbar';
import MainComponent from "./MainComponent";

const App = () => {
    return (
        <div>
            <Navbar />
            <MainComponent />
            <Footer />
        </div>
    );
};

export default App;
