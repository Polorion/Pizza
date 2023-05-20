import * as React from "react";
import S from "./Basket.module.scss";
import { ReactComponent as BasketIcon } from "../../../accets/img/icon/basket.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Basket = () => {
  const countItems = useSelector((state: any) => state.cart.count);
  return (
    <div className={S.body}>
      <div className={S.totalPrice}>0р</div>
      <Link to={"/cart"} className={S.basket}>
        <BasketIcon />
        <div className={S.count}>{countItems}</div>
      </Link>
    </div>
  );
};

export default Basket;
