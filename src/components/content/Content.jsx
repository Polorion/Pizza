import * as React from "react";
import SettingPizza from "./settingPizza/settingPizza";
import PizzaBlock from "./pizzaBLock/PizzaBlock";

const Content = () => {
  const [categories, setCategories] = React.useState(0);
  const [sort, setSort] = React.useState({ name: "названию ↑", type: "name" });
  return (
    <div>
      <SettingPizza
        categories={categories}
        sort={sort}
        setCategories={setCategories}
        setSort={setSort}
      />
      <PizzaBlock categories={categories} sort={sort} />
    </div>
  );
};

export default Content;
