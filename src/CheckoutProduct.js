import React from "react";
import { useStateValue } from "./StateProvider.js";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="flex items-start my-[20px]">
      <img src={image} alt="" className="h-[180px] w-[180px] object-contain" />
      <div className="ml-[20px]">
        <p className="font-bold">{title}</p>
        <p className="mt-[5px]">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button
          onClick={removeFromBasket}
          className="mt-[10px] bg-amber-400 border-[1px] border-amber-600 p-1 rounded-sm"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
