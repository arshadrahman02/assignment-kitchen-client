import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ViewRecipies = () => {
  const [recipeData, setRecipeData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://n-arshadrahman02.vercel.app/recipeData/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipeData(data));
  }, []);

  console.log(recipeData);

  const handleFavorite = () => {
    alert("item added to the Favorite Section");
  };

  return (
    <div>
      <div className="carousel w-96 h-72 mt-3 mx-auto">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/6006598/pexels-photo-6006598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/6642499/pexels-photo-6642499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/4577379/pexels-photo-4577379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/6013/food-holiday-vacation-summer.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      <div>
        <div className="card card-side bg-base-100 shadow-2xl w-full mx-auto">
          <figure>
            <img
              className="w-48 h-48 mx-20"
              src={recipeData.chef_picture}
              alt="Movie"
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{recipeData.chef_name}</h2>
            <p>
              Description : Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Necessitatibus tempora optio quaerat nihil quod culpa nobis
              eos praesentium sit, fuga incidunt suscipit dolorum ipsum quisquam
              deleniti enim doloremque laborum animi?
            </p>
            <h1 className="font-bold">
              Number of Recipes : {recipeData.numbers_of_recipes}
            </h1>
            <div>
              <h1 className="font-bold">
                Years of Experience :{recipeData.experience} 4
              </h1>
            </div>
            <div>
              <h1 className="flex">
                <span className="font-bold">Likes</span>
                <FaThumbsUp className="mx-2 mt-1"></FaThumbsUp>{" "}
                {recipeData?.likes}
              </h1>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Favorite</button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mx-96 px-32 mt-10 text-2xl font-bold">Chef's Recipes</h1>
      <div className="grid lg:grid-cols-3 my-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.pexels.com/photos/4577379/pexels-photo-4577379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Shoes"
              className="rounded-xl w-72 h-48"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Pasta</h2>
            <ul>
              <li>
                <span className="font-bold">Ingredients :</span>
                {recipeData.ingredients}
              </li>
            </ul>
            <h1>Ratings : {recipeData.ratings}</h1>
            <div className="card-actions">
              <button onClick={handleFavorite} className="btn btn-primary">
                Favorite
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.pexels.com/photos/6013/food-holiday-vacation-summer.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Sausage</h2>
            <ul>
              <li>
                <span className="font-bold">Ingredients :</span>
                {recipeData.ingredients}
              </li>
            </ul>
            <h1>Ratings : {recipeData.ratings}</h1>
            <div className="card-actions">
              <button onClick={handleFavorite} className="btn btn-primary">
                Favorite
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://images.pexels.com/photos/6642499/pexels-photo-6642499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Shoes"
              className="rounded-xl w-80 h-48"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Burger</h2>
            <ul>
              <li>
                <span className="font-bold">Ingredients :</span>
                {recipeData.ingredients}
              </li>
            </ul>
            <h1>Ratings : {recipeData.ratings}</h1>
            <div className="card-actions">
              <button onClick={handleFavorite} className="btn btn-primary">
                Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
<ToastContainer></ToastContainer>;
export default ViewRecipies;
