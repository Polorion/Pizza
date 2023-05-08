import * as React from "react";
import S from "./Sort.module.scss";
import { ReactComponent as SortIcon } from "../../../../accets/img/icon/sortIcon.svg";

const Sort = ({ sort, setSort }) => {
  const sortChoice = [
    { name: "названию ↑", type: "name" },
    { name: "названию ↓", type: "name" },
    { name: "рейтингу ↑", type: "rating" },
    { name: "рейтингу ↓", type: "rating" },
    { name: "цене ↑", type: "price" },
    { name: "цене ↓", type: "price" },
  ];
  const [openSort, setOpenSort] = React.useState(false);
  const sortRef = React.useRef();
  const openPopap = (e) => {
    if (e.target.parentNode !== sortRef.current) {
      setOpenSort(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("click", openPopap);
    return () => {
      window.removeEventListener("click", openPopap);
    };
  }, []);
  return (
    <div className={S.sort}>
      <SortIcon />
      <p>сортировка по: </p>
      <span
        ref={sortRef}
        onClick={(e) => {
          e.stopPropagation();
          setOpenSort((prev) => !prev);
        }}
      >
        {sort.name}
        {openSort && (
          <div
            className={S.sortItems}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={S.animationChoice}>
              {sortChoice.map(
                (el, i) =>
                  sort.name !== el.name && (
                    <div
                      key={i}
                      onClick={() => {
                        setSort(el);
                        setOpenSort(false);
                      }}
                      className={S.sortItem}
                    >
                      {el.name}
                    </div>
                  )
              )}
            </div>
          </div>
        )}
      </span>
    </div>
  );
};

export default Sort;
