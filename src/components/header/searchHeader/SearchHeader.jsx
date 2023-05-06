import * as React from "react";
import S from "./SearchHeader.module.scss";
import { ReactComponent as Find } from "../../../accets/img/icon/find.svg";

const SearchHeader = () => {
  return (
    <div className={S.bodySearch}>
      <input type="text" placeholder={"поиск "} />
      <Find />
    </div>
  );
};

export default SearchHeader;
