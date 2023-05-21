import * as React from "react";
import S from "./PizzaBlock.module.scss";
import PizzaItem from "./pizzaItem/PizzaItem";
import SkeletonPizza from "./pizzaItem/SkeletonPizza";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import {
  getAllItems,
  setParams,
  SetParamsType,
} from "../../../store/sliceFilter/sliceFilter";
import types from "../../../types";
import { RootState } from "../../../store/store";

export type PizzaItemType = {
  categories: number[];
  id: number;
  imgUrl: string;
  name: string;
  price: number;
  rating: number;
  size: string[];
  type: number[] | { id: number; size: string };
  idCart?: number;
  count?: number;
};

const PizzaBlock: React.FC = () => {
  const { categories, sort, isLoading, inputSearchValue, pizzaItems } =
    useSelector((state: RootState) => state.filter);
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
      console.log({ ...params, sortProperty });
      if (sortProperty) {
        dispatch(
          setParams({
            sort: sortProperty,
            categories: Number(params.categories),
          })
        );
        searchRef.current = true;
      }
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
  const filter = pizzaItems?.filter((el: any) =>
    el.name.toLowerCase().includes(inputSearchValue.toLowerCase())
  );
  const skeleton = [...new Array(8)].map((el, i) => <SkeletonPizza key={i} />);

  return (
    <div className={S.body}>
      {isLoading === true
        ? skeleton
        : filter.map((pizza: PizzaItemType) => (
            <PizzaItem key={pizza.id} {...pizza} />
          ))}
    </div>
  );
};

export default PizzaBlock;
