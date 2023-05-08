import * as React from "react";
import S from "./PizzaBlock.module.scss";
import PizzaItem from "./pizzaItem/PizzaItem";
import axios from "axios";
import SkeletonPizza from "./pizzaItem/SkeletonPizza";
import { SearchContext } from "../../../App";

const PizzaBlock = ({ categories, sort }) => {
  const [pizzasArray, setPizzasArray] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(false);

  const { searchValue } = React.useContext(SearchContext);
  React.useEffect(() => {
    setIsLoad(false);
    const isCategories = categories > 0 ? categories : "";
    const ASK = sort.name.includes("↓") ? "desc" : " ask";
    axios
      .get(
        `https://645754d80c15cb14820625cb.mockapi.io/Pizza?categories=${isCategories}&sortBy=${sort.type}&order=${ASK}`
      )
      .then((res) => {
        setIsLoad(true);
        setPizzasArray(res.data);
      });
  }, [categories, sort]);

  const filter = pizzasArray.filter((el) =>
    el.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const skeleton = [...new Array(8)].map((el, i) => <SkeletonPizza key={i} />);

  return (
    <div className={S.body}>
      {isLoad === false
        ? skeleton
        : filter.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza} />)}
    </div>
  );
};

export default PizzaBlock;
