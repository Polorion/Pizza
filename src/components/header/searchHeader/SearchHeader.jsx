import * as React from "react";
import S from "./SearchHeader.module.scss";
import { ReactComponent as Find } from "../../../accets/img/icon/find.svg";
import { ReactComponent as Cancel } from "../../../accets/img/icon/cancel.svg";
import { SearchContext } from "../../../App";

const SearchHeader = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className={S.bodySearch}>
      <input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        type="text"
        placeholder={"поиск "}
      />
      <div className={S.find}>
        <Find />
      </div>
      <div
        onClick={() => {
          setSearchValue("");
        }}
        className={S.cancel}
      >
        {searchValue && <Cancel />}
      </div>
    </div>
  );
};

export default SearchHeader;
