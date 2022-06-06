import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider.js";
import { getBasketTotal } from "./reducer.js";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="flex flex-col justify-between w-[300px] h-[150px] p-[20px] border-[1px] border-slate-200 rounded-sm bg-slate-100">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="flex items-center">
              <input type="checkbox" className="mr-[5px]" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="bg-amber-400 w-full h-[30px] border-[1px] border-amber-600 mt-[10px] rounded-sm">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
