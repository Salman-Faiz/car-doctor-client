import React from "react";

const ServicesCard = ({ service }) => {
  const { title, img, price } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl ">
      <figure className="px-6 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{title}</h2>
        <p>price: {price}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
