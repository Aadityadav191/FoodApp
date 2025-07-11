import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import SearchInput from "../NavbarSearch/SearchInput";
import SearchDialog from "../NavbarSearch/SearchDialog";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { subTotalAmount } = useContext(StoreContext);

  const scrollToItem = (itemId) => {
    const el = document.getElementById(itemId); // element with ID
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          {" "}
          <img src={assets.logo} alt="" className="logo" />
        </Link>

        <ul className="navbar-menu">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => setMenu("mobile-app")}
            className={menu === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            contact us
          </a>
        </ul>

        <div className="navbar-right">
          <SearchInput />
          <SearchDialog onItemClick={scrollToItem} />

          <div className="navbar-search-icon">
            <Link to="/cart">
              {" "}
              <img src={assets.basket_icon} alt="" />{" "}
            </Link>
            <div className={subTotalAmount() === 0 ? "" : "dot"}></div>
          </div>
          <button onClick={() => setShowLogin(true)}>sign In </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
