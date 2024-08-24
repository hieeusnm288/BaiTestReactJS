import React, { useEffect, useState } from "react";
import "./Header.scss";
import logo from "../../image/Logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState<Boolean>();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, []);
  const route = () => {
    if (check) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="header">
      <header className="container mb-12 z-20 position-relative px-4">
        <div className="container mx-auto">
          <div className="d-flex align-items-center justify-content-between position-relative">
            <div className="d-flex align-items-center gap-120">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <button className="btn btn-quaternary" onClick={route}>
              {check ? "Profile" : "Sign In"}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
