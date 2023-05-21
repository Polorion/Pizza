import * as React from "react";
import S from "./Cart.module.scss";
import { useSelector } from "react-redux";
import { CartPizza } from "./CartPizza";
import { PizzaItemType } from "../content/pizzaBLock/PizzaBlock";
import { RootState } from "../../store/store";
export type PizzaItemInCart = {
  imgUrl: string;
  id: number;
  price: number;
  name: string;
  rating: number;
  categories: number[];
  size: {
    id: number;
    size: string;
  };
  type: number;
  count: number;
  idCart: string;
};

const Cart: React.FC = () => {
  const itemCart = useSelector((state: RootState) => state.cart.items);
  // @ts-ignore
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
        {itemCart.map((el: PizzaItemInCart) => (
          <CartPizza {...el} key={el.idCart} />
        ))}
      </div>
    );
  }
};

export default Cart;
