import React from "react";
import SelectWork from "./SelectWork";
import Button from "./Button";

const Page6 = () => {
  const data = [
    {
      img: "./public/images/ProdectImg1.webp",
      p: "The Importance of a Strong Brand Positioninq",
      h1: "Read More",
    },
    {
      img: "./public/images/ProdectImg2.webp",
      p: "The Importance of a Strong Brand Positioninq",
      h1: "Read More",
    },
    {
      img: "./public/images/ProdectImg3.webp",
      p: "The Importance of a Strong Brand Positioninq",
      h1: "Read More",
    },
  ];
  return (
    <div className=" w-full bg-red-500">
      <h1 className="border-b-1 py-5">BLOG</h1>
      <div className="flex items-center justify-between px-10">
        <SelectWork text="Insights on Branding" />
        <Button btn="See All" style="w-[15vh] h-[6vh] border-1  rounded-full" />
      </div>
      {data.map((item, index) => {
        return (
          <div className="h-[55vh] w-[45vh] bg-green-200 mt-5">
            <img className="h-[70%] w-full" src={item.img} alt="" />
            <p className="text-xl ">{item.p}</p>
            <h1 className="pt-2">{item.h1}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Page6;
