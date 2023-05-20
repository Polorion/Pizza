import * as React from "react";
import S from "./PizzaBlock.module.scss";
import PizzaItem from "./pizzaItem/PizzaItem";
import SkeletonPizza from "./pizzaItem/SkeletonPizza";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { getAllItems, setParams } from "../../../store/sliceFilter/sliceFilter";
import types from "../../../types";

export interface PizzaItemType {
  id: number;
  categories: number[];
  imgUrl: string;
  name: string;
  size: string[];
  type: number[];
  rating: number;
  price: number;
}
const PizzaBlock = () => {
  const { categories, sort, isLoading, inputSearchValue, pizzaItems } =
    useSelector((state: any) => state.filter);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchRef = React.useRef<boolean>(false);
  const isMountedRef = React.useRef<boolean>(false);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sortProperty = types.sortChoice.find((el) => {
        return el.type === params.sort;
      });
      dispatch(setParams({ ...params, sortProperty }));
      searchRef.current = true;
    }
  }, []);

  React.useEffect(() => {
    if (isMountedRef.current) {
      const queryString = qs.stringify({
        categories,
        sort: sort.type,
      });
      navigate(`?${queryString}`);
    }
    isMountedRef.current = true;
  }, [categories, sort]);

  React.useEffect(() => {
    if (!searchRef.current) {
      // @ts-ignore
      dispatch(getAllItems({ categories, sort }));
    }
    searchRef.current = false;
  }, [categories, sort]);
  const filter = pizzaItems?.filter((el: PizzaItemType) =>
    el.name.toLowerCase().includes(inputSearchValue.toLowerCase())
  );
  const skeleton = [...new Array(8)].map((el, i) => <SkeletonPizza key={i} />);

  return (
    <div className={S.body}>
      {isLoading === true
        ? skeleton
        : filter.map((pizza: PizzaItemType) => (
            <PizzaItem key={pizza.id} pizza={pizza} />
          ))}
    </div>
  );
};

export default PizzaBlock;
