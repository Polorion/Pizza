import * as React from "react";
import S from "./Basket.module.scss";
import { ReactComponent as BasketIcon } from "../../../accets/img/icon/basket.svg";

const Basket = () => {
  return (
    <div className={S.body}>
      <div className={S.totalPrice}>0р</div>
      <div className={S.basket}>
        <BasketIcon />
        <div className={S.count}>5</div>
      </div>
    </div>
  );
};

export default Basket;
