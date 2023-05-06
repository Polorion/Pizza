import * as React from "react";
import S from "./Sort.module.scss";
import { ReactComponent as SortIcon } from "../../../../accets/img/icon/sortIcon.svg";

const Sort = () => {
  const sortChoice = ["популярные", "рейтингу", "цене"];
  const [sortItem, setSortItem] = React.useState(0);
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
        {" "}
        {sortChoice[sortItem]}
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
                  sortChoice[sortItem] !== el && (
                    <div
                      key={i}
                      onClick={() => {
                        setSortItem(i);
                        setOpenSort(false);
                      }}
                      className={S.sortItem}
                    >
                      {el}
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
