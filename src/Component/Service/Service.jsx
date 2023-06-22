import React, { useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("https://n-arshadrahman02.vercel.app/chefData")
      .then((response) => response.json())
      .then((data) => setChefData(data));
  }, []);

  console.log(chefData);

  return (
    <div>
      <h1 className="text-center text-3xl font-serif mt-5 font-bold ">
        Chef Section
      </h1>
      <div className="grid lg:grid-cols-3 mt-10 my-10 gap-7 text-white">
        {chefData?.map((s) => {
          return (
            <div key={s.id}>
              <div className="card w-72 bg-rose-600 shadow-xl mx-auto ">
                <figure className="px-10 pt-10">
                  <img
                    src={s?.chef_picture}
                    alt="Shoes"
                    className="rounded-xl object-cover w-40 h-52 "
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{s?.chef_name}</h2>
                  <h1>Years of Experience : {s?.years_of_experience}</h1>
                  <h1>Numbers of Recipes : {s?.numbers_Of_recipes}</h1>
                  <div>
                    <h1 className="flex">
                      Likes :<FaThumbsUp className="mx-2 mt-1"></FaThumbsUp>{" "}
                      {s?.likes}
                    </h1>
                  </div>
                  <div className="card-actions">
                    <Link to={`/service/${s.id}`}>
                      <button className="btn btn-primary mt-5">
                        View Recipes
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
