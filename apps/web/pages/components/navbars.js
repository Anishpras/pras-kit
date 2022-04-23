import React from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";

const navbars = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <Nav />
      <div className="px-4 flex justify-center items-center my-2">
        <Header link="/components" name="Navbars" />
      </div>

      <div className="w-full py-8 flex flex-wrap justify-center items-center gap-8">
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default navbars;
