import React from "react";
import Navbar from './components/Navbar/Navigationbar';
import MainComponent from "./MainComponent";
import Footer from "./components/Footer/Footer";
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
