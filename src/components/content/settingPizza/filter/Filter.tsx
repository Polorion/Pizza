import * as React from "react";
import S from "./Filter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../../../store/sliceFilter/sliceFilter";
import types from "../../../../types";
import { RootState } from "../../../../store/store";

const Filter = () => {
  const categories = useSelector((state: RootState) => state.filter.categories);
  const dispatch = useDispatch();

  return (
    <>
      <div className={S.filter}>
        {types.filterChoice.map((el, i) => (
          <div
            onClick={() => {
              dispatch(setCategories(i));
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
