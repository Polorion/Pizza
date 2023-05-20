import * as React from "react";
import S from "./Sort.module.scss";
import { ReactComponent as SortIcon } from "../../../../accets/img/icon/sortIcon.svg";
import types from "../../../../types";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../../../store/sliceFilter/sliceFilter";

type PopupClick = MouseEvent & {
  composedPath: () => [];
};
const Sort: React.FC = () => {
  const sort = useSelector((state: any) => state.filter.sort);
  const dispatch = useDispatch();
  const [openSort, setOpenSort] = React.useState<boolean>(false);
  const sortRef = React.useRef<HTMLSpanElement>(null);
  React.useEffect(() => {
    const openPopup = (e: PopupClick | MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setOpenSort(false);
      }
    };
    document.body.addEventListener("click", openPopup);
    return () => {
      document.body.removeEventListener("click", openPopup);
    };
  }, []);
  return (
    <div className={S.sort}>
      <SortIcon />
      <p>сортировка по: </p>
      <span
        ref={sortRef}
        onClick={() => {
          setOpenSort(true);
        }}
      >
        {sort.name}
        {openSort && (
          <div className={S.sortItems}>
            <div className={S.animationChoice}>
              {types.sortChoice.map(
                (el, i) =>
                  sort.name !== el.name && (
                    <div
                      key={i}
                      onClick={(e) => {
                        dispatch(setSort(el));
                        e.stopPropagation();
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
