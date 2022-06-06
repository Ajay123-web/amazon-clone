import React from "react";
import { useStateValue } from "./StateProvider.js";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="flex flex-col items-center w-full bg-white justify-center m-[10px] p-[20px] max-h-[400px] min-w-[100px] z-50">
      {/* Product Info */}
      <div className="h-[100px] mb-[15px]">
        <p className="font-bold">{title}</p>
        <p className="mt-[5px]">
          <small className="font-semibold">$</small>
          <strong>{price}</strong>
        </p>
        {/* Rating */}
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt=""
        className="max-h-[200px] w-full object-contain mb-[15px]"
      />
      <button
        onClick={addToBasket}
        className="mt-[10px] bg-amber-400 border-[1px] border-amber-600 p-1 rounded-sm"
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
