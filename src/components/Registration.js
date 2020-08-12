import React from "react";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";

export default function Registration() {
  return (
    <section id="registration">
      <div className="title">
        <h4 className="register sub-title show-title">register</h4>
        <h4 className="sign-in sub-title">sign in</h4>
      </div>
      <div className="registration-form wrapper">
        <form className="form">
          <div className="email">
            <label id="email-address">email address</label>
            <input type="text" placeholder="Enter your email address" />
          </div>
          <div className="password">
            <label id="password">password</label>
            <input type="text" placeholder="Enter your password" />
          </div>
          <p className="required-1">
            password must be at least 8 characters and include a number or
            special character
          </p>
          <div className="rounded">continue</div>
          <p className="required-2">forgot your password?</p>
        </form>
      </div>
      <div className="registration-for">
        <p className="option">
          <span>or</span>
        </p>
        <div className="wrapper">
          <div className="sign-up facebook">
            <span>
              <FaFacebookSquare />
            </span>
            <p>Sign in with Facebook</p>
          </div>
        </div>
        <div className="wrapper">
          <div className="sign-up google">
            <span>
              <FaGoogle />
            </span>
            <p>Sign in with Google</p>
          </div>
          <p className="accept-policies">
            by registering for an account or using this website, you are agree
            to our <span>Term of Use</span> and <span>Privacy Notice</span>
          </p>
        </div>
      </div>
    </section>
  );
}
