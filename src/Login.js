import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="flex flex-col items-center bg-white h-[100vh]">
      <Link to="/">
        <img
          src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"
          alt=""
          className="mx-auto my-[20px] w-[200px] object-contain"
        />
      </Link>
      <div className="flex flex-col border-[1px] border-gray-300 p-[20px] h-fit rounded-sm w-[300px]">
        <h1 className="text-3xl font-semibold mb-[20px]">Sign-in</h1>

        <form>
          <h5 className="text-base font-semibold mb-[5px]">E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[1px] border-black w-full outline-none"
          />

          <h5 className="text-base font-semibold mb-[5px]">Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-[1px] border-black w-full outline-none"
          />

          <button
            type="submit"
            onClick={signIn}
            className="bg-amber-400 border-[1px] border-amber-600 h-[30px] w-full mt-[15px] rounded-sm"
          >
            Sign In
          </button>
        </form>

        <p className="mt-[15px] text-sm">
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          onClick={register}
          className="bg-gray-200 border-[1px] border-gray-500 h-[30px] w-full mt-[15px] rounded-sm"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
