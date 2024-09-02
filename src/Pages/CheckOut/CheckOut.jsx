import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const services = useLoaderData();
  const { title, price } = services;
  return (
    <div>
      <h2>CheckOut Services: {title}</h2>
      <p>price: {price}</p>
    </div>
  );
};

export default CheckOut;
