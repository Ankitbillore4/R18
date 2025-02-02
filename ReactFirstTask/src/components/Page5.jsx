import React from "react";
import Button from "./Button";

const Page5 = () => {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      <div className="h-[80%] w-[90%] bg-[#ededed] flex justify-around p-20 gap-20">
        <div>
          <h1>CONTACT</h1>
        </div>
        <div>
          <h1 className="text-7xl font-light py-5">
            Let's start building your <br />
            brand's unique <br /> story together.
          </h1>
          <p className="text-xl font-light py-5">
            Want to see what a difference a strong brand can <br /> make?
            Request a consultation today.
          </p>
          <Button
            btn="Get in Touch"
            style="px-7 py-3 text-white bg-black rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Page5;
