import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
import { auth } from "./firebase.js";
//import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuth = () => {
    if (user) {
      auth.signOut();
      window.location.reload();
    }
  };
  return (
    <div className="bg-black flex items-center w-full h-[60px] position-fixed">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="w-[100px] mx-[20px] mt-[18px] object-contain cursor-pointer"
          alt=""
        />
      </Link>

      <div className="flex-1 flex items-center">
        <input
          className="h-[24px] w-[65vw] p-[10px] outline-none text-left rounded-l-sm"
          type="text"
        />

        <SearchIcon className="bg-orange-500 p-[5px] rounded-r-sm" />
      </div>

      <div className="flex-1 flex items-center justify-evenly">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="flex flex-col mx-[10px]">
            <div className="text-gray-400 text-sm">{user ? "" : "Hello"}</div>
            <div className="text-white">{user ? "Sign Out" : "Sign In"}</div>
          </div>
        </Link>

        <div className="flex flex-col mx-[10px]">
          <div className="text-gray-400 text-sm">Returns</div>
          <div className="text-white">& Orders</div>
        </div>
        <div className="flex flex-col mx-[10px]">
          <div className="text-gray-400 text-sm">Your</div>
          <div className="text-white">Prime</div>
        </div>

        <Link to="/checkout">
          <div className="flex items-center ">
            <AiOutlineShoppingCart fontSize={21} color="#fff" />
            <span className="text-white ml-2">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
