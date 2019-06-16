import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withLogin from "../../hocs/with-login/with-login.js";

const START_CITY = `Amsterdam`;

const SignIn = ({ errors, setCity, handleInputChange, handleFormSubmit }) => {
  return (
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={handleFormSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
                onChange={handleInputChange}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required=""
                onChange={handleInputChange}
              />
            </div>
            <button className="login__submit form__submit button" type="submit">
              Sign in
            </button>
            <span className="error">{errors.setAuth}</span>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link
              to="./"
              className="locations__item-link"
              onClick={() => setCity(START_CITY)}
            >
              <span>{START_CITY}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

SignIn.propTypes = {
  errors: PropTypes.object,
  setCity: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleFormSubmit: PropTypes.func
};

export default withLogin(SignIn);
