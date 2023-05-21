import * as React from "react";
import S from "./PizzaItem.module.scss";
import types from "../../../../types";
import { useDispatch } from "react-redux";
import { addItemInCart } from "../../../../store/sliceCart/sliceCart";
import { PizzaItemType } from "../PizzaBlock";

type ChoiceSizeType = {
  id: number;
  size: string;
};

const PizzaItem = ({
  imgUrl,
  type,
  id,
  rating,
  size,
  name,
  price,
  categories,
}: PizzaItemType) => {
  const [choiceThickness, setChoiceThickness] = React.useState(0);
  const [choiceSize, setChoiceSize] = React.useState<ChoiceSizeType>({
    id: 0,
    size: size[0],
  });
  const dispatch = useDispatch();

  const transferPizzaInCart = () => {
    dispatch(
      addItemInCart({
        imgUrl,
        id,
        rating,
        name,
        price,
        categories,
        size: choiceSize,
        type: choiceThickness,
      })
    );
  };
  return (
    <div className={S.wrapperPizza}>
      <div className={S.bodyPizza}>
        <div className={S.imgPizza}>
          <img src={imgUrl} alt="" />
        </div>
        <div className={S.namePizza}>{name}</div>
        <div className={S.settingPizza}>
          <div className={S.doughThickness}>
            {Array.isArray(type) &&
              type.map((type, i) => (
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
            {size.map((el, i) => (
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
          <div>{price}p</div>
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
