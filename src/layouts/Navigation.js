import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const pathList = [
  { name: "start", path: "/", exact: true },
  { name: "products", path: "/products" },
  { name: "contact", path: "/contact" },
  { name: "admin", path: "/admin" },
];

const Navigation = () => {
  const menu = pathList.map(link => (
    <li>
      <NavLink to={link.path} exact={link.exact}>
        {link.name}{" "}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};
export default Navigation;
