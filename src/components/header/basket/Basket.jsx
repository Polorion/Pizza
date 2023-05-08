import * as React from "react";
import S from "./Basket.module.scss";
import { ReactComponent as BasketIcon } from "../../../accets/img/icon/basket.svg";
import { Link } from "react-router-dom";
const Basket = () => {
  return (
    <div className={S.body}>
      <div className={S.totalPrice}>0р</div>
      <Link to={"/basket"} className={S.basket}>
        <BasketIcon />
        <div className={S.count}>5</div>
      </Link>
    </div>
  );
};

export default Basket;
