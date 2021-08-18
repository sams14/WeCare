import React from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


const Social = () => {
  console.log("Social");
  return (
        
      <div className="flex w-full flex-wrap mt-4 mb-8 content-center mt-20 py-5">
        <Feed />
        <Rightbar />
    </div>
  );
};

export default Social;
