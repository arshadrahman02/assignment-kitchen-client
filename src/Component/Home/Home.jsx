import React from "react";
import { Link } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import Service from "../Service/Service";
import Feature from "../Feature/Feature";
import TimeTable from "../TimeTable/TimeTable";

const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              welcome to Chef's kitchen
            </h1>
            <p className="mb-5">
              Welcome to our food website! Browse our menu of delicious dishes,
              place your order online, and enjoy quick and easy delivery
              straight to your door.
            </p>

            <Link to="/login" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <Service></Service>
      <div>
        <Feature></Feature>
      </div>
      <div>
        <TimeTable></TimeTable>
      </div>
    </>
  );
};
export default Home;
