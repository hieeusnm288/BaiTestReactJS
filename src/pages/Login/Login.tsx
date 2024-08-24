import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Login.scss";
import { Input } from "antd";
import { login } from "../../auth/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handlClick = async () => {
    const succes = await login(value);
    if (succes) {
      console.log("Đăng nhập thành công");
      navigate("/");
    } else {
      console.log("Đăng nhập thất bại");
    }
  };

  return (
    <div className="login">
      <Header />
      <div className="login-form container">
        <h1>Sign In</h1>
        <Input
          placeholder="enter username"
          style={{ width: "400px" }}
          size="large"
          onChange={handleChange}
        />
        <button className="btn btn-quaternary" onClick={handlClick}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
