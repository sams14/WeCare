import React from "react";
import Navbar from './components/Navbar/Navigationbar';
import MainComponent from "./MainComponent";

const App = () => {
    return (
        <div>
            <Navbar />
            <MainComponent />
            {/* <Footer /> */}
        </div>
    );
};

export default App;
