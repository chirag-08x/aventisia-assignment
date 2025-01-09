import React from "react";
import Header from "./Header";
import ModelTable from "./ModelTable";

const Hero = () => {
  return (
    <div className="grid grid-rows-[auto_1fr]">
      <Header />
      <ModelTable />
    </div>
  );
};

export default Hero;
