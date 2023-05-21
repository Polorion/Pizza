import * as React from "react";
import S from "./SearchHeader.module.scss";
import { ReactComponent as Find } from "../../../accets/img/icon/find.svg";
import { ReactComponent as Cancel } from "../../../accets/img/icon/cancel.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../../store/sliceFilter/sliceFilter";
import debounce from "lodash.debounce";
import { RootState } from "../../../store/store";
const SearchHeader: React.FC = () => {
  const inputSearchValue = useSelector(
    (state: RootState) => state.filter.inputSearchValue
  );
  const [value, setValue] = React.useState(inputSearchValue);
  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const clearInput = () => {
    inputRef.current?.focus();
    dispatch(setSearchValue(""));
    setValue("");
  };
  const setValueDebounce = React.useCallback(
    debounce((e) => {
      dispatch(setSearchValue(e));
    }, 250),
    []
  );

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setValueDebounce(e.target.value);
  };
  return (
    <div className={S.bodySearch}>
      <input
        ref={inputRef}
        value={value}
        onChange={updateValue}
        type="text"
        placeholder={"поиск "}
      />
      <div className={S.find}>
        <Find />
      </div>
      <div onClick={clearInput} className={S.cancel}>
        {inputSearchValue && <Cancel />}
      </div>
    </div>
  );
};

export default SearchHeader;
