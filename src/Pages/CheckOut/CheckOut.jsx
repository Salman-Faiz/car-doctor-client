import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const services = useLoaderData();
  const { title, price, _id, img } = services;
  const { user } = useContext(AuthContext);

  const handleCheckOut = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const price = form.price.value;

    const CheckOutOrder = {
      CustomerName: name,
      Email: email,
      PurchaseDate: date,
      price: price,
      id: _id,
      service: title,
      Image: img,
    };
    console.log(CheckOutOrder);
    // post data to server
    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(CheckOutOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Your response is being recorded",
            text: "That thing is still around?",
            icon: "question",
          });
        }
      });
  };
  return (
    <div>
      <h2>CheckOut Services: {title}</h2>
      <p>price: {price}</p>

      <form onSubmit={handleCheckOut} className="card-body ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Customer Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Order Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price"
              name="price"
              className="input input-bordered"
              required
              defaultValue={price}
            />
          </div>
          <div className="col-span-2 lg:h-32 border-2 rounded-xl p-3">
            <textarea name="message" id="" placeholder="message"></textarea>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-error btn-block font-bold text-xl"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
