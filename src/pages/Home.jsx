import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript

import CarouselMain from "../components/CarouselMain";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container align-items-center justify-content-center">
        <h2 className="container text-primary  m-4 p-4">
          Welcome to CoinConnect: Your Gateway to Seamless Transactions!{" "}
        </h2>
        <CarouselMain />
      </div>
      <Footer />
    </>
  );
}
