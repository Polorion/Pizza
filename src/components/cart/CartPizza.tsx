import { useDispatch } from "react-redux";
import { deleteItems, setItems } from "../../store/sliceCart/sliceCart";
import S from "./Cart.module.scss";
import types from "../../types";
import { PizzaItemInCart } from "./Cart";

export const CartPizza: React.FC<PizzaItemInCart> = ({
  idCart,
  type,
  count,
  size,
  name,
  imgUrl,
}) => {
  const dispatch = useDispatch();
  const setItemsHandler = (type: any) => {
    dispatch(setItems({ type, idCart: idCart }));
  };
  return (
    <div className={S.bodyItem}>
      <div className={S.img}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={S.info}>
        <div className={S.name}>{name}</div>
        <div className={S.type}>{types.doughThickness[type]}</div>
        <div className={S.size}>{size.size} см</div>
      </div>
      <div className={S.count}> количество: {count}</div>
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
            count && count > 1 && setItemsHandler("-");
          }}
        >
          -
        </button>
      </div>
      <div
        onClick={() => {
          dispatch(deleteItems(idCart));
        }}
        className={S.clearItem}
      >
        {" "}
        удалить из карзины
      </div>
    </div>
  );
};
