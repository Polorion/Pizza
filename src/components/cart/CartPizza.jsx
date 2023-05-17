import { useDispatch } from "react-redux";
import { deleteItems, setItems } from "../../store/sliceCart/sliceCart";
import S from "./Cart.module.scss";
import types from "../../types";

export const CartPizza = ({ el }) => {
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
            el.count > 1 && setItemsHandler("-");
          }}
        >
          -
        </button>
      </div>
      <div
        onClick={() => {
          console.log(el.idCart);
          dispatch(deleteItems(el.idCart));
        }}
        className={S.clearItem}
      >
        {" "}
        удалить из карзины
      </div>
    </div>
  );
};
