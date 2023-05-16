import * as React from "react";
import S from "./PizzaItem.module.scss";
import types from "../../../../types";
import { useDispatch } from "react-redux";
import { addItemInCart } from "../../../../store/sliceCart/sliceCart";

const PizzaItem = ({ pizza }) => {
  const [choiceThickness, setChoiceThickness] = React.useState(0);
  const [choiceSize, setChoiceSize] = React.useState({});
  const dispatch = useDispatch();
  React.useEffect(() => {
    setChoiceSize({ id: 0, size: pizza.size[0] });
  }, []);
  const transferPizzaInCart = () => {
    dispatch(
      addItemInCart({ ...pizza, size: choiceSize, type: choiceThickness })
    );
  };
  return (
    <div className={S.wrapperPizza}>
      <div className={S.bodyPizza}>
        <div className={S.imgPizza}>
          <img src={pizza.imgUrl} alt="" />
        </div>
        <div className={S.namePizza}>{pizza.name}</div>
        <div className={S.settingPizza}>
          <div className={S.doughThickness}>
            {pizza.type.map((type, i) => (
              <div
                key={type}
                className={`${S.thickness} ${
                  choiceThickness === i && S.active
                }`}
                onClick={() => {
                  setChoiceThickness(i);
                }}
              >
                {types.doughThickness[type]}
              </div>
            ))}
          </div>
          <div className={S.SizePizza}>
            {pizza.size.map((el, i) => (
              <div
                onClick={() => {
                  setChoiceSize({ id: i, size: el });
                }}
                className={`${S.sizeItem} ${choiceSize.id === i && S.active}`}
                key={el}
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div className={S.pricePizza}>
          <div>{pizza.price}p</div>
          <button
            onClick={() => {
              transferPizzaInCart();
            }}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
