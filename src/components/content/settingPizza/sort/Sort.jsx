import * as React from "react";
import S from "./Sort.module.scss";
import { ReactComponent as SortIcon } from "../../../../accets/img/icon/sortIcon.svg";
import types from "../../../../types";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../../../store/sliceFilter/sliceFilter";

const Sort = () => {
  const sort = useSelector((state) => state.filter.sort);
  const dispatch = useDispatch();
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
              {types.sortChoice.map(
                (el, i) =>
                  sort.name !== el.name && (
                    <div
                      key={i}
                      onClick={() => {
                        dispatch(setSort(el));
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
