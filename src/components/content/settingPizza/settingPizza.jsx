import * as React from "react";
import S from "./SettingPizza.module.scss";
import Filter from "./filter/Filter";
import Sort from "./sort/Sort";

const SettingPizza = ({ categories, sort, setCategories, setSort }) => {
  return (
    <div className={S.body}>
      <Filter categories={categories} setCategories={setCategories} />
      <Sort sort={sort} setSort={setSort} />
    </div>
  );
};

export default SettingPizza;
