import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
  return (
    <div className="flex justify-center w-full bg-gray-200">
      <div className="w-full">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/launch/gateway/TheUndergroundRailroad/UGRR_S1_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB669781769_.jpg"
          alt=""
          className="home__img object-contain"
        />
        <div className="flex z-1 mx-[5px] justify-evenly">
          <Product
            id="100"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            image="https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
            rating={5}
            price={29.99}
          />
          <Product
            id="200"
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
            image="https://m.media-amazon.com/images/I/716kTJI4jtL._SX522_.jpg"
            rating={4}
            price={239.0}
          />
        </div>
        <div className="flex z-1 mx-[5px] justify-evenly">
          <Product
            id="300"
            title="Samsung 27 inch (68.5 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC27F390FHWXXL (Black)"
            image="https://m.media-amazon.com/images/I/71nplbAMwzL._SX679_.jpg"
            rating={3}
            price={199.99}
          />
          <Product
            id="400"
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Grey)"
            image="https://m.media-amazon.com/images/I/618l86R3U9L._SX679_.jpg"
            rating={5}
            price={99.65}
          />
          <Product
            id="500"
            title="Apple AirPods Pro"
            rating={4}
            price={598.77}
            image="https://m.media-amazon.com/images/I/71zny7BTRlL._SX679_.jpg"
          />
        </div>
        <div className="flex z-1 mx-[5px] justify-evenly">
          <Product
            id="600"
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL, Gray"
            image="https://m.media-amazon.com/images/I/91pi34PiUPL._SX679_.jpg"
            rating={4}
            price={1094.25}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
