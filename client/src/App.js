import React from "react";
import Navbar from './components/Navbar/Navigationbar';
import MainComponent from "./MainComponent";
import Footer from "./components/Footer/Footer";
import {useLocation} from "react-router-dom";

const App = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div>
            {location.pathname === '/dashboard' ?" " :<Navbar />}
            <MainComponent />
            {location.pathname === '/dashboard' ?" " :<Footer />}
        </div>
    );
};

export default App;
