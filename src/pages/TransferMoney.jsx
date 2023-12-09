import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TransferForm from "../components/TransferForm";
export default function Transfer() {
  return (
    <div className="transfermoney">
      <Header />
<div className="Register">
      <div className="transfermoney-container">
        <TransferForm />
        </div>
        <Footer />
      </div>

    </div>
  );
}
