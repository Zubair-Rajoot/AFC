import React from "react";
import Delivery from "../images/delivery.png";
import HeroBg from "../images/heroBg.png";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8 ">
          <div className=" flex items- gap-2 justify-center bg-orange-100 px-2 py-1">
            <p className="text-base text-orange-500 font-semibold">
              Bike delivery
            </p>
            <div className="w-8 h-8 bg-white overflow-hidden rounded-full drop-shadow-xl">
              <img
                src={Delivery}
                className="w-full h-full object-contain "
                alt="delivery"
              />
            </div>
          </div>

          <div className=" flex items- gap-2 justify-center bg-orange-100 px-2 py-1">
            <p className="text-base text-orange-500 font-semibold">Take Away</p>
            <div className="w-8 h-8 bg-white overflow-hidden rounded-full drop-shadow-xl">
              <img
                src={Delivery}
                className="w-full h-full object-contain "
                alt="delivery"
              />
            </div>
          </div>

          <div className=" flex items- gap-2 justify-center bg-orange-100 px-2 py-1">
            <p className="text-base text-orange-500 font-semibold">Dine In</p>
            <div className="w-8 h-8 bg-white overflow-hidden rounded-full drop-shadow-xl">
              <img
                src={Delivery}
                className="w-full h-full object-contain "
                alt="delivery"
              />
            </div>
          </div>
        </div>

        <p className=" text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          Fastest Service in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            your city
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-80%">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
          deleniti nobis beatae, voluptatibus minima doloremque quo dolore animi
          vel quae voluptatum. Accusantium recusandae dignissimos nulla omnis
          temporibus explicabo accusamus obcaecati!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br  from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center">
        <img src={HeroBg} className=" ml-auto h-370 w-full lg:w-auto lg:h-650" alt="heroBg" />

        <div className="w-full h-full absolute flex items-center justify-center"></div>
      </div>
    </section>
  );
};

export default HomeContainer;
