import * as React from "react";
import S from "./Filter.module.scss";

const Filter = () => {
  const [choice, setChoice] = React.useState(0);
  const filterChoice = [
    "Все",
    "Мясная",
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
              setChoice(i);
            }}
            key={el}
            className={`${S.choice} ${choice === i && S.active}`}
          >
            {el}
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
