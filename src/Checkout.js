import React from "react";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider.js";
import CheckoutProduct from "./CheckoutProduct.js";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const extractName = (email) => {
    let name = email.slice(0, email.indexOf("@"));
    return name.toUpperCase();
  };
  return (
    <div className="flex p-[20px] bg-white max-h-max">
      {/* Left */}
      <div>
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="w-full mb-[10px]"
        />
        <div>
          <h1 className="text-xl px-[10px]">
            <i>Hello, </i>
            <strong className="text-amber-500">
              {extractName(user?.email)}
            </strong>
          </h1>
          <h1 className="mr-[10px] p-[10px] text-xl font-bold border-b-[1px] border-gray-300">
            Your Shopping Basket
          </h1>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
