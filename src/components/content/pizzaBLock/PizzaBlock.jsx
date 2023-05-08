import * as React from "react";
import S from "./PizzaBlock.module.scss";
import PizzaItem from "./pizzaItem/PizzaItem";
import axios from "axios";
import SkeletonPizza from "./pizzaItem/SkeletonPizza";

const PizzaBlock = ({ categories, sort }) => {
  const [pizzasArray, setPizzasArray] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(false);
  React.useEffect(() => {
    setIsLoad(false);

    const isCategories = categories > 0 ? categories : "";

    axios
      .get(
        `https://645754d80c15cb14820625cb.mockapi.io/Pizza?categories=${isCategories}&sortBy=${sort.type}`
      )
      .then((res) => {
        setIsLoad(true);
        setPizzasArray(res.data);
      });
  }, [categories, sort]);

  return (
    <div className={S.body}>
      {isLoad === false
        ? [...new Array(8)].map((el, i) => <SkeletonPizza key={i} />)
        : pizzasArray.map((pizza) => (
            <PizzaItem key={pizza.id} pizza={pizza} />
          ))}
    </div>
  );
};

export default PizzaBlock;
