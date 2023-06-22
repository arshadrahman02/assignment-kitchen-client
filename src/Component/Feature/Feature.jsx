import React from "react";

const Feature = () => {
  return (
    <div className=" text-2xl  font-bold">
      <h1 className="mx-96 px-28 mt-16">Our Feature Food </h1>
      <div className="grid lg:grid-cols-3 w-[950px] h-full mx-auto gap-10 my-20">
        <img
          src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/6642499/pexels-photo-6642499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          src="https://images.pexels.com/photos/4577379/pexels-photo-4577379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Feature;
