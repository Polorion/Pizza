import * as React from "react";
import S from "./PizzaBlock.module.scss";
import PizzaItem from "./pizzaItem/PizzaItem";
import axios from "axios";
import SkeletonPizza from "./pizzaItem/SkeletonPizza";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { getAllItems, setParams } from "../../../store/sliceFilter/sliceFilter";
import types from "../../../types";

const PizzaBlock = () => {
  const categories = useSelector((state) => state.filter.categories);
  const navigate = useNavigate();
  const sort = useSelector((state) => state.filter.sort);
  const isLoad = useSelector((state) => state.filter.isLoading);
  const searchValue = useSelector((state) => state.filter.inputSearchValue);
  const dispatch = useDispatch();
  const searchRef = React.useRef(false);
  const isMountedRef = React.useRef(false);
  const pizzasArray = useSelector((state) => state.filter.pizzaItems);

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
      dispatch(getAllItems({ categories, sort }));
    }
    searchRef.current = false;
  }, [categories, sort]);
  const filter = pizzasArray?.filter((el) =>
    el.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  const skeleton = [...new Array(8)].map((el, i) => <SkeletonPizza key={i} />);

  return (
    <div className={S.body}>
      {isLoad === true
        ? skeleton
        : filter.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza} />)}
    </div>
  );
};

export default PizzaBlock;
