import * as React from "react";
import S from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import types from "../../types";
import { setItems } from "../../store/sliceCart/sliceCart";

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
          <CartPizza el={el} key={el.id} />
        ))}
      </div>
    );
  }
};

export default Cart;

const CartPizza = ({ el }) => {
  const dispatch = useDispatch();
  const setItemsHandler = (type) => {
    dispatch(setItems({ type, idCart: el.idCart }));
  };
  return (
    <div className={S.bodyItem}>
      <div className={S.img}>
        <img src={el.imgUrl} alt="" />
      </div>
      <div className={S.info}>
        <div className={S.name}>{el.name}</div>
        <div className={S.type}>{types.doughThickness[el.type]}</div>
        <div className={S.size}>{el.size.size} см</div>
      </div>
      <div className={S.count}> количество: {el.count}</div>
      <div className={S.buttons}>
        <button
          onClick={() => {
            setItemsHandler("+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setItemsHandler("-");
          }}
        >
          -
        </button>
      </div>
      <div className={S.clearItem}> удалить из карзины</div>
    </div>
  );
};
