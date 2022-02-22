import React, { useState } from "react";
import "../../Css/login.css";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <div>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login" onSubmit={submitHandler}>
              <div className="login__field">
                <i className="login__icon fas fa-user" />
                <h5>Name: </h5>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="login__input"
                  placeholder="User name / Email"
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                  }
                  value={details.name}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock" />
                <h5>Password: </h5>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="login__input"
                  placeholder="Password"
                  onChange={(e) =>
                    setDetails({ ...details, password: e.target.value })
                  }
                  value={details.password}
                />
              </div>
              <button className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right" />
              </button>
            </form>
            <div className="social-login"></div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
