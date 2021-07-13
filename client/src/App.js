import React from "react";
import Navbar from './components/Navbar/Navigationbar';
import MainComponent from "./MainComponent";

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <MainComponent />
      <br/>
      <br/>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
