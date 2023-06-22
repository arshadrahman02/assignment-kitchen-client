import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGofore, FaGithub } from "react-icons/fa";
import Home from "../Home/Home";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;

    const password = form.password.value;

    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  // google sign in

  const handleGoogleSignIn = () => {
    // console.log("google mama is coming");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;

        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  //github sign in

  const handleGithubSignIn = () => {
    // console.log("google mama is coming");
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedInUser = result.user;

        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold lg:mx-96">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <Link to="/register" className="btn btn-link">
                  <small>New Here? Register Now!</small>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-green-600">Login</button>
            </div>
            <div className="mt-3 mx-auto">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-primary mt-2  "
              >
                <FaGofore className="mx-2"></FaGofore>Sign up with Google
              </button>
              <br /> <br />
              <button onClick={handleGithubSignIn} className="btn    ">
                <FaGithub className="mx-2"></FaGithub>Sign up with Google
              </button>
              {user && (
                <div className="mt-10">
                  <h1>user : {user.displayName}</h1>
                  <h1 className="mt-5">Email : {user.email}</h1>
                  <img
                    className="mx-auto mt-10"
                    src={user.photoURL}
                    alt="Photo"
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
