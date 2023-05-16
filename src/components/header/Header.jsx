import * as React from "react";
import S from "./Header.module.scss";
import { ReactComponent as Logo } from "../../accets/img/icon/pizzaHeaderIcon.svg";
import SearchHeader from "./searchHeader/SearchHeader";
import Basket from "./basket/Basket";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className={S.bodyHeader}>
      <div className={S.leftBody}>
        <div className={S.logo}>
          <Link to={"/"}>
            <Logo />
          </Link>
          <div className={S.logoInfo}>
            <h1>Pizza-Project</h1>
            <h2>Самая Лучщая Пицца </h2>
          </div>
        </div>
        <SearchHeader />
      </div>
      {location.pathname !== "/cart" && <Basket />}
    </div>
  );
};

export default Header;
