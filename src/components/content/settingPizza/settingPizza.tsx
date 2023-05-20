import * as React from "react";
import S from "./SettingPizza.module.scss";
import Filter from "./filter/Filter";
import Sort from "./sort/Sort";

const SettingPizza = () => {
  return (
    <div className={S.body}>
      <Filter />
      <Sort />
    </div>
  );
};

export default SettingPizza;
