import React from "react";
import tablePrice from "../../Component/TablePrice";
import FeatureBot from "../../Component/FeatureBot";
import HeaderComponent from "../../Component/HeaderComponent";
const TablePrice = tablePrice;

const homePage = () => {
  return (
    <>
    <HeaderComponent/>
      <FeatureBot />
      <TablePrice />
    </>
  );
};

export default homePage;
