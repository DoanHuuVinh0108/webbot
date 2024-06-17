import React from "react";
import tablePrice from "../../Component/TablePrice";
import Feature from "../../Component/Feature";
import HeaderComponent from "../../Component/HeaderComponent";
import Footer from "../../Component/Footer";
import BannerComponent from "../../Component/BannerComponent";

const TablePrice = tablePrice;

const homePage = () => {
  return (
    <>
      <HeaderComponent />
      <BannerComponent/>
      <Feature />
      <TablePrice />
      <Footer />
    </>
  );
};

export default homePage;
