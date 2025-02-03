import React from "react";
// import InvensionStdio from './InvensionStdio'

const Marketing = () => {
  const data = [
    {
      img: "/images/MarketImg1.webp",
      h1: "Invision Studio",
      Button: "Marketing",
    },
    { img: "/images/MarketImg2.webp", h1: "Square Media", Button: "Branding" },
    {
      img: "/images/MarketImg3.webp",
      h1: "Vision Design",
      Button: "Social Media",
    },
    { img: "/images/MarketImg4.webp", h1: "Design Bros", Button: "Branding" },
  ];

  return (
    <div className="flex flex-wrap  gap-10 p-4">
      {data.map((item) => {
        return (
          <div className="h-[70vh] w-[45vw]  flex flex-col gap-2">
            <img className="h-[90%] w-full " src={`${item.img}`} alt="" />
            <div className="h-10 w-full  flex items-center justify-between p-4 ">
              <h1>{item.h1}</h1>
              <h3 className="px-4 py-1 border-1 border-solid border-black rounded-[40px]">
                {item.Button}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Marketing;
