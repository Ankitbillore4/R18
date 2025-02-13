import React from "react";

const BottomCard = () => {
  const data = [
    {
      h1: "Helping Brands Stand Out",
      h2: "Bold Moves,Big Impact",
      color: "#F1F5F9",
    },
    {
      h1: "How We Work with Our Clients",
      h2: "Honesty is the Best Policy.",
      color: "#F1F6F5",
    },
    {
      h1: "Collaboration is Key",
      h2: "Building Strong Partnerships.",
      color: "#F8F8F8",
    },
    {},
    {},
    {},
    {},
    { h1: "Our Approach", h2: "Achieving Real Results.", color: "#F8F8F8" },
    {
      h1: "Our Philosophy",
      h2: "Building Trust, Not Pitching.",
      color: "#F8EDE3",
    },
    {
      h1: "Helping Brands Stand Out",
      h2: "Bold Moves,Big Impact",
      color: "#FFFAE7",
    },
  ];
  return data.map((item,index) => {
    return (
      <div>
        <div
          className="h-96 w-68 flex flex-col px-10 justify-between py-10"
          style={{ backgroundColor: item.color }}
        >
          <h1 className="text-start font-light w-33">{item.h1}</h1>
          <h2 className="text-3xl font-light w-50">
            {item.h2} <br />{" "}
          </h2>
        </div>
      </div>
    );
  });
};
    
export default BottomCard;
