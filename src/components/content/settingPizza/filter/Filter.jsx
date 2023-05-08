import * as React from "react";
import S from "./Filter.module.scss";

const Filter = ({ categories, setCategories }) => {
  const filterChoice = [
    "Все",
    "Пепперони",
    "Курица",
    "Открытая",
    "Закрытая",
    "Вегетарианская",
  ];

  return (
    <>
      <div className={S.filter}>
        {filterChoice.map((el, i) => (
          <div
            onClick={() => {
              setCategories(i);
            }}
            key={el}
            className={`${S.choice} ${categories === i && S.active}`}
          >
            {el}
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
