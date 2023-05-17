import * as React from "react";
import S from "./Cart.module.scss";
import { useSelector } from "react-redux";
import { CartPizza } from "./CartPizza";

const Cart = () => {
  const itemCart = useSelector((state) => state.cart.items);
  if (!itemCart.length > 0) {
    return (
      <div>
        <div className={S.empty}>
          <div>Корзина пуста добавьте в нее что ни будь=)</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={S.body}>
        {itemCart.map((el) => (
          <CartPizza el={el} key={el.idCart} />
        ))}
      </div>
    );
  }
};

export default Cart;
