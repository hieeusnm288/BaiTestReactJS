import { Menu } from "antd";
import React from "react";
import logo from "../../image/Logo.png";
import { useNavigate } from "react-router-dom";
import "./layout.scss";
import axios from "axios";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const logout = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        `https://api-test-web.agiletech.vn/auth/logout`,
        {
          method: "DELETE",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      // Nếu API trả về phản hồi JSON
      // const responseData = await response.json();
      console.log("Post deleted successfully");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <div>
      <div className="dasboard">
        <aside className="left-site">
          <div>
            <div className="brand-name d-flex align-items-center justify-content-center">
              <div className="name-brand text-nowrap mt-3">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="slide-bar-menu mt-3">
              <Menu
                mode="inline"
                items={[
                  {
                    key: "1",
                    label: "Post",
                    onClick: () => navigate("/post"),
                  },
                  {
                    key: "2",
                    label: "Logout",
                    onClick: () => logout(),
                  },
                ]}
              />
            </div>
          </div>
        </aside>
        <div className="body-wrapper">
          <div className="container mt-3">{children}</div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Layout;
