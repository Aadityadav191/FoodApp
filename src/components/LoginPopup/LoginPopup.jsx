import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Account Created successfully!");
    localStorage.setItem("user", JSON.stringify(data));
    setTimeout(() => {
      setCurrState("Login");
      console.log(data);
      reset();
    }, 3000);
  };

  return (
    <div className="login-popup">
      <form
        className="login-popup-container"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="login-popup-title">
          <h1>{currState}</h1>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? null : (
            <>
              <input
                type="text"
                placeholder="Your name"
                {...register("name", {
                  required: currState === "Sign Up" && "Name is required",
                })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </>
          )}

          <input
            type="email"
            placeholder="Your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>

        <div className="login-popup-condition">
          <input
            type="checkbox"
            {...register("terms", {
              required: "You must agree to terms and privacy policy",
            })}
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {errors.terms && <p className="error">{errors.terms.message}</p>}

        <button type="submit" className="login-popup-btn">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <p>
          Create a new account?{" "}
          <span onClick={() => setCurrState("Sign Up")}>Click here</span>
        </p>
        <p>
          Already have an account?{" "}
          <span onClick={() => setCurrState("Login")}>Login here</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
