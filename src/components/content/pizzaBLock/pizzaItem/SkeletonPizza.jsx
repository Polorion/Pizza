import React from "react";
import ContentLoader from "react-content-loader";
import S from "./PizzaItem.module.scss";

const SkeletonPizza = (props) => (
  <div className={S.wrapperPizza}>
    <ContentLoader
      speed={2}
      width={300}
      height={500}
      viewBox="0 0 300 475"
      backgroundColor="#403535"
      foregroundColor="#806f6f"
      className={S.bodyPizza}
      {...props}
    >
      <circle cx="140" cy="140" r="140" />
      <rect x="0" y="295" rx="20" ry="20" width="274" height="37" />
      <rect x="0" y="427" rx="26" ry="26" width="106" height="41" />
      <rect x="0" y="339" rx="20" ry="20" width="274" height="37" />
      <rect x="0" y="383" rx="20" ry="20" width="274" height="37" />
      <rect x="154" y="426" rx="26" ry="26" width="119" height="41" />
    </ContentLoader>
  </div>
);

export default SkeletonPizza;
