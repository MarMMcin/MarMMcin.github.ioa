import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "About me", path: "/", exact: true },
  { name: "My projects", path: "/products" },
  { name: "My skills", path: "/skils" },
  { name: "Contact", path: "/contact" }
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <>
      <nav className="active">
        <div className="navigation">{menu}</div>
      </nav>
    </>
  );
};

export default Navigation;
