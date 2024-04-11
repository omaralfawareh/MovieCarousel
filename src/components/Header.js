import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import classes from "./Header.module.css";
const AntdHeader = Layout.Header;

const Header = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
    }
  }, [pathname]);
  return (
    <AntdHeader className={classes.header}>
      {user ? (
        <div className={classes.margin}>
          Welcome <b>{user}</b>
        </div>
      ) : (
        <div className={classes.margin}>Welcome to Shahid</div>
      )}

      <Menu
        className={classes.menu}
        onClick={({ key }) => {
          if (key === "/logout") {
            localStorage.removeItem("user");
            setUser(null);
          } else {
            navigate(key);
          }
        }}
        items={[
          { label: "Home", key: "/" },
          user
            ? { label: "Logout", key: "/logout" }
            : { label: "Login", key: "/login" },
        ]}
        theme="dark"
        mode="horizontal"
      />
    </AntdHeader>
  );
};

export default Header;
