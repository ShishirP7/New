import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../../src/Components/Navbar";
import AllCompany from "../../src/Components/AllCompany";


export default function CompanyList() {
  return (
    <div>
      <Navbar />
      <Banner name={"Company List"} />
      <AllCompany />
      
      <Footer />
    </div>
  );
}
