import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm.jsx";
import "../../Css/login.css";
import IndexUser from "../User/index.jsx";

function Index() {
  const [user, setUser] = useState({ name: "" });

  const [error, setError] = useState({});

  const adminUser = {
    name: "admin",
    matKhau: "admin",
  };

  const Login = (details) => {
    if (
      details.name == adminUser.name &&
      details.password == adminUser.matKhau
    ) {
      setUser({
        name: details.name,
      });
    } else {
      alert("Bạn nhập sai tài khoảng rồi.");
    }
  };
  const Logout = () => {
    setUser({
      name: "",
    });
  };

  return (
    <div classname="class">
      {user.name != "" ? (
        <div>
          <button className="button login__submit" onClick={Logout}>
            Logout
          </button>
          <IndexUser />
        </div>
      ) : (
        <LoginForm Login={Login}></LoginForm>
      )}
    </div>
  );
}

export default Index;
